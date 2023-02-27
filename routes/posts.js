const router = require('express').Router()
const postsCtrl = require('../controllers/posts.js')
const middleware = require('../middleware/auth.js')

const { decodeUserFromToken, checkAuth } = middleware



/*---------- Public Routes ----------*/



/*---------- Protected Routes ----------*/
router.use(decodeUserFromToken)
router.post('/', checkAuth, postsCtrl.createPost)
router.get('/', checkAuth, postsCtrl.getPosts)
router.delete('/:id', checkAuth, postsCtrl.deletePost)
router.get('/:id', checkAuth, postsCtrl.showPost)
router.put('/:id', checkAuth, postsCtrl.updatePost)



module.exports = router