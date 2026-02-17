// const express = require('express');
// const app = express();

// // routing 

// app.get('/',(req,res)=>{
//     res.send("<h1>Welcome to Express Js Server</h1>")

// })

// const PORT = 3000;
// const HOST = "127.0.0.1";

// app.listen(PORT, HOST,()=>{
//     console.log(`server is running on http://${HOST}:${PORT}`);
// })




const express = require("express");
const app = express();

// routing
app.get("/", (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Express Server</title>
      <style>
        body {
          margin: 0;
          height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
          font-family: Arial, Helvetica, sans-serif;
        }

        .card {
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          padding: 40px 60px;
          border-radius: 16px;
          text-align: center;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.6);
          border: 1px solid rgba(255, 255, 255, 0.2);
        }

        h1 {
          color: #000000;
          font-size: 2.5rem;
          margin-bottom: 10px;
        }

        p {
          color: #d1d5db;
          font-size: 1.1rem;
        }

        span {
          color: #ef4444;
          font-weight: bold;
        }
      </style>
    </head>
    <body>
      <div class="card">
        <h1>Welcome to <span>Express JS</span></h1>
        <p>Your server is running successfully</p>
      </div>
    </body>
    </html>
  `);
});

const PORT = 3000;
const HOST = "127.0.0.1";

app.listen(PORT, HOST, () => {
  console.log(`Server is running on http://${HOST}:${PORT}`);
});
