const { Router } = require('express')
const express = require('express')
const router = Router()
const store = { 
    ressources :{
        2 : {
            name :'xx'
        }
    }
}


router.get('/ressources/:id', (req, res) => {
    console.log(req.params)
    const idx =req.params.idx
    const {id} = req
    store = {ressources :{id:{ name:'test'} }}
    res.send(res.json({store}))

})

router.get('ressources/patch/:id', (req, res) => {
    console.log(req.params)
    const idx = req.params.idx
    const {id} = req
    store = {ressources:{id:{n}}}
})

router.get('ressources/delete/:id', (req, res) => {
    const idx = req.params.idx
    delete (store.ressources.id)
    res.send(res.json({store}))
})

module.exports = router