const { Pizza } = require('../models');

const pizzaController = {
    // get all pizzas - getAllPizza method
        //callback function for the GET /api/pizzas route
    getAllPizza(req, res) {
      Pizza.find({})
        .then(dbPizzaData => res.json(dbPizzaData))
        .catch(err => {
          console.log(err);
          res.status(500).json(err);
        });
    },
  
    // get one pizza by id
        //  rather than accessing entire req, destructure just params from it
    getPizzaById({ params }, res) {
      Pizza.findOne({ _id: params.id })
        .then(dbPizzaData => {
          // If no pizza is found, send 404
          if (!dbPizzaData) {
            res.status(404).json({ message: 'No pizza found with this id!' });
            return;
          }
          res.json(dbPizzaData)
        })
        .catch(err => {
          console.log(err);
          res.status(400).json(err);
        });
    },

    // createPizza
        // create method for handling POST /api/pizzas to add a pizza to the database
                // destructure the body out of the Express.js req object 
    createPizza({ body }, res) {
        Pizza.create(body)
        .then(dbPizzaData => res.json(dbPizzaData))
        .catch(err => res.status(400).json(err));
    },

    // update pizza by id
        // request to PUT /api/pizzas/:id   to find a single document
                // Note: without { new: true }, will return original doc. 
                 // By setting to true, Mongoose will return new version of doc
    updatePizza({ params, body }, res) {
        Pizza.findOneAndUpdate({ _id: params.id }, body, { new: true })
        .then(dbPizzaData => {
            if (!dbPizzaData) {
            res.status(404).json({ message: 'No pizza found with this id!' });
            return;
            }
            res.json(dbPizzaData);
        })
        .catch(err => res.status(400).json(err));
    },

    // delete pizza
        // request to DELETE /api/pizzas/:id
    deletePizza({ params }, res) {
        Pizza.findOneAndDelete({ _id: params.id })
        .then(dbPizzaData => {
            if (!dbPizzaData) {
            res.status(404).json({ message: 'No pizza found with this id!' });
            return;
            }
            res.json(dbPizzaData);
        })
        .catch(err => res.status(400).json(err));
    }

  }

module.exports = pizzaController;