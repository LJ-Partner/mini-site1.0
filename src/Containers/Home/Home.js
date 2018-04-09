import React, {Component} from 'react'
import ReactDOM from 'react-dom';
import Api from '../../Api/index.js';
import './Home.less';
import '../../assets/index.js'
import {Loading, MiniCarousel} from '../../Components/index'
const IndexHeadCarousel = {
    autoPlay: true,
    showArrows: false,
    showStatus: false,
    showThumbs: false,
    infiniteLoop: true
}
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
                <div className="wrap">
                    <div className="main home" >
                        <div className="main-cnt">
                            <MiniCarousel
                            config={IndexHeadCarousel}
                             bannerList={[_home.index.Banner1,_home.index.Banner2,_home.index.Banner3]}/>
                        </div>
                    </div>
                </div>
                
            )
        } else {
            return (

                <div className="main">
                    <Loading/>
                </div>
            )
        }

    }

}