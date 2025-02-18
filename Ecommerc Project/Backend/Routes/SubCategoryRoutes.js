const {Router} = require("express")
const SubCategoryModel = require("../Model/SubCategoryModel")
const isAdmin = require("../Middleware/isAdmin")

const CategoryRoute = Router()

SubCategoryRoute.post("/SubCategory",isAdmin,async(req,res)=>{
    try {
        let data = await SubCategoryModel.create(req.body)
        console.log(data)
        res.status(200).send({msg : "Sub-Category added Successfully", data})
    } catch (error) {
        res.status(501).send({msg : error.message})
    }
})

module.exports = SubCategoryRoute