
const express=require('express')

const app=express()
const connect=require('./config/connect')
const port=3000

app.use(express.json())
connect()
app.use('/api',require("./root/routes"))

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });