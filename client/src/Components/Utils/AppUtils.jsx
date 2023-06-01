import axios from 'axios';

export default function getCard(setData, endPoint){
    axios.get(`http://192.168.1.53:4000${endPoint}`)
    .then((res)=> setData(res.data));
}