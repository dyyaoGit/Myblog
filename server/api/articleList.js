import {Router} from 'express';
const router = Router();

import db from 'mysql';
const connection = db.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'yjr1923521',
    database : 'blog'
})




router.get('/articleList',function(req, res, next) {
    connection.connect();
    connection.query('SELECT * FROM articleList', function (error, results, fields) {
        if (error) throw error;
        console.log(results)
        res.json({data: results, msg: "success", ret: true})
    });
    connection.end()

})
export default router;