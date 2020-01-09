var User = require("../models/User");
module.exports.controller = (app) => {
  //  get all users
   app.get('/users', (req, res) => {
     User.find({}, 'name email', function (error, users) {
       if (error) {
          console.log(error);
      }
       res.send(users);
      })
    }),

     app.post('/users', (req, res) => {
       const user = new User({
         name: req.body.name,
         email: req.body.email
       })
       user.save(function (error, user) {
         
         if (error) {
           console.log(error);
         }
         res.send(user)
       })
     })

    }