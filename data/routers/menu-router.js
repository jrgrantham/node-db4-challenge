const express = require('express')
const Menu = require('../helpers/menu-model')

const router = express.Router()

router.get('/', async (req, res) => {
  try {
    const menu = await Menu.getRecipes()
    res.status(200).json(menu)
  } catch (error) {
    res.status(500).json({message: 'failed' + error})
  }
})

// router.get('./:id', async (req, res) => {
//   try {
//     const 
//   } catch (error) {
//     res.status(500).json({message: 'failed' + error})
//   }
// })

router.get('/:id/shoppingList', async (req, res) => {
  try{
    const {id} = req.params
    const shoppingList = await Menu.getShoppingList(id)
    res.status(200).json(shoppingList)
  } catch (error) {
    res.status(500).json({message: 'failed' + error})
  }
})

router.get('/:id/instructions', async (req, res) => {
  try{
    const {id} = req.params
    const instructions = await Menu.getInstructions(id)
    res.status(200).json(instructions)
  } catch (error) {
    res.status(500).json({message: 'failed' + error})
  }
})

router.get('/ingredients/:id/recipes', async (req, res) => {
  try{
    const {id} = req.params
    const meals = await Menu.getMealsForIngredient(id)
    res.status(200).json(meals)
  } catch (error) {
    res.status(500).json({message: 'failed' + error})
  }
})

module.exports = router