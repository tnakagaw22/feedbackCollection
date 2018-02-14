const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const keys = require('./config/keys');
require('./models/User');
require('./services/passport');
const authRoutes = require('./routes/authRoutes');

mongoose.connect(keys.mongoURI);

const app = express();

app.use(
    cookieSession({
        maxAge: 30 * 24 * 60 * 60 * 1000, // 30 days, 24 hr, 60 mins, 60 secs, 1000 millisecs
        keys: [keys.cookieKey]
    })
);
app.use(passport.initialize());
app.use(passport.session());

authRoutes(app);


// process.env.PORT comes from hosting service.
const PORT = process.env.PORT || 5000;
app.listen(PORT);