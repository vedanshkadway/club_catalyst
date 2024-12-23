import { Router } from "express";
import { deleteUser, forgotPassword, getAllUser, getSingleUser, getUserDetails, loginUser, logout, registerUser, resetPassword, updatePassword, updateProfile, updateRole } from "../controllers/user.controller.js";
import { isAuthenticatedUser } from "../middlewares/auth.js";

const router = Router();

router.post('/register', registerUser);
router.post('/login', loginUser);
router.post('/logout', logout);
router.post('/forgetPassword', forgotPassword);
router.post('/resetPassword/:token', resetPassword);
router.get('/details',isAuthenticatedUser , getUserDetails);
router.put('/updatePassword', updatePassword);
router.put('/updateProfile',isAuthenticatedUser, updateProfile);
router.get('/all', getAllUser);
router.get('/:id', getSingleUser);
router.put('/updateRole', updateRole);
router.delete('/delete/:id', deleteUser);

export default router;