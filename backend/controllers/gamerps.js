const {GameRPS, Users} = require('../models');
const sequelize = require('sequelize')

module.exports = {
    game: async (req, res) => {
        try {
            
            const game = await GameRPS.create({
                name: req.user.username,
                userId: req.user.id,
                score: req.body.score
            });
            res.status(200).json(game)
           
        } catch (err) {
            res.status(401).json({
                error: err.message
            })
        }
       
    },
    profile: async (req, res) => {
        try {
            const userProfile = await Users.findAll({
                attribute: ['id', 'username'],
                include:[
                    {
                        attribute: [ [sequelize.fn("COUNT", sequelize.col('username')), "score"]],
                        model: GameRPS
                    }
                ],
                group: ['Users.id', 'GameRPs.id']
            })

            res.status(200).json(userProfile)
        } catch (err) {
            res.status(401).json({
                error: err.message
            })
        }
    }
}