const express = require("express");
const cors = require("cors");
const axios = require('axios'); 
const app = express();
app.use(express.json());
app.use(cors({ origin: true }));
const path = require("path")

app.post("/authenticate", async (req, res) => {
  const { username } = req.body;
  try {
    const r = await axios.put(
        "https://api.chatengine.io/users/",
        {
            username: username,
            first_name: username,
            secret: username
        },
        {
            headers: {
                "private-key": "92596263-860e-41e2-9b4c-6b7459ba9177"
            }
        }
    );
    return res.status(r.status).json(r.data);
} catch (e) {
    return res.status(e.response.status).json(e.response.data);
}

 
});
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../vite-project/dist/index.html'));
  });
  


app.listen(3001);