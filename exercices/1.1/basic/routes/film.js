var express = require('express');
var router = express.Router();

/* GET home page. */
const film = [
    {
        id: 1,
        title: "Film 1",
        duration: 150,
        budget: 500000000000000,
        link: "https://www.oui.com"
    },
    {
        id: 2,
        title: "Film 2",
        duration: 10,
        budget: 358,
        link: "https://www.non.com"
    },

    
];


router.get('/', function(req, res, next) {
  return res.json(film);
});

module.exports = router;