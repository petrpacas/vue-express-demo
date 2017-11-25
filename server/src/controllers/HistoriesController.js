const {
  History,
  Song
} = require('../models')
const _ = require('lodash')

module.exports = {
  async index (req, res) {
    try {
      const userId = req.user.id
      const histories = await History.findAll({
        where: {
          UserId: userId
        },
        include: [{
          model: Song
        }]
      }).map(history => history.toJSON())
        .map(history => _.extend(
          {},
          history.Song,
          history
        ))
      res.send(_.uniqBy(histories, history => history.SongId))
    } catch (err) {
      res.status(400).send({
        error: 'An error has occured trying to fetch the history.'
      })
    }
  },
  async post (req, res) {
    try {
      const userId = req.user.id
      const {songId} = req.body
      const history = await History.create({
        UserId: userId,
        SongId: songId
      })
      res.send(history)
    } catch (err) {
      res.status(400).send({
        error: 'An error has occured trying to create the history object.'
      })
    }
  }
}
