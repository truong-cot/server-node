import homeRoute from './homeRoute';

// Khởi tạo route version 1
const route_version_1 = (app: any, version: string) => {
	app.use(`${version}/`, homeRoute);
};

export default route_version_1;
