require('./model/User');
require('./model/Track');
const express = require('express');
const app = express();
const mongoose = require("mongoose");
const bodyParser = require('body-parser');
const authRoutes = require("./routes/authRoutes");
const trackRoutes = require('./routes/trackRoutes');
const requireAuth = require("./middlewares//requireAuth");


const mongoUri = `mongodb://maps:nguyentri1998@ds151082.mlab.com:51082/maps`;

mongoose.connect(mongoUri, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true 
}).then(() => {
    console.log("Connet DB success");
})

app.use(bodyParser.json());
app.use(authRoutes);
app.use(trackRoutes);

app.get('/', requireAuth, (req, res) => {
    console.log(req.user);
    res.send(`Your email: ${req.user.email}`);
})

const port = 5000 || process.env.PORT;
app.listen(port, () => {
    console.log("Server start with port " + port);
})