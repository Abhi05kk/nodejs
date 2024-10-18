const storeProd = require('../storeProd');

const getAllproducts = (req, res, next) => {
    res.status(200).json({ data: storeProd })
}

const getParticularProduct = (req, res, next) => {
    console.log(req.params);

    const prodId = parseInt(req.params.id)
    let product = null
    for (let i = 0; i < storeProd.length; i++) {
        console.log(storeProd[i].id, prodId);

        if (storeProd[i].id === prodId) {
            product = storeProd[i]
            break;}
    }

    res.status(200).json({ data: product })
}

const addProduct = (req, res) => {
    console.log(req.body);
    storeProd.push(req.body);
     res.status(200).send(req.body);
}

const updateProduct = (req, res) => {
    let prodId = req.params.id;
    console.log(req.body);
    storeProd.push(req.body);
     res.status(200).json(req.body);
}

module.exports = { getAllproducts, getParticularProduct, addProduct, updateProduct }