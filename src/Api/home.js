import axios from 'axios'
const Home = (Instance,id)=>{
    let rep =  Instance.get(id + '/website');
    return rep;
}
module.exports=Home