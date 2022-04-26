const {Users, user_score} = require('../models');

async function addScoreWin(userGameid){
    const data = await user_score.create({
        userId: userGameid,
        isWin:true
    })
    return Promise.resolve(data);
}

module.exports ={
    pushScore: async function (req,res) {
        let user = await Users.authenticate(req.body)
        let data = await addScoreWin(user.get('id'))
        if(data == null){
            res.status(500).json({
                msg: `fail to input score`
            })
        }
        res.status(200).json({
            msg: `score inputed`
        })
    },
    getScore: async function (req,res) {
        let user = await Users.authenticate(req.body)
        let score = await user_score.count({
            where:{
                userId: user.get('id')
            }
        })
        res.status(200).json({
            score: `${score}`
        })
    }
}