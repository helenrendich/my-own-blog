import React from "react";
import {BlogEntry} from "../model/BlogEntry";



export default function BlogCard(props: BlogEntry){
    return (
        <div>
            <h2> {props.title} </h2>
            <p> Author: {props.author}</p>
            <img src={props.image}/>
            <p> {props.content}</p>
        </div>
)
}