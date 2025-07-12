const express = require('express');
const mongoose = require('mongoose');
const session = require('express-session');
const passport = require('passport');
require('dotenv').config();
require('./config/passport'); // Google OAuth setup

const authRoutes = require('./routes/authRoutes');

const app = express();
app.use(express.json());

// Session for Google OAuth
app.use(session({
  secret: 'secret',
  resave: false,
  saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());

// MongoDB connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error(err));

// Routes
app.use('/auth', authRoutes);

app.listen(5000, () => console.log('Server running on http://localhost:5000'));