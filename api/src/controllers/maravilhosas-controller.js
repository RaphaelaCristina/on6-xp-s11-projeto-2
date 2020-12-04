const { request, response } = require('express')
const models = require('../models/maravilhosas-models')
const router = require ('../routes/maravilhosas-routes')

//Nomes dos métodos para implementação:

//getMaravilhosas
const getMaravilhosas = (request, response) => {
    console.log(request.url)
    const maravilhosas = models.selectAllData()
    response.status(200).json(maravilhosas)
}

//getMaravilhosaById
const getMaravilhosaById = (request, response) => {
    const id = parseInt(request.params.id)
    const selectDataById = models.selectDataById(id)
    if(selectDataById == undefined){
        response.status(404).send("Id não encontrado")
    }else{
    response.status(200).send(selectDataById) 
    }
}

//addMaravilhosa 
const addMaravilhosa = (request, response) =>{
    const{name, photo, subtitle, about, phrase, history, addedBy} = request.body
    const novaMaravilhosa = models.insertData(name, photo, subtitle, about, phrase, history, addedBy)
    response.status(200).send(novaMaravilhosa)

}

//updateMaravilhosa 
const updateMaravilhosa = (request, response) =>{
    const maravilhosaAtualizada = request.body
    const id = parseInt(request.params.id)
    const dados = updateData(maravilhosaAtualizada,id)
    response.status(200).json(dados.find(dados => dados.id == id))

}


//deleteMaravilhosa
const deleteMaravilhosa = (request, response) =>{
    const id = parseInt(request.params.id)
    const deleteId = models.deleteData(id)
    response.status(204).json(deleteId)

}

module.exports = {
    getMaravilhosas,
    getMaravilhosaById, 
    addMaravilhosa, 
    updateMaravilhosa,
    deleteMaravilhosa
}