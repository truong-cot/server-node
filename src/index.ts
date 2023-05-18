import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import cookieParser from 'cookie-parser';

// Config dotenv
dotenv.config();

// Khởi tạo app với express
const app = express();

// Sử dụng cors middleware
app.use(cors());

// Add post project (Khởi tạo sự án)
app.listen(process.env.PORT, () => {
	console.log(`Server running http://localhost:${process.env.PORT}`);
});
