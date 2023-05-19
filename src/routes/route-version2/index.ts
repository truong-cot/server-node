import homeRoute from './home_route';

// Khởi tạo route version 2
const route_version_2 = (app: any, version: string) => {
	app.use(`${version}/`, homeRoute);
};

export default route_version_2;
