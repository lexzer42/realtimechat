const express = require("express");
const cors = require("cors");
const axios = require("axios");
const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

app.post("/authenticate", async (req, res) => {
  const { username } = req.body;

  try {
    // console.log(`Datos enviados a la API de chat:`, {username: username, secret: username, first_name: username});
   
    const response = await axios.put(
        'https://api.chatengine.io/users/',
        {username: username, secret: username, first_name: username},
        {headers: {"private-key": "agregar-private-key"}}
      );

    console.log('Response from ChatEngine API: ', response);

    return res.status(response.status).json(response.data);
  } catch (e) {
    if (e.response) {
        return res.status(e.response.status).json(e.response.data);
      } else {
        console.error('Error while requesting ChatEngine API:', e);
        return res.status(500).json({ message: "Error en el servidor" });
      }
    }
  });
  
app.listen(3001);
