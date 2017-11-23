/**
 * Created by apple on 2017/11/22.
 */
const User = db.define('user', {
    id: Number,
    username: String,
    email: String,
    password: String,
    nickname: String,
    signature: String,
    avatar: String
})

module.exports = {
    getAllUser() {
        return User.findAsync();
    }
}

