const express = require('express');
const engineerAPI = {
  
  index(req, res) {
    res.json(res.locals.data.engineers)
  },

  
  show(req, res) {
    res.json(res.locals.data.engineer)
  },

  
  create(req, res) {
    res.status(201).json(res.locals.data.engineer)
  },

  
  destroy(req, res) {
    res.status(200).json({ message: 'Engineer successfully deleted' })
  }
}

module.exports = engineerAPI;