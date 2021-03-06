const { Schema, model } = require('mongoose');
const moment = require('moment');   // will format createdAd date to look better

//schema
const PizzaSchema = new Schema(
  {
    // note: MongoDB ObjectID or _id will be autogenerated, no need to add to model
    pizzaName: {
      type: String,
      //adding customized message
      required: 'You need to provide a pizza name!',
      // required: true,
      trim: true
    },
    createdBy: {
      type: String,
      required: true,
      trim: true
    },
    // createdAt: {    // will auto-generate per Date.now, no need to add to JSON in POST
    //   type: Date,
    //   default: Date.now
    // },

    // with Moment.js installed, use Getter with Mongoose, by adding a get key to the field
    createdAt: {
      type: Date,
      default: Date.now,
      get: (createdAtVal) => moment(createdAtVal).format('MMM DD, YYYY [at] hh:mm a')
    },


    size: {
      type: String,
      required: true,
      enum: ['Personal', 'Small', 'Medium', 'Large', 'Extra Large'],
      default: 'Large'
    },
    toppings: [],    //array of toppings
    // parent (pizza model) associates to child documents (comment model)    
    comments: [   
      {
        type: Schema.Types.ObjectId,  //associate pizza and comments models through ObjectID
        ref: 'Comment'
      }
    ]
  },

    // Virtual added, which is separated from grouping
      // this Virtual is for counts of comments
      {
        toJSON: {
          virtuals: true,  // (2) virtual set to true
          getters: true   // work with moment.js, date formatter Getter as per above
        },
        id: false
      }   
  );

// --  To add virtuals, (1) this definition (2) update schema above with toJSON property
      //get total count of comments and replies on retrieval, updated to gain tally of every comment with replies
  PizzaSchema.virtual('commentCount').get(function() {
        return this.comments.reduce((total, comment) => total + comment.replies.length + 1, 0);
  });
 
      // PizzaSchema.virtual('commentCount').get(function() {
    //   return this.comments.length;
    // });
    
    

  // create the Pizza model using the PizzaSchema
const Pizza = model('Pizza', PizzaSchema);

  // export the Pizza model
module.exports = Pizza;