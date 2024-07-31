import React, { useState, useEffect } from 'react';

function UpdateMethod() {
  const [postData, setPostData] = useState({
    id: 1,
    title: '',
    body: '',
  });

  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPostData({
      ...postData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    const apiUrl = `https://jsonplaceholder.typicode.com/posts/${postData.id}`;

    const requestOptions = {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(postData),
    };

    // send the PUT (update) request
    fetch(apiUrl, requestOptions)
      .then((response) => response.json())
      .then((data) => {
        setMessage('Post Updated successfully.');
        console.log('Response Data:', data);
      })
      .catch((error) => {
        console.log('Error:', error);
        setMessage('Error Updating the Post.');
      })
      .finally(() => {
        setLoading(false);
      });
  };

  // Load the initial post data when the component mounts
  useEffect(() => {
    const postId = postData.id;
    const apiUrl = `https://jsonplaceholder.typicode.com/posts/${postId}`;
    setLoading(true);

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        setPostData(data);
        console.log(data);
        setLoading(false);
      })
      .catch((error) => {
        console.log('Error', error);
        setLoading(false);
      });
  }, [postData.id]);

  return (
    <>
      {loading && <p>Loading...</p>}
      {message && <p>{message}</p>}

      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title</label>
          <input type="text" name="title" value={postData.title} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="body">Body</label>
          <textarea name="body" value={postData.body} onChange={handleChange} />
        </div>

        <button type="submit">Update Post</button>
      </form>
    </>
  );
}

export default UpdateMethod;
