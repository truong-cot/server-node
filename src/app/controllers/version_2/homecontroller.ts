import {Request, Response} from 'express';

const HomeController = {
	// [GET] => home
	home: async (req: Request, res: Response) => {
		try {
			return res.json({
				message: 'Version 2!!!',
			});
		} catch (error) {
			return res.status(500).json({
				message: 'loi',
			});
		}
	},
};

export default HomeController;
