const { Post } = require('../models')


async function createPost(req, res) {
  try {
    const post = await Post.create(req.body)
    res.status(200).json(post)
  } catch (error) {
    console.log(error)
    res.status(500).json({ err: error })
  }
}

async function getPosts(req, res) {
  try {
    const posts = await Post.findAll()
    res.status(200).json(posts)
  } catch (error) {
    console.log(error)
    res.status(500).json({ err: error })
  }
}


module.exports = {
  createPost,
  getPosts
}
