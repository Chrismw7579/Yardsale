var db = require("../models");
const user = require("../models/user");




Model.exports = function(app) {

    app.post("/api/post_user", (req, res) => {
        db.create({
            username: req.params.username,
            email: req.params.email,
            password: req.params.password // this needs to be hashed for production
        })
    })

    app.get("/api/user", (req, res) => {
        db.User.findOne({
            where: {
                id: req.params.id
            }
        }).then( dbUser => {
            res.json(dbUser);
        })
    })

    app.delete("/api/delete_user", (req, res) => {
        db.User.destroy({
            where:{
                id: req.params.id
            }
        }).then(dbUser => {
            res.json(dbUser);
        })
    })

    app.post("/api/post_item", (req, res) => {
        db.User.findOne({
            where: {
                id: req.params.id
            }
        }).then(myUser => {
            db.Item.create({
                categories: req.params.categories,
                description: req.params.description
            }).then(myPost => {
                myUser.addPost(myPost);
            })
        })
    })

    app.get("/api/item", (req, res) => {
       db.Item.findOne({
           where: {
               id: req.params.id
           }
       }).then(dbItem => {
           res.json(dbItem);
       })
    })

    app.get("/api/all_items", (req, res) => {
        db.User.findOne({
            where: {
                id: req.params.id
            }
        }).then(myUser => {
            myUser.getPosts({

            }).then(posts => {
                res.json(posts);
            })
        })
    })

    app.put("/api/put_item", (req, res) => {
        db.Item.update(
            req.body,
            {
            where: {
                id: req.params.id
            }
        }).then(dbItem => {
            res.json(dbItem);
        })
    })

    app.delete("/api/delete_item", (req, res) => {
        db.Item.destroy({
            where: {
                id: req.params.id
            }
        }).then(dbItem => {
            res.json(dbItem);
        })
    })
};