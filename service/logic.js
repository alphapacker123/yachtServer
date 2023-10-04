const db = require('./db')



register = (uname, mail, psw, name) => {

    return db.User.findOne({ uname }).then(user => {

        if (user) {
            return {
                message: "user already exist",
                status: false,
                statusCode: 404
            }
        } else {
            newuser = new db.User({

                uname: uname,
                email: mail,
                psw: psw,
                bookings: [],
                name1: name
            })

            newuser.save()
            return {
                message: "Congratulations,your account has been created",
                status: true,
                statusCode: 200

            }


        }

    })
}


// login


login = (uname, psw) => {

    return db.User.findOne({ uname, psw }).then(user => {

        if (user) {

            return {
                message: "login successfull",
                status: true,
                statusCode: 200,
                currentUser: user.name1,
                currentUname: user.uname
            }

        } else {

            return {

                message: "invalid username/password",
                status: false,
                statusCode: 404
            }
        }



    })



}


product = (pid, boatName, categoryId, description, price, isAvailable, destination, productImage, rating, review) => {

    return db.Packages.findOne({ pid }).then(result => {
        if (result) {

            return {


                message: "product already exist",
                status: false,
                statusCode: 404


            }
        } else {

            newuser = new db.Packages({

                pid: pid,
                boatName: boatName,
                categoryId: categoryId,
                description: description,
                price: price,
                isAvailable: isAvailable,
                destination: destination,
                productImage: productImage,
                rating: rating,
                review: review

            })
            newuser.save()

            return {
                message: "Congratulations,your account has been created",
                status: true,
                statusCode: 200

            }


        }




    })


}


// get product


getProducts = () => {


    return db.Packages.find().then(result => {

        if (result) {

            return {

                message: result,
                status: true,
                statusCode: 200
            }


        } else {

            return {
                message: "no data",
                status: false,
                statusCode: 404

            }
        }




    })




}

// single product
viewProduct = (pid) => {

    return db.Packages.findOne({pid}).then(result => {

        if (result) {
            return {
                 message:result,
                status: true,
                statusCode: 200
            }
        } else {
            return {
                message: "no data",
                status: false,
                statusCode: 404
            }
        }



    })

}

deleteFile=  (pid)=>{

   return  db.Packages.deleteOne({pid}).then(result=>{

if(result){

    return{ message: "your account has been delted",
    status: true,
    statusCode: 200

    }
}else{

    return{
        message: "invalid data",
        status: false,
        statusCode: 404
    }
}

    })

}


// update product


updateProduct=(pid, boatName,  description, price, isAvailable, destination, productImage)=>{

db.Packages.findOne({pid}).then(result=>{

if(result){
   
result.pid=pid,
result.boatName=boatName,
result.description=description,
result.price=price,
result.isAvailable=isAvailable,
result.destination=destination,
result.productImage=productImage,

result.save()
    
}
else{
return{
    message: "not able to update the data",
    status: false,
    statusCode: 404
}

}



})



}












module.exports = { register, login, product, getProducts, viewProduct,deleteFile,updateProduct }