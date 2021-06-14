import React, { useEffect, useState } from 'react';
import Post from '../Post/Post';

const Home = () => {
    const [posts,setPosts] =useState([]);
    useEffect(()=>{
        const url =`https://jsonplaceholder.typicode.com/posts`;
        fetch(url)
        .then(res=>res.json())
        .then(data=>setPosts(data))
    },[])  
    return (
        <div>
           <h4>this is home</h4> 
           <h5>I have got {posts.length} Post</h5>
           {
               posts.map(post=> <Post post={post}></Post>)
           }
        </div>
    );
};

export default Home;