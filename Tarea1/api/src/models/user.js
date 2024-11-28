const axios = require('axios');


class User{

    find(){
        return new Promise((resolve, reject) => {
            axios.get(process.env.API_URL).then(response => {
                resolve(response.data);
            }).catch(e => {
                console.error('User not found');
            })
        })

    }

    insert(user){
        return new Promise((resolve, reject) => {
            axios.post(process.env.API_URL, user).then((response) => {
                resolve(response.data);
            }).catch((e) => {
                console.error('Cannot add user');
            })
        })

    }
    update(uid, updateUser){
        return new Promise((resolve, reject) => {
            axios.put(process.env.API_URL + `/${uid}`, updateUser).then(response => {
                resolve(response.data);
            }).catch(e => {
                console.error('Cannot update user');
            })
        })

    }

    delete(uid){
        return new Promise((resolve, reject) => {
            axios.delete(process.env.API_URL +`/${uid}`).then(response => {
                resolve(response.data);
            }).catch(e => {
                console.error('Cannot delete user');
            })
        })

    }
    


}

module.exports = User;