import React from "react";
import {type} from "os";
import {BlogEntry} from "../model/BlogEntry";
import BlogCard from "./BlogCard";

type BlogGalleryProps = {
    blogEntries: BlogEntry[]
}


export default function BlogGallery(props: BlogGalleryProps){

    const blogEntryCards = props.blogEntries.map(blogEntry =>
        <BlogCard
        id={blogEntry.id}
        title={blogEntry.title}
        author={blogEntry.author}
        content={blogEntry.content}
        image={blogEntry.image}/>);


    return <div className= "BlogGallery"> {blogEntryCards}</div>

}