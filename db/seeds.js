const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

const { db, env } = require('../config/environment');
const Bird      = require('../models/bird');

Bird.collection.drop();

// const databaseURI = 'mongodb://localhost/project-4-development';
// mongoose.connect(databaseURI, { useMongoClient: true });

const birdData = [{
  // .create([{
  name: 'Dipper',
  image: 'http://www.birdid.co.uk/Static/Images/Img00006V002.jpg',
  color: ['black', 'brown', 'white']
},{
  name: 'Adult Grey Plover',
  image: 'http://www.birdid.co.uk/Static/Images/Img00010V001.jpg',
  color: ['black', 'grey']
},{
  name: 'Adult Herring Gull',
  image: 'http://www.birdid.co.uk/Static/Images/Img00011V001.jpg',
  color: ['grey', 'white', 'yellow']
},{
  name: 'Long Tailed Tit',
  image: 'http://www.birdid.co.uk/Static/Images/Img00013V001.jpg',
  color: ['black', 'pink', 'white']
},{
  name: 'Male Mallard',
  image: 'http://www.birdid.co.uk/Static/Images/Img00014V001.jpg',
  color: ['brown', 'green', 'yellow']
},{
  name: 'Female Merlin',
  image: 'http://www.birdid.co.uk/Static/Images/Img00013V001.jpg',
  color: ['brown', 'cream']
},{
  name: 'Skylark',
  image: 'http://www.birdid.co.uk/Static/Images/Img00019V001.jpg',
  color: ['brown', 'white', 'buff']
},{
  name: 'Adult Song Thrush',
  image: 'http://www.birdid.co.uk/Static/Images/Img01039V001.jpg',
  color: ['brown', 'speckled']
},{
  name: 'Yvette',
  image: 'https://vg-images.condecdn.net/image/5w2MEPvWGG8/crop/405',
  color: ['black & white']
}];


mongoose.connect(db[env])
  .then(() => Bird.create(birdData))
  .then(birds => console.log(`${birds.length} birds created!`))
  .catch(err => console.log(err))
  .finally(() => mongoose.connection.close());
