const dados = require('../data/data.json')
const controller = require('../controllers/maravilhosas-controller')
const { request } = require('express')

// selectAllData
const selectAllData = () => {
    return dados
}


//selectDataById
const selectDataById = (id) => {
    const byId = dados.find(item => item.id == id)
    if (byId){
        return byId
    } else {
        return undefined
    }
}

//insertData

//Não achamos necessário implementar uma validação, pois o id será gerado automaticamente,
// discartando hipóteses de repetição.
const incremento = (array) => {
    if (array.length > 0) {
        return array[array.length - 1].id + 1;
    } else {
        return 1;
    };
}

const insertData = (name, photo, subtitle, about, phrase, history, addedBy) => {
    
    let novaMaravilhosa = {
        id: incremento(dados),
        name: name,
        photo: photo,
        subtitle: subtitle,
        about: about,
        phrase: phrase, 
        history: history, 
        addedBy: addedBy
    }

    dados.push(novaMaravilhosa)
    return dados
}

//updateData
const updateData = (maravilhosaAtualizada, id) =>{
    const maravilhosaId = dados.map(maravilhosas => maravilhosas.id)
    const atualizaId = maravilhosaId.indexOf(id)
    const maravilhosaAtualizadacomId = {id, ...maravilhosaAtualizada}
    dados.splice(atualizaId,1,maravilhosaAtualizadacomId)
    return dados

}

//deleteData
const deleteData = (id) =>{
    const maravilhosaFiltrada = dados.filter(maravilhosa =>{ 
        return maravilhosa.id == id
    })[0];
    const index = dados.indexOf(maravilhosaFiltrada)
    dados.splice(index,1)
    return dados
}

module.exports ={
    selectAllData,
    selectDataById,
    insertData, 
    updateData, 
    deleteData
}   