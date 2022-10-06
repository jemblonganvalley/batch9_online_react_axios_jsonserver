import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom"

export default function Detail(){
    
    // menangkap parameter id dari url
    const { id } = useParams()

    // state
    const [ detailBlog , setDetailBlog ] = useState()

    //comp did mount
    useEffect(()=>{
        axios.get(`http://localhost:3000/blogs/${id}`)
        .then((res)=>{
            setDetailBlog(res.data)
        })
        .catch((err)=>{
            console.error(err)
        })
    },[])

    // jika data belum ke load
    if(!detailBlog){
        return (
            <div className="loading_screen">
                loading...
            </div>
        )
    }

    return (
        <div className="container">

            <section className="wrapper wrapper_detail">
                <h1>{detailBlog.title}</h1>
                <img src={detailBlog.banner} alt={detailBlog.title} />
                <p>
                    {detailBlog.body}
                </p>
            </section>

        </div>
    )
}