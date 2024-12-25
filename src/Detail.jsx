import { useParams, Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import './App.css'

const Detail = () => {
    const [data, setData] = useState({})
    const params = useParams()
    const [loader, setLoader] = useState(true)

    useEffect(()=>{
        axios(`https://jsonplaceholder.typicode.com/users/${params.id}`)
        .then(({data}) => {setData(data); setLoader(false)})
    }, [params.id])

    if (loader) {
        return <div className="loader"></div>
    }
    return (
        <div>
            <h1>{data.name}</h1>
            <h2>{data.username}</h2>
            <h2>{data.email}</h2>
            <h2>{data.phone}</h2>
            <h2>{data.website}</h2>
            <Link to={'/'}>go home</Link>
        </div>
    );
}

export default Detail;
