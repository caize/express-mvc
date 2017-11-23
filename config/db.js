/**
 * Created by apple on 2017/11/22.
 */
const orm = require('orm');
const config = require('./config');

module.exports = orm.connect(config.dbConf, (err, db) => {
    if (err) throw new Error(err)
    return db;
})

