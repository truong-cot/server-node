import multer from 'multer';
import express from 'express';
import UploadFileController from '../../app/controllers/version_1/upload_file_controller';

const router = express.Router();

// Cấu hình multer
const storage = multer.diskStorage({
	filename: function (req, file, cb) {
		cb(null, file.fieldname + '-' + Date.now());
	},
});

const upload = multer({storage});

router.post(
	'/upload-single-file',
	upload.single('file'),
	UploadFileController.uploadSingleFile
);
router.post(
	'/upload-multiple-file',
	upload.array('files', 5),
	UploadFileController.uploadMultipleFile
);

export default router;
