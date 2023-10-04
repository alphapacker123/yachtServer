const express = require('express')

// import logic

const logic = require('./service/logic')



const app = express()

// cors integration

const cors = require('cors')
const { Packages } = require('./service/db')

// connecting front end

app.use(cors({ origin: 'http://localhost:4200' }))



app.use(express.json())


// signup request


app.post('/register', (req, res) => {

    logic.register(req.body.uname, req.body.mail, req.body.psw, req.body.name).then(result => {

        res.status(result.statusCode).json(result)

    })



})

// login request

app.post('/login', (req, res) => {
    logic.login(req.body.uname, req.body.psw).then(result => {

        res.status(result.statusCode).json(result)
    })
})



//add product


app.post('/products', (req, res) => {

    logic.product(req.body.pid, req.body.boatName, req.body.categoryId,
         req.body.description, req.body.price, req.body.isAvailable,
          req.body.destination, req.body.productImage,
           req.body.rating, req.body.review).then(result=>{

            res.status(result.statusCode).json(result)
           })
})

// get product




app.get('/getData',(req,res)=>{

logic.getProducts(req.pid).then(result=>{

    // console.log(result);
    res.status(result.statusCode).json(result)
})


})

// get single product



app.get('/singleData/:pid',(req,res)=>{

logic.viewProduct(req.params.pid).then(result=>{

res.status(result.statusCode).json(result)

})


})

// delteproduct


app.delete('/delete/:pid',(req,res)=>{

logic.deleteFile(req.params.pid).then(result=>{

res.status(result.statusCode).json(result)


})

})


// updateproduct

app.put('/update/:pid',(req,res)=>{


logic.updateProduct(req.params.pid , req.body.boatName, 
    req.body.description, req.body.price, req.body.isAvailable,
     req.body.destination, req.body.productImage
      ).then(result=>{

res.status(result.statusCode).json(result)


})


})






// port set

app.listen(3000, () => {

    console.log("server started at port 3000");
})