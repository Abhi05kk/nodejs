const storeUser = require('../storeUser');

const getAllUsers = (req, res, next) => {
    res.status(200).json({ data: storeUser })
}

const getParticularUser = (req, res, next) => {
    console.log(req.params);

    const userId = parseInt(req.params.id)
    let user = null
    for (let i = 0; i < storeUser.length; i++) {
        console.log(storeUser[i].id, userId);

        if (storeUser[i].id === userId) {
            user = storeUser[i]
            break;}
    }

    res.status(200).json({ data: user })
}

const addUser = (req, res) => {
    console.log(req.body);
    storeUser.push(req.body);
     res.status(200).send(req.body);
}

const updateUser = (req, res) => {
    let userId = req.params.id;
    console.log(req.body);
    storeUser.push(req.body);
     res.status(200).json(req.body);
}


module.exports = { getAllUsers, getParticularUser, addUser, updateUser}