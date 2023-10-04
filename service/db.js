const mongoose=require('mongoose')

// connection
mongoose.connect('mongodb://127.0.0.1:27017/yachtServer',{useNewUrlParser:true})

// model

const User=mongoose.model('User',
{
   
    uname:String,
    email:String,
    psw:Number, 
    bookings:[],
    name1:String

}

)


const Packages=mongoose.model('packages',
{

    pid: Number,
    boatName: String,
    categoryId: Number,
    description: String,
    price: Number,
    isAvailable: Boolean,
    destination:String,
    productImage: String,
    rating: Number,
    review: String



}
)






// export
module.exports={User,Packages}



