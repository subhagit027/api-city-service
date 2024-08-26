const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cityRoutes = require('./routes/cityRoutes');
require('dotenv').config();

const app = express();

mongoose.connect(process.env.MONGODB_URI)
.then(()=> console.log("MonogDb connection established.."))
.catch(err => console.error("MongoDb connection failed:", err));

app.use(bodyParser.json());
app.use('/api', cityRoutes);


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});