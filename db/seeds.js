const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

const { dbURI } = require('../config/environment');
const Bird      = require('../models/bird');

// const databaseURI = 'mongodb://localhost/project-4-development';
// mongoose.connect(databaseURI, { useMongoClient: true });

const birdData = [{
  // .create([{
  name: 'Dipper',
  image: 'http://www.birdid.co.uk/Static/Images/Img00006V002.jpg',
  coloring: ['black', 'brown', 'white']
},{
  name: 'Adult Grey Plover',
  image: 'http://www.birdid.co.uk/Static/Images/Img00010V001.jpg',
  colors: ['black', 'grey']
},{
  name: 'Adult Herring Gull',
  image: 'http://www.birdid.co.uk/Static/Images/Img00011V001.jpg',
  colors: ['grey', 'white', 'yellow']
}];
// .then((birds) => {
//   console.log(`${birds.length} birds created!`);
//
// })
// .catch((err) => {
//   console.log(err);
// })
// .finally(() => {
//   mongoose.connection.close();
// });

mongoose.connect(dbURI, { useMongoClient: true })
  .then(db => db.dropDatabase())
  .then(() => Bird.create(birdData))
  .then(birds => console.log(`${birds.length} foods created!`))
  .catch(err => console.log(err))
  .finally(() => mongoose.connection.close());
