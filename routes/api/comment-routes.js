// import methods from comment-controller file
const router = require('express').Router();
const { addComment, removeComment } = require('../../controllers/comment-controller');

// ---------------- routes ----------------

//      /api/comments/<pizzaId>
router.route('/:pizzaId').post(addComment);

//      /api/comments/<pizzaId>/<commentId>    
router.route('/:pizzaId/:commentId').delete(removeComment);

        // note: comments are located in two areas, in ID with pizza, need to be deleted in two locations

//export 
module.exports = router;