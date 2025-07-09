const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const errorHandler = require('./middleware/errorMiddleware');
const cors = require('cors');


const app = express();
dotenv.config();
connectDB();

app.use(express.json());
app.use(cors({
    origin: 'http://localhost:5173', // allow your frontend
    credentials: true               // if you're using cookies/auth headers
  }));

app.use('/api/posts', require('./routes/postRoutes'));
app.use('/api/users', require('./routes/authRoutes'));
app.use('/api/categories', require('./routes/categoryRoutes'));
app.use('/api/posts/:postId/comments', require('./routes/commentRoutes'));

app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));