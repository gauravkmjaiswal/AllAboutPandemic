import express from 'express';

import { createPost, updatePost, deletePost, getPost, getAllPosts } from '../controller/post-controller.js';
import { uploadImage, getImage } from '../controller/image-controller.js';
import { newComment, getComments, deleteComment } from '../controller/comment-controller.js';
import { loginUser, singupUser, logoutUser } from '../controller/user-controller.js';
import { authenticateToken, createNewToken } from '../controller/jwt-controller.js';

import upload from '../utils/upload.js';

import { urlcheck } from '../controller/ANT/check-controller.js'


const router = express.Router();

router.post('/login', loginUser);
router.post('/signup', singupUser);
router.post('/logout', logoutUser);

router.post('/token', createNewToken);

router.post('/create', authenticateToken, createPost);
router.put('/update', authenticateToken, updatePost);
router.delete('/delete', authenticateToken, deletePost);

router.get('/post',authenticateToken , getPost);
router.get('/posts',authenticateToken, getAllPosts);

router.post('/file/upload', upload.single('file'), uploadImage);
router.get('/file/:filename', getImage);

router.post('/comment/new',authenticateToken, newComment);
router.get('/comments',authenticateToken, getComments);
router.delete('/comment/delete',authenticateToken, deleteComment);



router.get('/ANT/check',urlcheck)


export default router;