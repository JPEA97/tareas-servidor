const User = require('../models/user');
const ResponseStatus = require('../utils/response-status');


class UsersController{

    getUsers(req, res){
      User.find().then((response) => {
        res.send(response);
      }).catch(e => {
        res.status(ResponseStatus.BAD_REQUEST).send('Something went wrong...');
      })
    }


    getUserById(req, res){
      const uid = req.params.id;

      User.findById(uid).then((response) => {

        if(response){
          res.status(ResponseStatus.SUCCESS).json(response);

        }else{
          res.send('Usuario con id: ' + uid + 'no encontrado');
        }

      }).catch((e) => {
        res.status(ResponseStatus.BAD_REQUEST).send('Something went wrong...');

      })
    }


    createUser(req, res){
      const data = {
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        role: req.body.role
      }

      User.create(data).then((response) => {
        res.send({
          name: response.name,
          email: response.email,
          role: response.role
        });
        

      }).catch(e => {
        res.status(ResponseStatus.BAD_REQUEST).send('Failed to create user...');
        

      });
    }

    deleteUser(req, res){
      const uid = req.params.id;

      User.findByIdAndDelete(uid).then((response) => {

        if(response){
          console.log('user deleted: ' + response);
          res.status(ResponseStatus.SUCCESS).json(response);
        } else{
          res.send('User not found');
        }
        

      }).catch(e => {
        res.status(ResponseStatus.BAD_REQUEST).send('Something went wrong...');

      })
    }
}   

module.exports =  new UsersController();