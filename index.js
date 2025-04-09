import express from "express"
import axios from "axios"

//JSON-SERVER START
import jsonServer from "json-server"
const server = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()
server.use(middlewares)
server.use(router)
//JSON-SERVER END


const app = express()

app.use(express.json())

//Consultando todas as entradas no json-server
//GET all
app.get("/pessoas-com-relacionamentos", async (req, res) => {
  try {
      const response = await axios.get('http://localhost:3000/pessoas?_expand=carro&_expand=time');
      return res.json(response.data);
  } catch (error) {
      console.error("Erro na consulta:", error);
      return res.status(500).json({ error: "Erro ao consultar pessoas" });
  }
});

server.listen(3000, () => {
    console.log('JSON Server is running! Port 3000')
  })

app.listen(8800, ()=>{
    console.log("Express is running!!! Port 8800")
    console.log("Backend complete, is running...")
});