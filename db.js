const mongoose = require('mongoose');

const db = process.env.MONGO_URI ||  "mongodb://localhost:27017/mydatabase";

mongoose.connect(db)
.then( () => {
    console.log("db connection successful");
})
.catch((err) => {
    console.log(err);
});
// const mongoose = require('mongoose');

//  const db = process.env.MONGO_URI ||  "mongodb://localhost:27017/mydatabase"; 

// mongoose.connect(db)
//   .then(() => {
//     console.log('db connection successful');
//   })
//   .catch((error) => {
//     console.error('error connecting to db', error);
//   });
