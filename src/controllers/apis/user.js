const db = require("../../database/models");

module.exports = {
    detail: async(req, res) => {
        db.User.findByPk(req.params.id, {raw: true})
            .then(data => {
                data.avatar = req.protocol + '://' + req.get('host') + '/images/profile/' + data.avatar;
                let { password, ...user } = data;
                return res.status(200).json(user);
            });
        

    },

    createdLast: async (req, res) => {    
        return res.status(200).json( await db.User.findOne(
            {
                order: [
                    ["id", "DESC"]
                ]
            }
        ))
    }
}
