import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import cookieParser from 'cookie-parser';

// Import routes
import route_version_1 from './routes/route-version1';
import route_version_2 from './routes/route-version2';
import database from './config/database';

// Function connect database

// Config dotenv
dotenv.config();

// Khởi tạo app với express
const app = express();

// Sử dụng cors middleware
app.use(cors());

// Sử dụng cookie-parser middleware
app.use(cookieParser());

// Phân tích URL-encoded bodies
app.use(express.urlencoded({extended: true}));

// Phân tích JSON bodies
app.use(express.json());

// Kết nối database
database();

// Cấu hình routes
route_version_1(app, '/api/v1');
route_version_2(app, '/api/v2');

// Add post project (Khởi tạo sự án)
app.listen(process.env.PORT, () => {
	console.log(`Server running http://localhost:${process.env.PORT}`);
});
