const { Reaction } = require('../models')

async function chooseReaction(req, res) {
  try {
		req.body.reactionId = req.user.profile.id
    const reaction = await Reaction.create(req.body)
    res.status(200).json(reaction)
  } catch (error) {
    res.status(500).json({ err: error })
  }
}

module.exports = {
  chooseReaction
}
