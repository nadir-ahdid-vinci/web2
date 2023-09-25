var express = require('express');
var router = express.Router();

const films = [
  {
    id: 1,
    title: 'Star Wars: The Phantom Menace (Episode I)',
    duration: 136,
    budget: '115',
    link: 'https://en.wikipedia.org/wiki/Star_Wars:_Episode_I_%E2%80%93_The_Phantom_Menace',
  },
  {
    id: 2,
    title: 'Star Wars: Episode II – Attack of the Clones',
    duration: 142,
    budget: 115,
    link: 'https://en.wikipedia.org/wiki/Star_Wars:_Episode_II_%E2%80%93_Attack_of_the_Clones',
  },
  {
    id: 3,
    title: "Zack Snyder's Justice League",
    duration: 242,
    budget: 70,
    link: 'https://en.wikipedia.org/wiki/Zack_Snyder%27s_Justice_League',
  },
];

router.get('/:id', function (req,res){
  const indexOfFilm = films.findIndex((films) => films.id == req.params.id);
  if(indexOfFilm < 0) return res.sendStatus(404);
  res.json(films[indexOfFilm]); 
});

router.get('/', function (req,res){
  const newFilm = [];
  const minimum = req?.query['minimum-duration'] ?? undefined;
  if(minimum){
    for (const film of films) {
      console.log(film.duration);
      if (film.duration >= req.query['minimum-duration']){
        newFilm.push(film);
      }
    }
    console.log(newFilm);
  }
  return res.json(newFilm ?? films);
});

router.post('/', function (req, res){
  const budgets = req?.body?.budget > 0 ? req.body.budget : undefined;
  const durations = req?.body?.duration > 0 ? req.body.duration : undefined;

  let addFilm = [
    title = req.body.title,
    duration = req.body.duration,
    budget = req.body.budget,
    link = req.body.link
  ];
  films.push(addFilm);
  
});

module.exports = router;