import express from 'express';
import {getUserInfo, getUserInfoById, postUserInfo, updateUserInfo} from '../controllers/userController.js';

const routes = express.Router();

routes.get('/getUserInfo',getUserInfo);
routes.post('/postUserInfo', postUserInfo);
routes.put('/updateUserInfo/:id',updateUserInfo)
routes.get('/getUserInfoById/:id',getUserInfoById)

export default routes;