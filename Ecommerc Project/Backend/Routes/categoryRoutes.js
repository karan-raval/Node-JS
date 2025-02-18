const {Router} = require("express")
const CategoryModel = require("../Model/CategoryModel")
const isAdmin = require("../Middleware/isAdmin")

const CategoryRoute = Router()

CategoryRoute.post("/category",isAdmin,async(req,res)=>{
    try {
        let data = await CategoryModel.create(req.body)
        console.log(data)
        res.status(200).send({msg : "Category added Successfully", data})
    } catch (error) {
        res.status(501).send({msg : error.message})
    }
})

module.exports = CategoryRoute