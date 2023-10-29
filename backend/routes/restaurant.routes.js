// Create a new restauran
const express = require('express')
const router = express.Router()
const Restaurant = require('../models/restaurant');

router.post('/restaurants', async (req, res) => {
  const { restaurant_name, address, contact } = req.body

  try {
    const restaurant = await Restaurant.create({
        restaurant_name,
      address,
      contact,
    })

    res.status(201).json(restaurant)
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: 'Internal Server Error' })
  }
})

// Get a list of all restaurants
router.get('/restaurants', async (req, res) => {
  try {
    const restaurants = await Restaurant.findAll()
    res.json(restaurants)
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: 'Internal Server Error' })
  }
})

// Update an existing restaurant (using PATCH route)
router.patch('/restaurants/:id', async (req, res) => {
    const restaurantId = req.params.id;
    const {restaurant_name, address, contact } = req.body;
  
    try {
      const restaurant = await Restaurant.findByPk(restaurantId);
  
      if (!restaurant) {
        return res.status(404).json({ error: 'Restaurant not found' });
      }
  
      // Update only the fields that are present in the request body
      if (restaurant_name) {
        restaurant.restaurant_name = restaurant_name;
      }
      if (address) {
        restaurant.address = address;
      }
      if (contact) {
        restaurant.contact = contact;
      }
  
      await restaurant.save();
  
      res.json(restaurant);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });
  

// Delete a restaurant
router.delete('/restaurants/:id', async (req, res) => {
  const restaurantId = req.params.id

  try {
    const restaurant = await Restaurant.findByPk(restaurantId)

    if (!restaurant) {
      return res.status(404).json({ error: 'Restaurant not found' })
    }

    await restaurant.destroy()

    res.status(204).end()
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: 'Internal Server Error' })
  }
})


module.exports=router