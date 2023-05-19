import {ERROR_CODE, ERROR_TEXT, STATUS_CODE} from './../../../../enum/index';
import {TypeDataList} from './../../../../interfaces/index';
import {Request, Response} from 'express';
import resultData from '../../../../common/responsive_data';

const HomeController = {
	// [GET] => home
	home: async (req: Request, res: Response) => {
		try {
			const respon: TypeDataList = {
				items: [],
				pagination: {
					totalCount: 10,
					totalPage: 1,
				},
			};

			return res.status(STATUS_CODE.THANH_CONG).json(
				resultData({
					error: {
						code: ERROR_CODE.THANH_CONG,
						message: ERROR_TEXT.THANH_CONG,
					},
					data: respon,
				})
			);
		} catch (error) {
			return res.status(STATUS_CODE.SERVER).json(
				resultData({
					error: {
						code: ERROR_CODE.THAT_BAI,
						message: 'Có lỗi xảy ra !',
					},
					data: null,
				})
			);
		}
	},
};

export default HomeController;
