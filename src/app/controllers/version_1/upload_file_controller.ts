import {ERROR_CODE, ERROR_TEXT, STATUS_CODE} from './../../../../enum/index';
import {Request, Response} from 'express';
import resultData from '../../../../common/responsive_data';
import cloudinary from '../../../config/cloudinary/index';

const uploadFile = async (file: any) => {
	const respon: any = await cloudinary.uploader.upload(file.path, {
		folder: 'server-node-upload',
	});
	return respon;
};

const UploadFileController = {
	// [POST] => /api/v1/upload-single-file
	uploadSingleFile: async (req: Request, res: Response) => {
		try {
			const fileImage: any = req.file;

			if (fileImage) {
				cloudinary.uploader.upload(
					fileImage.path,
					{
						folder: 'server-node-upload',
					},
					(error, result) => {
						// Có lỗi
						if (error) {
							return res.status(STATUS_CODE.BAD_REQUEST).json(
								resultData({
									error: {
										code: ERROR_CODE.THAT_BAI,
										message: 'Lỗi đường truyền',
									},
									data: null,
								})
							);
						}
						// Có data
						if (result) {
							return res
								.status(STATUS_CODE.CREATE_THANH_CONG)
								.json(
									resultData({
										error: {
											code: ERROR_CODE.THANH_CONG,
											message: ERROR_TEXT.THANH_CONG,
										},
										data: {
											file_id: result.asset_id,
											path: result.secure_url,
										},
									})
								);
						}
					}
				);
			} else {
				return res.status(STATUS_CODE.NOT_FOUND).json(
					resultData({
						error: {
							code: ERROR_CODE.THAT_BAI,
							message: 'Không tìm thấy file',
						},
						data: null,
					})
				);
			}
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
			const files: any = req?.files;
			let listFileUpload: any[] = [];

			if (files?.length > 0) {
				for (let i = 0; i < files?.length; i++) {
					const file = await uploadFile(files[i]);

					if (file) {
						listFileUpload.push({
							file_id: file.asset_id,
							path: file.secure_url,
						});
					} else {
						return res.status(STATUS_CODE.BAD_REQUEST).json(
							resultData({
								error: {
									code: ERROR_CODE.THAT_BAI,
									message: 'Lỗi đường truyền',
								},
								data: null,
							})
						);
					}
				}

				// Trả về data
				if (listFileUpload.length > 0) {
					return res.status(STATUS_CODE.THANH_CONG).json(
						resultData({
							error: {
								code: ERROR_CODE.THANH_CONG,
								message: ERROR_TEXT.THANH_CONG,
							},
							data: listFileUpload,
						})
					);
				} else {
					return res
						.status(STATUS_CODE.CREATE_THANH_CONG_NO_CONTENT)
						.json(
							resultData({
								error: {
									code: ERROR_CODE.THANH_CONG,
									message: 'Không có data trả về',
								},
								data: listFileUpload,
							})
						);
				}
			} else {
				return res.status(STATUS_CODE.NOT_FOUND).json(
					resultData({
						error: {
							code: ERROR_CODE.THAT_BAI,
							message: 'Không tìm thấy file',
						},
						data: null,
					})
				);
			}
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
