const express = require('express')
const router = express.Router();
const dotenv = require("dotenv");
dotenv.config();
const moment = require('moment')


const Stations = require('../../models/Stations')
const auth = require('../../middlewares/auth');
const Station = require('../../models/Stations');

router.get('/', auth, async(req, res, next) => {
    try{
        const station = await Stations.find({})
        res.status(200).json(station)
    }catch(error){
        next(error)
    }
})

router.get('/:id', auth, async(req, res, next) => {
    const {id} = req.params
    try{
        const station = await Stations.find({ _id: id })
        res.status(200).json(station)
    }catch(error){
        next(error)
    }
})

router.post('/register',auth, async(req, res, next) => {
    const { name, identificator, longitude, latitude, altitude } = req.body
    try{
        const identify = await Stations.findOne({identificator: req.body.identificator})
        if(!identify){
            const station = await new Station({
                name, 
                identificator,
                longitude,
                latitude,
                altitude
            }).save()

            res.status(200).json(station)
        }else{
            res.status(400).json({"error": "This stations is already exists"})
        }
    }catch(error){
        next(error)
    }
})

router.put('/:id', auth, async(req, res, next) => {
    const {id} = req.params
    const { name, identificator, longitude, latitude, altitude } = req.body
    try{
        const station = await Stations.findOne({_id: id})
        if(station){
            const newStation = await Stations.updateOne({
                _id: id
            }, {
                $set: {
                    name, 
                    identificator,
                    longitude,
                    latitude,
                    altitude,
                    rating
                }
            })
            res.status(200).json({ message: "Update successfuly" });
        }
    }catch(error){
        next(error)
    }
})

router.delete('/:id', auth, async(req, res, next) =>{
    const {id} = req.params
    try{
        const station = await Stations.findByIdAndDelete({
            _id: id
        })
        station ? res.status(200).json('Station Delete') : res.status(200).json('Nothing to Delete')
        
    }catch(error){
        next(error)
    }

})

router.get('/emetting/:id', auth, async(req, res, next) => {
    const {id} = req.params
    try{
        const station = await Stations.find({ _id: id })
        const stationDate = station[0]['createdAt']
        current = moment().format("D, MMMM, YYYY, H, MM, ss")
        day = moment(stationDate).format("D")
        month = moment(stationDate).format("MMMM")
        year = moment(stationDate).format("YYYY")
        res.json({"Current": current, "Day": day, "month": month, "year": year})
    }catch(error){
        next(error)
    }
})


/**
 * il sera important de créer une route qui verifiera qu'un station continue d'emettre
 */
module.exports = router