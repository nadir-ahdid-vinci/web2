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

router.post('/', (req, res) => {
  const title = req?.body?.title?.length !== 0 ? req.body.title : undefined;
  const link = req?.body?.content?.length !== 0 ? req.body.link : undefined;
  const duration = typeof req?.body?.duration !== 'number' || req.body.duration < 0 ? undefined : req.body.duration;
  const budget = typeof req?.body?.budget !== 'number' || req.body.budget < 0 ? undefined : req.body.budget;

  if (!title || !link || !duration || !budget) return res.sendStatus(400);

  const lastItemIndex = films?.length !== 0 ? films.length - 1 : undefined;
  const lastId = lastItemIndex !== undefined ? films[lastItemIndex]?.id : 0;
  const nextId = lastId + 1;

  const newFilm = { id: nextId, title, link, duration, budget };

  films.push(newFilm);

  return res.json(newFilm);
});

router.delete('/:id', function (req,res){
  const foundIndexFilm = films.findIndex(films => films.id == req.params.id);

  if(foundIndexFilm < 0) return res.sendStatus(404);

  const filmRemovedFromFilms = films.splice(foundIndexFilm, 1);

  const filmRemoved = filmRemovedFromFilms[0];

  res.json(filmRemoved);
});

router.patch('/:id', function (req,res){
  
});

router.put('/:id', function (req,res){

});

module.exports = router;