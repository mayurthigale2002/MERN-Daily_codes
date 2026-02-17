const express=require('express')
const app=express()

app.use(express.static('public/'))

app.get('/',(req,res)=>{
    res.render('home.ejs')
})

app.get('/about',(req,res)=>{
    res.render('about.ejs')
})

app.get('/contact',(req,res)=>{
    res.render('contact.ejs')
})

app.use((req,res)=>{
    res.send("<h1>404 Page Not Found</h1>")
})

const PORT=3000
const HOST='127.0.0.1'

app.listen(PORT,HOST,()=>{
    console.log(`Server is running ... on http://${HOST}:${PORT}`)
})