import express from 'express';
import UploadFileController from '../../app/controllers/version_1/upload_file_controller';

const router = express.Router();

router.post('/upload-single-file', UploadFileController.uploadSingleFile);
router.post('/upload-multiple-file', UploadFileController.uploadMultipleFile);

export default router;
