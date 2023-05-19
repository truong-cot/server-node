import homeRoute from './home_route';
import uploadFileRoute from './upload_fIle_route';

// Khởi tạo route version 1
const route_version_1 = (app: any, version: string) => {
	app.use(`${version}/`, homeRoute);
	app.use(`${version}/`, uploadFileRoute);
};

export default route_version_1;
