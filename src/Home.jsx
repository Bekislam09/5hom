import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useLocation } from 'react-router-dom'
import './App.css'

const Home = () => {
    const [data, setData] = useState([])
    const [loader, setLoader] = useState(true)
    const location = useLocation()

    useEffect(() =>{        
        axios('https://jsonplaceholder.typicode.com/users')
        .then(({data}) => {setData(data); setLoader(false)})
    } , [location])

    if (loader){
        return <div className="loader"></div>
    }
    return (
        <div style={{
            textAlign: 'center'
        }} >

            {
            data.map(item =>(
                <h1 key={item.id}><Link to={`/user/${item.id}`} >{item.username}</Link></h1>
            ))
            }
            
        </div>
    );
}

export default Home;
