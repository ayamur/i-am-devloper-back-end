const { Post, Profile } = require('../models')
const profile = require('../models/profile')



async function createPost(req, res) {
  try {
    // const post = await Post.create(req.body)
    const post = await Post.create({ profileId: req.user.id, ...req.body })
    // const profile = await Profile.findOne({ where: { id: req.body.profileId } })
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
    res.status(500).json(error)
  }
}

async function deletePost(req, res) {
  try {
    const post = await Post.findByPk(req.params.id)
    if (post.profileId === req.user.profile.id) {
      await post.destroy()
    }
    res.status(200).json(post)
  } catch (error) {
    res.status(500).json(error)
  }
}

async function showPost(req, res)  {
  try {
    const post = await Post.findByPk(req.params.id)
    res.status(200).json(post)
  } catch (error) {
    res.status(500).json(error)
  }
}

async function updatePost(req, res) {
  try {
    const post = await Post.findByPk(req.params.id)
    if (post.profileId !== req.user.id) {
      return res.status(403).json({ error: 'Nope. You did not make this so you cannot un-make this.' });
    }
    await post.update(req.body);
    const updatedPost = await post.reload();
    res.status(200).json(updatedPost);
  } catch (error) {
    res.status(500).json({ error });
  }
}



module.exports = {
  createPost,
  getPosts,
  deletePost,
  showPost,
  updatePost
}
