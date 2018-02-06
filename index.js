const express = require('express');
require('./services/passport');
const authRoutes = require('./routes/authRoutes');

const app = express();

authRoutes(app);


// process.env.PORT comes from hosting service.
const PORT = process.env.PORT || 5000;
app.listen(PORT);