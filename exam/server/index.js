const express = require('express')
const mongoose = require('mongoose');
var cors = require('cors')
const Schema = mongoose.Schema;
const app = express()
const PORT = 8080;

app.use(cors())
app.use(express.json())
const foodSchema = new Schema({
    title: String,
    Description: String,
    imageUrl: String,
    Price: Number,
  });

  const foodsModel = mongoose.model('Foods', foodSchema);

  app.get('/foods', async(req, res) => {
    try {
        const response = await foodsModel.find({});
        res.json(response)
    } catch (error) {
       res.json({
        message: "error"
       })
    }
  });

app.get('/foods/:id', async(req, res) => {
    const {id} = req.params;
    try {
        const food = await foodsModel.findById(id);
        res.json(food)
    } catch (error) {
       res.json({
        message: "error"
       })
    }
  });
  app.delete('/foods/:id', async(req, res) => {
    const {id} = req.params;
    try {
        const deleteFood = await foodsModel.findByIdAndDelete(id);
        res.json(deleteFood)
    } catch (error) {
       res.json({
        message: "error"
       })
    }
  });
  app.post('/foods', async(req, res) => {
    const {id} = req.params;
    try {
        const addNewFood = foodsModel({...req.body});
        await addNewFood.save()
        res.json(addNewFood)
    } catch (error) {
       res.json({
        message: "error"
       })
    }
  });



  


mongoose.connect('mongodb+srv://fatimacbazmp202:fatima123@cluster0.b94na.mongodb.net/Foods?retryWrites=true&w=majority&appName=Cluster0')
  .then(() => console.log('Connected!'));
app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})