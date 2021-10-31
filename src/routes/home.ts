import { Router } from 'oak';
import * as HomeController from 'controller/home_controller.tsx';

const router = new Router();
router.get('/', HomeController.homePage);

export default router;
