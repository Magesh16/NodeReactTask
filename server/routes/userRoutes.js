import express from 'express';
import {getUserInfo, postUserInfo} from '../controllers/userController.js';

const routes = express.Router();

routes.get('/getUserInfo',getUserInfo);
routes.post('/postUserInfo', postUserInfo);

export default routes;