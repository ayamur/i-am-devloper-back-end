const { Post, Profile } = require('../models')




const createPost = async (req, res) => {
  try {
    // const post = await Post.create(req.body)
    const post = await Post.create({ profileId:req.user.id, ...req.body })
    // const profile = await Profile.findOne({ where: { id: req.body.profileId } })
    res.status(200).json(post)
  } catch (error) {
    console.log(error)
    res.status(500).json({ err: error })
  }
}

const getPosts = async (req, res) => {
  try {
    const posts = await Post.findAll()
    res.status(200).json(posts)
  } catch (error) {
    res.status(500).json(error)
  }
}

const deletePost = async (req, res) => {
  try {
    const post = await Post.findByPk(req.params.id)
    if (post.profileId === req.user.profile.id){
    await post.destroy()
    }
    res.status(200).json(post)
  } catch (error) {
    res.status(500).json(error)
  }
}

const showPost = async (req, res) => {
  try {
    const post = await Post.findByPk(req.params.id) 
    res.status(200).json(post)
  } catch (error) {
    res.status(500).json(error)
  }
}

// const updatePost = async (req, res) => {
//   try {
//     const postId = req.params.id
//     const post = await Post.findOne({ where: { id: postId } })
//     if (post.profileId !== req.user.id) {
//       return res.status(403).json({ error: 'YOU SHALL NOT UPDATE!... (unless you are the post creator)'})
//     }
//     const updatedPost = await post.update(req.body)
//     const updatedPostWProfile = await Post.findOne({ 
//       where: { id: postId },
//       include: { model: Profile }
//     })
//     res.status(200).json(updatedPostWProfile)
//   } catch (error) {
//     res.status(500).json(error)
//   }
// }


module.exports = {
  createPost,
  getPosts,
  deletePost,
  showPost,
  // updatePost
}
