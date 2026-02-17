const express = require('express')
const app = express()

app.use(express.static('public/'))

const menu = `
<ul>
    <button><a href='/'>Home</a></button>
    <button><a href='/about'>About</a></button>
    <button><a href='/contact'>Contact</a></button>
</ul>
`

app.get('/',(req,res)=>{
    res.send(menu+`<h1 style="color:red; text-align:center;">Welcome to Home Page</h1>
        <img src="nature.avif" >
        `)
})


app.get('/about',(req,res)=>{
    res.send(menu+"<h1>Welcome to About Page</h1>")
})


app.get('/contact',(req,res)=>{
    res.send(menu+"<h1>Welcome to Contact Page</h1>")
})


app.use((req,res)=>{
    res.send(menu+"<h1>404- Page Not Found</h1>")
})

const PORT=3000
const HOST='127.0.0.1'

app.listen(PORT,HOST,()=>{
    console.log(`Express server Is running on http://${HOST}:${PORT}`)
})