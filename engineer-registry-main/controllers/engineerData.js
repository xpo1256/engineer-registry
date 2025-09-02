const Engineer = require('../models/engineer.js');

const dataController = {}
dataController.index = async (req,res,next) => {
   try {
    res.locals.data.engineers = await Engineer.find({})
    next()
   } catch(error) {
    res.status(400).send({ message: error.message })
  }
}

dataController.destroy = async (req, res, next ) => {
    try {
         await Engineer.findOneAndDelete({'_id': req.params.id }).then(() => {
            next()
         })
    } catch (error) {
      res.status(400).send({ message: error.message })
    }
}

dataController.update = async (req, res, next) => {
    if(req.body.available === 'on'){
        req.body.available = true;
    } else if(req.body.available !== true) {
        req.body.available = false;
    }
    try {
      res.locals.data.engineer = await Engineer.findByIdAndUpdate(req.params.id, req.body, { new: true })
      next()
    } catch (error) {
      res.status(400).send({ message: error.message })
    }
}

dataController.create = async (req, res, next) => {
    if(req.body.available === 'on'){
        req.body.available = true;
    } else if(req.body.available !== true) {
        req.body.available = false;
    }
    try {
      res.locals.data.engineer = await Engineer.create(req.body)
      next()
    } catch (error) {
      res.status(400).send({ message: error.message })
    }
}

dataController.show = async (req, res, next) => {
    try {
        res.locals.data.engineer = await Engineer.findById(req.params.id)
        if(!res.locals.data.engineer){
            throw new error(`could not locate a engineer with the id ${req.params.id}`)
        }
        next()
    } catch (error) {
      res.status(400).send({ message: error.message })
    }
}


module.exports = dataController