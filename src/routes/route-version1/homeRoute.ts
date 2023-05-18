import express from 'express';
import HomeController from '../../app/controllers/version_1/homecontroller';

const router = express.Router();

router.get('/', HomeController.home);

export default router;
