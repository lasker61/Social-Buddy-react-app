import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Comment from '../Comment/Comment';

const PostDetail = () => {
    const {id} =useParams();
    const [post,setPost] =useState({});
    const [comments,setComments]=useState([]);
    useEffect(()=>{
        const url =`https://jsonplaceholder.typicode.com/posts/${id}`;
        fetch(url)
        .then(res =>res.json())
        .then(data =>setPost(data));
    }, [id] )
    useEffect( ()=>{
        const url=`https://jsonplaceholder.typicode.com/comments?postId=${id}`;
        fetch(url)
        .then(res=>res.json())
        .then(data=>setComments(data));
    },[id])
    return (
        <div>
            <h3>Details of Post {id}</h3>
            <h4>Title: {post.title}</h4>
            <p>Body: {post.body}</p>
            <p>Number of comments: {comments.length}</p>
            {
                comments.map(comment=> <Comment comment={comment}></Comment>)
            }

        </div>
    );
};

export default PostDetail;