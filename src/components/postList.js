import { useSelector } from "react-redux";
import { fetchPosts, addNewPost, removePost } from "../features/posts/postSlice";
import { useDispatch } from "react-redux";
import { useState, useEffect } from 'react';
import '../styles/postList.css';

function PostList() {
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const dispatch = useDispatch();
  const { posts, status, error } = useSelector((state) => state.posts);

  const handleDeletePost = (id) => {
    //verify if the user wants to delete the post 
    const confirmDelete = window.confirm("Are you sure you want to delete this post? this action cannot be undone.");
    if (confirmDelete) {
      dispatch(removePost(id));
    }
  };

  const handleSearch = (event) => {
    const term = event.target.value.toLowerCase();
    setSearchTerm(term);

    const filtered = posts.filter((post) =>
      post.name.toLowerCase().includes(term) || post.description.toLowerCase().includes(term)
    );
    setFilteredPosts(filtered);
  };

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  useEffect(() => {
    setFilteredPosts(posts);
  }, [posts]);

  return (
    <div>
      <div className="searchContainer">
      <input type="text" placeholder="Filter..." value={searchTerm} onChange={handleSearch} />
      <div  className="containerButton">
        <button className="btn btn-primary" value={searchTerm}  onClick={handleSearch}>
          Search
        </button>
      </div>
      </div>
 
      {status === 'loading' ? (
        <div>Loading...</div>
      ) : status === 'succeeded' ? (
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Description</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredPosts.map((post) => (
              <tr key={post.id}>
                <td>{post.name}</td>
                <td>{post.description}</td>
                <td>
                  <button className ="delete" onClick={() => handleDeletePost(post.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <div>Error: {error}</div>
      )}
    </div>
  );
}

export default PostList;