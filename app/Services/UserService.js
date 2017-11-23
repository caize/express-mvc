/**
 * Created by apple on 2017/11/22.
 */
const UserModel = require('../Models/UserModel');

module.exports = {
    getUser() {
        return function *() {
            let results = yield UserModel.getAllUser();
            return results;
        }
    }
}
