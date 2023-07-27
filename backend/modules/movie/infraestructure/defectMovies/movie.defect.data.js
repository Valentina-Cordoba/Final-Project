const moviesData = [
  {
    name: 'Avatar',
    description:
      "Jake Sully and Ney'tiri have formed a family and do everything they can to stay together. However, they must leave their home and explore the regions of Pandora when an ancient threat reappears.",
    url: 'https://pics.filmaffinity.com/avatar_the_way_of_water-722646748-mmed.jpg',
    release_date: new Date('2022-12-16'),
    duration: '3h 12m',
    genre: 'Science Fiction - Adventure',
    recommended_age: '12+',
    synopsis:
      "Jake Sully and Ney'tiri have formed a family and do everything they can to stay together. However, they must leave their home and explore the regions of Pandora when an ancient threat reappears.",
  },
  {
    name: 'Avengers: Age of Ultron',
    description:
      'Tony Stark wants to launch a new peace program, but something goes wrong and he ends up creating Ultron, a robot that wants to destroy humanity. Thor, Hulk, and the rest of the Avengers must join forces once again to fight the robot. On their way to destroy Ultron, the Avengers will meet two new mysterious companions, Pietro and Wanda Maximoff, known as Quicksilver and Scarlet Witch.',
    url: 'https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_.jpg',
    release_date: new Date('2015-05-01'),
    duration: '2h 21m',
    genre: 'Science Fiction - Superhero',
    recommended_age: '8+',
    synopsis:
      'Tony Stark wants to launch a new peace program, but something goes wrong and he ends up creating Ultron, a robot that wants to destroy humanity. Thor, Hulk, and the rest of the Avengers must join forces once again to fight the robot. On their way to destroy Ultron, the Avengers will meet two new mysterious companions, Pietro and Wanda Maximoff, known as Quicksilver and Scarlet Witch.',
  },
  {
    name: 'El castillo ambulante',
    description:
      "Sophie, an 18-year-old girl, works tirelessly at her late father's hat shop. During one of her rare trips to the city, Sophie meets the wizard Howl, a young man with extraordinary powers and extremely charming.",
    url: 'https://ramenparados.com/wp-content/uploads/2016/01/castillo-ambulante-300x437.jpg',
    release_date: new Date('2004-11-20'),
    duration: '1h 59m',
    genre: 'Anime - Drama - Fantasy',
    recommended_age: '8+',
    synopsis:
      "Sophie, an 18-year-old girl, works tirelessly at her late father's hat shop. During one of her rare trips to the city, Sophie meets the wizard Howl, a young man with extraordinary powers and extremely charming.",
  },
  {
    name: 'Depredador',
    description:
      'A group of mercenaries is hired by the CIA to rescue pilots who have been captured by the guerrillas in the Central American jungle.',
    url: 'https://r1.abcimg.es/resizer/resizer.php?imagen=https%3A%2F%2Fs3.abcstatics.com%2Fmedia%2Fpeliculas%2F000%2F002%2F624%2Fdepredador-1.jpg&nuevoancho=683&medio=abc',
    release_date: new Date('1987-06-12'),
    duration: '1h 47m',
    genre: 'Science Fiction - Adventure',
    recommended_age: '12+',
    synopsis:
      'A group of mercenaries is hired by the CIA to rescue pilots who have been captured by the guerrillas in the Central American jungle.',
  },
  {
    name: 'Cómo entrenar a tu dragón',
    description:
      'Hiccup, a teenage Viking, starts dragon training classes and finally sees an opportunity to prove that he is capable of becoming a warrior when he befriends an injured dragon.',
    url: 'https://static.wikia.nocookie.net/doblaje/images/5/5e/ComoEntrenaratuDragon.jpg/revision/latest?cb=20201014214406&path-prefix=es',
    release_date: new Date('2010-03-26'),
    duration: '1h 38m',
    genre: 'Adventure - Fantasy',
    recommended_age: 'All ages',
    synopsis:
      'Hiccup, a teenage Viking, starts dragon training classes and finally sees an opportunity to prove that he is capable of becoming a warrior when he befriends an injured dragon.',
  },
  {
    name: 'Home: No hay lugar como el hogar',
    description:
      'A group of peaceful aliens are fleeing from their enemies and decide to hide from them on Earth. However, one of these humble extraterrestrials accidentally notifies their pursuers of their location, and he has no choice but to flee with a teenage girl.',
    url: 'https://static.wikia.nocookie.net/doblaje/images/2/2f/HOME_LAT.jpg/revision/latest?cb=20150212011433&path-prefix=es',
    release_date: new Date('2015-03-27'),
    duration: '1h 34m',
    genre: 'Comedy - Children - Drama - Fantasy',
    recommended_age: 'All ages',
    synopsis:
      'A group of peaceful aliens are fleeing from their enemies and decide to hide from them on Earth. However, one of these humble extraterrestrials accidentally notifies their pursuers of their location, and he has no choice but to flee with a teenage girl.',
  },
  {
    name: 'Siniestro',
    description:
      "Ellison Oswald, a writer of true crime stories, is in a bad streak, he hasn't had a hit in over 10 years and is desperate. When he discovers a film that shows the deaths of a family, he promises to solve the mystery. He moves his own family into the victims' house and gets to work. However, when old images and other clues point to a supernatural presence, Ellison discovers that living in that house could put his own family in danger.",
    url: 'https://pics.filmaffinity.com/Sinister-127255424-large.jpg',
    release_date: new Date('2012-11-09'),
    duration: '1h 50m',
    genre: 'Horror - Suspense',
    recommended_age: '15+',
    synopsis:
      "Ellison Oswald, a writer of true crime stories, is in a bad streak, he hasn't had a hit in over 10 years and is desperate. When he discovers a film that shows the deaths of a family, he promises to solve the mystery. He moves his own family into the victims' house and gets to work. However, when old images and other clues point to a supernatural presence, Ellison discovers that living in that house could put his own family in danger.",
  },
  {
    name: 'Step Up 3',
    description:
      'The world of New York street dance provides the backdrop for the story of two dancers, Luke and Natalie. The talented pair teams up with a student from New York University named Moose to take part in a high-level dance-off against the best hip-hop dancers. All or nothing, the competition will change their lives forever.',
    url: 'https://images-na.ssl-images-amazon.com/images/S/pv-target-images/5ba0564961b246aa7b0476e0fcb5e27a46cfeae8cd3ea75c4dc67b4b424ea23f._RI_TTW_.jpg',
    release_date: new Date('2010-08-06'),
    duration: '1h 47m',
    genre: 'Romance - Musical - Drama',
    recommended_age: '12+',
    synopsis:
      'The world of New York street dance provides the backdrop for the story of two dancers, Luke and Natalie. The talented pair teams up with a student from New York University named Moose to take part in a high-level dance-off against the best hip-hop dancers. All or nothing, the competition will change their lives forever.',
  },
];

module.exports = moviesData;
