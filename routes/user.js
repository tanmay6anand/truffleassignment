const router = require('express').Router();
const User = require('../model/users');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const info = require("express");

router.post("/items", (req, res, next) => {
     
                        const user = new User({
                            //required data
                            _id: new mongoose.Types.ObjectId(),
                            hospital_name: req.body.hospital_name,
                            date: req.body.date,
                            name: req.body.name ,
                            address : req.body.address,
                            bill_amount: req.body.bill_amount
                        });
                        user
                            .save()
                            .then(result => {
                                console.log(result);

                                res.status(201).json({
                                    message: "BILL created"
                                });
                            })
                            .catch(err => {
                                console.log(err);
                                res.status(500).json({
                                    error: err
                                });
                            });
                    
});
            
        

router.get("/items", async (req, res) => {
    User.find({})
        .exec()
        .then(user => {
            if (user === null) {
                console.log(user);
                return res.status(409).json({
                    message: "No bills found"
                });
            }
            else{
                return res.status(200).json({
                    message: "Following bills are found",
                    response: user,
                    createdAt: Date.now
                });
            }
        });


});

module.exports = router;
