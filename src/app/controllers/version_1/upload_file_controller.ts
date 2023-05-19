import {ERROR_CODE, ERROR_TEXT, STATUS_CODE} from './../../../../enum/index';
import {Request, Response} from 'express';
import resultData from '../../../../common/responsive_data';

const UploadFileController = {
	// [POST] => /api/v1/upload-single-file
	uploadSingleFile: async (req: Request, res: Response) => {
		try {
			return res.status(STATUS_CODE.THANH_CONG).json(
				resultData({
					error: {
						code: ERROR_CODE.THANH_CONG,
						message: ERROR_TEXT.THANH_CONG,
					},
					data: null,
				})
			);
		} catch (error) {
			return res.status(STATUS_CODE.SERVER).json(
				resultData({
					error: {
						code: ERROR_CODE.THAT_BAI,
						message: ERROR_TEXT.THAT_BAI,
					},
					data: null,
				})
			);
		}
	},

	// [POST] => /api/v1/upload-multiple-file
	uploadMultipleFile: async (req: Request, res: Response) => {
		try {
			return res.status(STATUS_CODE.THANH_CONG).json(
				resultData({
					error: {
						code: ERROR_CODE.THANH_CONG,
						message: ERROR_TEXT.THANH_CONG,
					},
					data: null,
				})
			);
		} catch (error) {
			return res.status(STATUS_CODE.SERVER).json(
				resultData({
					error: {
						code: ERROR_CODE.THAT_BAI,
						message: ERROR_TEXT.THAT_BAI,
					},
					data: null,
				})
			);
		}
	},
};

export default UploadFileController;
