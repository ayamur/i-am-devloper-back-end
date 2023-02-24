const router = require('express').Router()
const reactionsCtrl = require('../controllers/reactions.js')
const middleware = require('../middleware/auth.js')

const { decodeUserFromToken, checkAuth } = middleware

/*---------- Public Routes ----------*/


/*---------- Protected Routes ----------*/
router.use(decodeUserFromToken)
router.post('/', checkAuth, reactionsCtrl.chooseReaction)

module.exports = router