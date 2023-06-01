import express from 'express';
import {deleteUserInfo, getUserInfo, getUserInfoById, postUserInfo, updateUserInfo} from '../controllers/userController.js';

const routes = express.Router();

routes.get('/getUserInfo',getUserInfo);
routes.post('/postUserInfo', postUserInfo);
routes.put('/updateUserInfo/:id',updateUserInfo);
routes.get('/getUserInfoById/:id',getUserInfoById);
routes.delete('/deleteUserInfo/:id',deleteUserInfo);

export default routes;