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
}];


mongoose.connect(db[env])
  .then(() => Bird.create(birdData))
  .then(birds => console.log(`${birds.length} birds created!`))
  .catch(err => console.log(err))
  .finally(() => mongoose.connection.close());
