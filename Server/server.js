const express = require("express");
const app = express();
const cors = require("cors");
const stripe = require('stripe')('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');

app.use(express.json());
app.use(cors());

// checkout api
app.post("/create-checkout-session",async(req,res)=>{
    const {products} = req.body;

    const lineItems = products.map((product)=>({
        price_data:{
            currency:"aud",
            product_data:{
                name:product.title,
            },
            unit_amount:product.price * 100,
        },
        quantity:product.quantity
    }));

    const session = await stripe.checkout.sessions.create({
        payment_method_types:["card"],
        line_items:lineItems,
        mode:"payment",
        success_url:"http://localhost:5173/sucess",
        cancel_url:"http://localhost:5173/cancel",
      
    });

    res.json({id:session.id})
 
})


app.listen(7000,()=>{
    console.log("server start")
})