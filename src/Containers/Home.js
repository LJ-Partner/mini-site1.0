import React, {Component} from 'react'
import ReactDOM from 'react-dom';
import Api from '../Api/index.js';
import Loading from '../Components/loading/loading.js'
export default class Home extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            homedata: {}

        }
    }
    async request() {
        //输入路由参数
        await Api
            .Home(this.props.match.params.id)
            .then(res => {
                const _data = res.data.content;

                this.setState({homedata: _data});

            })
            .catch(err => console.log('There was an error:' + err));
    }

    componentDidMount() {
        this.request();
    }
    render() {

        let _home = this.state.homedata;
        // 一定要这样写
        if (Object.keys(_home).length > 0 && _home.constructor == Object) {
            return (

                <div className="main">
                    {_home.index.Introduce}
                </div>
            )
        } else {
            return (

                <div className="main">
                     <Loading /> 
                </div>
            )
        }

    }

}