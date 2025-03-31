const express = require('express')
const mongoose = require('mongoose')
const cors = require("cors")
const app = express()

app.use(cors())
app.use(express.json())

const roleRoutes = require("./src/routes/RoleRoutes")
app.use(roleRoutes)

const euserRoutes = require("./src/routes/EUserRoutes")
app.use(euserRoutes)

const stateRoutes = require("./src/routes/StateRoute")
app.use(stateRoutes)

const cityRoutes = require("./src/routes/CityRoute")
app.use(cityRoutes)

const areaRoutes = require("./src/routes/AreaRoute")
app.use(areaRoutes)

const categoryRoutes = require("./src/routes/CategoryRoute")
app.use(categoryRoutes)

const subCategoryRoutes = require("./src/routes/SubCategoryRoute")
app.use(subCategoryRoutes)

const brandRoutes = require("./src/routes/BrandRoute")
app.use(brandRoutes)

const productRoutes = require ("./src/routes/ProductRoute")
app.use(productRoutes)

const shippingRoutes = require ("./src/routes/ShippingRoute")
app.use(shippingRoutes)



mongoose.connect("mongodb://127.0.0.1:27017/node25").then(()=>{
    console.log("Connected to MongoDB")
})


const PORT = 3000
app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`)
})