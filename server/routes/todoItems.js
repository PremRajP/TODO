const router = require('express').Router();
//import todo model
const todoItemsModel = require('../models/todoItems');


// lets create our first
router.post('/api/item', async (req,res)=>{
    try{
        const newItem = new todoItemsModel({
            item: req.body.item
        })
        // save to database
        const saveItem = await newItem.save()
        res.status(200).json('Item added Successfully');
    }catch(err){
        res.json(err);
    }
})

//lets create second route -- get data
router.get('/api/items', async (req,res)=>{
    try{
        const allTodoItems = await todoItemsModel.find({});
        res.status(200).json(allTodoItems)
    }catch(err){
        res.json(err);
    }
})


// let's update item
router.put('/api/items/:id', async (req,res)=>{
    try{
        const updateItem = todoItemsModel.findByIdAndUpdate(res.parms.id, {$set: req.body});
        res.status(200).json(allTodoItems)
    }catch(err){
        res.json(err);
    }
})


// delete item
router.delete('/api/item/:id',async(req,res)=>{
    try{
        const deleteItem = await todoItemsModel.findByIdAndDelete(res.parms.id);
        res.status(200).json('Item Deleted');
        }catch(err){
        res.json(err)
    }
})


//export router
module.exports = router;