import express from "express";
import { createTask, getTaskList, updateTask, deleteTask, getTask } from "../controllers/task.js";
import { isAuthenticated } from "../middlewares/auth.js";


const router = express.Router();
export default router;

router.post('/create', isAuthenticated, createTask);
router.get('/list', isAuthenticated, getTaskList);
router.route('/:id').
    get(isAuthenticated, getTask).
    put(isAuthenticated, updateTask).
    delete(isAuthenticated, deleteTask)

/*
router.get('/:id', isAuthenticated, getTask);
router.put('/:id', isAuthenticated, updateTask);
router.delete('/:id', isAuthenticated, deleteTask);
**/