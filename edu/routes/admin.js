var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
    res.render('backend/login');
});


router.get("/home", function (req, res, next) {
    res.render('backend/index');
})


router.post('/checklogin', function (req, res, next) {
    if (req.body.email == 'mohan@gmail.com' && req.body.pass == "12345") {
        res.redirect("/admin/home");
    }
})

module.exports = router;
