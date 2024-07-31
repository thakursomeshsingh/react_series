import React, { useState, useEffect } from 'react';
import { getPosts, createPost, updatePost, deletePost } from './LocalAPI';

function GetDataAPI() {
  const [posts, setPosts] = useState([]);
  const [newPost, setNewPost] = useState({ title: "", body: "" });

  // GET Request
  useEffect(() => {
    getPosts()
      .then((response) => {
        setPosts(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log("Error fetching posts:", error);
      });
  }, []);

//   Update Post
const handleUpdatePost = (postId, updatedData)=>{
    updatePost(postId, updatedData)
    .then((response)=>{
        const updatedPosts = posts.map((post)=>
        post.id === postId ? response.data : post
    );
    setPosts(updatedPosts);
    console.log(updatedPosts);

     })
     .catch((error)=>{
        console.log("Error updating post: ", error);
     });
};

// delete request
const handleDeletePost = (postId) => {
  deletePost(postId)
  .then(()=>{
    const updatedPosts = posts.filter((post) => post.id !== postId);
    setPosts(updatedPosts);
  })
  .catch((error)=>{
    console.log("Error Deleting post: ", error);
  });
}

// create Request
const handleCreatePost = () =>{
  createPost(newPost).then((response)=>{
    setPosts([...posts, response.data]);
    setNewPost({ title: "", body: ""});
  })
  .catch((error)=>{
    console.log("Error Creating post", error);
  });
};

  return (
    <div>
      <h1>Posts</h1>
     <ul> {posts.map((post) => (
        <li key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.body}</p>

          <button onClick={()=>handleUpdatePost(post.id,{
            title: "Updates title",
            body: "Updated Body",
          })
          }
          >Update</button>
          <button onClick={()=>handleDeletePost(post.id)}>Delete</button>
        </li>
      ))}
      </ul>

      <hr />
 
      <br />
      <br />
      <h2>Create New Post</h2>
      <input type="text" placeholder='title' value={newPost.title}
      onChange={(e) => setNewPost({...newPost, title: e.target.value})} />
     
      <input type="text" placeholder='body' value={newPost.body}
      onChange={(e) => setNewPost({...newPost, body: e.target.value})} />

      <button onClick={handleCreatePost}>Create</button>
    </div>
  );
}

export default GetDataAPI;
