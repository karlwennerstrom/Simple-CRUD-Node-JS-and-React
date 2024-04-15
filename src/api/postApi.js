import axios from 'axios';

const API_URL = `${process.env.REACT_APP_URL_API}:${process.env.REACT_APP_PORT_API}/posts`;
console.log(API_URL)

export const getPosts = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const createPost = async (post) => {
  const response = await axios.post(API_URL, post);
  return response.data;
};

export const deletePost = async (id) => {
  const response = await axios.delete(`${API_URL}/${id}`);
  return response.data;
};