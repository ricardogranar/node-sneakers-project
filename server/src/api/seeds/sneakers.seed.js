const mongoose = require('mongoose');
const Sneaker = require("../sneakers/sneakers.model");
const path = require('path')
require('dotenv').config({ path: path.resolve(__dirname, "../../../.env") });


const sneakers = [
  {
    id: 1,
    brand: "New Balance",
    model: "808",
    img: "https://res.cloudinary.com/dpz8cjurk/image/upload/v1666911232/sneakers/zapatillas-new-balance-numeric-tiago-lemos-808-white-navy_re0bvx.jpg",
  },
  
  {
    id: 2,
    brand: "New Balance",
    model: "1010",
    img: "https://res.cloudinary.com/dpz8cjurk/image/upload/v1666911232/sneakers/zapatillas-new-balance-numeric-1010-tiago-white-blue_uxnbrc.jpg",
  },

  {
    id: 3,
    brand: "New Balance",
    model: "Shando",
    img: "https://res.cloudinary.com/dpz8cjurk/image/upload/v1666911233/sneakers/zapatillas-new-balance-shando-sunflower-black_tzrcr1.jpg",
  },

  {
    id: 4,
    brand: "New Balance",
    model: "550",
    img: "https://res.cloudinary.com/dpz8cjurk/image/upload/v1666911232/sneakers/zapatillas-new-balance-550-se1-white-team-red_eo6d3c.jpg",
  },
  
  {
    id: 5,
    brand: "New Balance",
    model: "990",
    img: "https://res.cloudinary.com/dpz8cjurk/image/upload/v1666911232/sneakers/zapatillas-new-balance-990v3-made-in-usa-sea-saltr-rain-cloud_jyvrzv.jpg",
  },

  {
    id: 6,
    brand: "New Balance",
    model: "306",
    img: "https://res.cloudinary.com/dpz8cjurk/image/upload/v1666911232/sneakers/zapatillas-new-balance-numeric-306-for-green-white_mxndey.jpg",
  },

  {
    id: 7,
    brand: "New Balance",
    model: "213",
    img: "https://res.cloudinary.com/dpz8cjurk/image/upload/v1666911232/sneakers/zapatillas-new-balance-numeric-213-cls-white-green_i5x8nz.jpg",
  },

  


];


const sneakerDocuments = sneakers.map(sneaker => new Sneaker(sneaker));
mongoose.connect("mongodb+srv://ricardo:53110735@cluster0.6dqzn7h.mongodb.net/sneakers-project?retryWrites=true&w=majority",{
  useNewUrlParser: true,
  useUnifiedTopology: true,
}) 
.catch((err) => console.log(`Error deleting data: ${err}`))
.then(async () => {
      await Sneaker.insertMany(sneakerDocuments);
  console.log('DatabaseCreated')
  })
.catch((err) => console.log(`Error creating data: ${err}`))
.finally(() => mongoose.disconnect());
