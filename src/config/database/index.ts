import mongoose from 'mongoose';

const connect_database = async () => {
	try {
		await mongoose.connect(process.env.DATABASE_URL!);
		console.log('Kết nối database thành công!');
	} catch (error) {
		console.log('Kết nối database thất bại!');
	}
};

export default connect_database;
