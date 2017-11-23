/**
 * Created by apple on 2017/11/22.
 */
const UserService = require('../Services/UserService');
const co = require('co');

module.exports = {
    getUser(req, res) {
        co(UserService.getUser())
            .then(user => {
                return res.json(user);
            })
    }
}
