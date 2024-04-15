const express = require('express');
const cors = require('cors');
const path = require('path');
const sequelize = require('./app/config/database');
const Post = require('./app/models/post');
const { Op } = require('sequelize');
require('dotenv').config();

//allowing only the frontend url to access the api
const allowedOrigins = [process.env.REACT_APP_URL_API, process.env.REACT_APP_URL_API_LOCAL];

console.log(allowedOrigins);
//syncing the database
const app = express();
//allow with cors the frontend to access the api

app.use(cors({
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  }
}));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
//generate post with name and description and return the post
app.post('/posts', async (req, res) => {
  try {
    const { name, description } = req.body;
    
    if (!name || !description) {
      return res.status(400).json({ error: 'Name and description are required' });
    }
    
    const newPost = await Post.create({ name, description });
    res.status(201).json(newPost);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});
//delete post by id and return the post

app.delete('/posts/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const postToDelete = await Post.findByPk(id);
    
    if (!postToDelete) {
      return res.status(404).json({ error: 'Post not found' });
    }
    
    await postToDelete.destroy();
    res.status(200).json(postToDelete);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

//get all posts and return the posts
app.get('/posts', async (req, res) => {
  try {
    const posts = await Post.findAll();
    res.json(posts);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});
//return internal server error if the route is not found
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Internal Server Error' });
});

//Server listening on port  and log the port 
const port = process.env.REACT_APP_PORT_API;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});