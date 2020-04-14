// Core dependencies
const fs = require('fs')
const path = require('path')

// NPM dependencies
const express = require('express')
const marked = require('marked')
const router = express.Router()

// Add your routes here - above the module.exports line
// Docs index
router.get('/', function (req, res) {
    res.render('offender-feedback')
})

router.get('/offender-form-satisfaction', function (req, res) {
    res.render('form/offender-form-satisfaction')
})

router.get('/offender-form-suggestions', function (req, res) {
    res.render('form/offender-form-suggestions')
})

router.get('/offender-form-check', function (req, res) {
    res.render('form/offender-form-check')
})

router.get('/offender-form-complete', function (req, res) {
    res.render('form/offender-form-complete')
})

router.get('/offender-form-date', function (req, res) {
    res.render('form/offender-form-date')
})

// Examples - example offender feedback satisfaction form here
router.post('/offender-form-satisfaction', function (req, res) {
    res.redirect('offender-form-satisfaction')
})

// Examples - example offender feedback suggestions form here
router.post('/offender-form-suggestions', function (req, res) {
    res.redirect('offender-form-suggestions')
})

// Examples - example offender feedback suggestions form here
router.post('/offender-form-check', function (req, res) {
    res.redirect('offender-form-check')
})

// Examples - example offender feedback suggestions form here
router.post('/offender-form-complete', function (req, res) {
    res.redirect('offender-form-complete')
})
// Examples - example offender feedback suggestions form here
router.post('/offender-form-date', function (req, res) {
    res.redirect('offender-form-date')
})

module.exports = router
