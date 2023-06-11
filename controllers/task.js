import ErrorHandler from "../middlewares/error.js";
import { Task } from "../models/task.js";


export const createTask = async (req, res, next) =>{
    try{
        const {title, description} = req.body

        const task = await Task.create({
            title: title,
            description: description,
            isCompleted: false,
            user: req.user._id
        });
    
        res.status(201).json({
            success: true,
            results: task
        });
    }
    catch(error){
        next(error);
    }
}

export const getTaskList = async (req, res, next) =>{
    try{
        const {title, description} = req.body

        const tasks = await Task.find({user: req.user._id});
    
        res.status(200).json({
            success: true,
            results: tasks
        });
    }
    catch(error){
        next(error);
    }
}


export const updateTask = async (req, res, next) =>{

    try{
        let task = await Task.findById({_id: req.params.id});
        if(!task){
            return next(new ErrorHandler("Task with this id Doesn't Exists!", 400));
        }
        task.isCompleted = !task.isCompleted
        task.save()
        res.status(200).json({
            success: true,
            results: "Task Updated Succussfully!"
        });
    }
    catch(error){
        next(error);
    }
}


export const deleteTask = async (req, res, next) =>{

    try{
        const task = await Task.findById({_id: req.params.id});
        if(!task){
            return next(new ErrorHandler("Task with this id Doesn't Exists!", 400));
        }
        await task.deleteOne();
        res.status(200).json({
            success: true,
            message: "Task Deleted Succussfully!"
        });
    }
    catch(error){
        next(error);
    }
}

export const getTask = async (req, res, next) =>{
    try{
        const {id} = req.params
        const task = await Task.findById({_id: id});
        if(!task){
            return next(new ErrorHandler("Task with this id Doesn't Exists!", 400));
        }
        res.status(200).json({
            success: true,
            results: task
        });
    }
    catch(error){
        next(error)
    }
}