import express from 'express';
import HomeController from '../../app/controllers/version_2/home_controller';

const router = express.Router();

router.get('/', HomeController.home);

export default router;
