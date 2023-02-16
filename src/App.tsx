import React from 'react';
import './App.css';
import Header from "./component/Header";
import {BlogEntry} from "./model/BlogEntry";
import BlogGallery from "./component/BlogGallery";


function App() {

    const blogEntries: BlogEntry[] = [{id: "1",
        title: "Co-Working Spaces",
        author: "Helen Rendich",
        content: "Many towns and cities offer co-working spaces.",
        image:"https://easycontent-attachments.s3.amazonaws.com/527/1255/112051/tjlj0tvj53c4wwgsxbmd5mu9ix8m97im/A%20group%20of%20young%20people%20in%20a%20coworking%20space%20common%20area.jpg"}];

  return (
    <div className="App">
        <header className="Header">
          <Header/>
        </header>

        <BlogGallery blogEntries={blogEntries}/>

    </div>
  );
}

export default App;
