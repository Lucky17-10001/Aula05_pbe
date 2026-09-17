const bens = require('../bens.json')

function autoincrement() {
    const ultimoid = Number(bens[bens.length - 1].id)
    return ultimoid + 1;
}

const create = (req, res) => {
    const dados = req.body
    dados.id = autoincrement()
    bens.add(dados)
    res.status(201).json(dados)
}

const read = (req, res) => {
    res.json(bens)
}

module.exports = {
    create,
    read
}