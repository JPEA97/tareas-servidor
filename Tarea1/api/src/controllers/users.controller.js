const User = require('../models/user');
const ResponseStatus = require('../utils/response-status');


class UsersController{

    getUsers(req, res){
      const user = new User;

      user.find().then((response) => {
        res.status(ResponseStatus.SUCCESS).send(response);
      }).catch((e) => {
        res.status(ResponseStatus.BAD_REQUEST).send('Something went wrong boy...');
      })
    }


    getUserById(req, res){
      const user = new User;
      const uid = parseInt(req.params.id.replace(/^id:\s*|\s*$/g, ''));

      user.find().then((response) => {
        const userFound = response.find(user => user.id === uid);

        if(userFound){
          res.status(ResponseStatus.SUCCESS).send(userFound);
        }else{
          res.status(ResponseStatus.BAD_REQUEST).send("Usuario con id: "+ uid + "no encontrado");
        }

      }).catch((e) => {
        res.status(ResponseStatus.BAD_REQUEST).send('Something went wrong...');

      })
    }


    createUser(req, res){
      const user = new User();
      const newUser = req.body;

      user.insert(newUser).then((response) => {
        console.log('user added: ' + response);
        res.status(ResponseStatus.SUCCESS).send(response);

      }).catch((e) => {
        res.status(ResponseStatus.BAD_REQUEST).send('Something went wrong...')

      })
    }


    updateUser(req, res){ 
      const user = new User();
      const updatedUser = req.body;

      user.update(updatedUser.id, updatedUser).then((response) => {
        console.log('user edited: ' + response);
        res.status(ResponseStatus.SUCCESS).send(response);

      }).catch((e) => {
        res.status(ResponseStatus.BAD_REQUEST).send('Something went wrong...')

      })
    }


    deleteUser(req, res){
      const user = new User();
      const uid = req.params.id;

      user.delete(userId).then((response) => {
        console.log('user deleted: ' + response);
        res.status(ResponseStatus.SUCCESS).send(response);

      }).catch((e) => {
        res.status(ResponseStatus.BAD_REQUEST).send('Something went wrong...')

      })
    }
}   

module.exports =  new UsersController();