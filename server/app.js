const express = require("express");
const http = require("http");
const { LoginToSystem } = require("./helpers");
const { FETCH_MACHINES, FETCH_MACHINE } = require("./helpers/apollo/queries");
const { client } = require("./helpers/apollo");

const app = express();
const server = http.createServer(app);

app.use(async (req) => {
  try {
    const result = await LoginToSystem();
    req.headers.authorization = result.headers["set-cookie"];
    req.next();
  } catch (error) {
      console.log(error)
  }
});

app.get("/machines", async (req, res) => {
    try {
        if (!req.headers.authorization) 
          res.json({authError: "You're not authorized"})  
            
        const { data } = await client(req).query({query: FETCH_MACHINES})
        res.json(data.entities)
    } catch (err) {
      console.log(err);
    }
  });



app.get("/machine/:id", async (req,res) => {
    try {
        const { data } = await client(req).query({query: FETCH_MACHINE, variables: {id: req.params.id}})
        res.json(data)
    } catch (error) {
        console.log(error)
    }
})

server.listen(process.env.PORT || 5000, () => {
  console.log("*5000, listening...");
});
