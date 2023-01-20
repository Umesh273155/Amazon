const cors=require("cors");
const express=require("express");
const stripe=require("stripe")("sk_test_51MS5zLSIo6XJcrsb8tRIe0U0QriOiYe1NCpGgv4544XET4V4t6JwtVAhY5kGT0y4ecUXnSPsezD3GSjA7E2ozFIX00UIGsIkbT");

const {v4:uuidv4}=require("uuid");
const app=express();
app.use(express.json());
app.use(cors());
app.get("/",(req,res)=>{
    res.send("Add your stripe Secret Key to the ,require('stripe')");
})
app.post("/checkout",async(req,res)=>{
    console.log("request:",req.body);
    let error ;
    let status ;
    try{

    }catch(error){
        const {total,token} = req.body;
        const customer= await stripe.customers.create({
            email:token.email,
            source:token.id
        });
      const idempotency_key=uuidv4();
      const charge=await stripe.charges.create({
      amount:total*100,
      currency:"usd",
      customer:customer.id,
       receipt_email:token.email,
       discription:"Purchased the product ",
      },
       {
    idempotency_key
});
console.log("charge:",{charge})
status="success";


    }
    catch(error){
      console.error("Error:",error);
    status:"failure"
    }
    res.json({error,status })
})
app.listen(8080);
