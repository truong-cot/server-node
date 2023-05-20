import dotenv from 'dotenv';
import cloudinary_v1 from 'cloudinary';

const cloudinary = cloudinary_v1.v2;

dotenv.config();

// Cấu hình cloudinary
cloudinary.config({
	cloud_name: process.env.CLOUD_NAME,
	api_key: process.env.API_KEY,
	api_secret: process.env.API_SECRET,
});

export default cloudinary;

export const uploadFile = async (file: any) => {
	const respon: any = await cloudinary.uploader.upload(file.path, {
		folder: 'server-node-upload',
	});
	return respon;
};
