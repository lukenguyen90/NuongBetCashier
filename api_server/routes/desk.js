var router = require('express').Router();
var deskPersistent = require('../models/desk.js');
var Utilities = require('../utilities.js');
var uuid = require('node-uuid');

module.exports = deskAPI;

function deskAPI(app) {
    var dbconnection = app.get('dbpool');

    router.get('/getDesks/', function(req, res) {
        deskPersistent.getDesks(dbconnection, function(err, data) {
            if (err) {
                res.jsonp({ "Error": true, "Message": "Error executing MySQL query" });
            } else {
                res.jsonp({ "Error": false, "Message": "Success", "data": data });
            }
        })
    });

    router.get('/getDeskPos/', function(req, res) {
        deskPersistent.getDeskPos(dbconnection, function(err, data) {
            if (err) {
                res.jsonp({ "Error": true, "Message": "Error executing MySQL query" });
            } else {
                res.jsonp({ "Error": false, "Message": "Success", "data": data });
            }
        })
    });

    router.get('/getListDeskActive/', function(req, res) {
        deskPersistent.getListDeskActive(dbconnection, function(err, data) {
            if (err) {
                res.jsonp({ "Error": true, "Message": "Error executing MySQL query" });
            } else {
                res.jsonp({ "Error": false, "Message": "Success", "data": data });
            }
        })
    });

    router.get('/getListDeskInActive/', function(req, res) {
        deskPersistent.getListDeskInActive(dbconnection, function(err, data) {
            if (err) {
                res.jsonp({ "Error": true, "Message": "Error executing MySQL query" });
            } else {
                res.jsonp({ "Error": false, "Message": "Success", "data": data });
            }
        })
    });
    return router
}
