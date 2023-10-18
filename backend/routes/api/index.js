// backend/routes/api/index.js
const router = require('express').Router();

//connect sections and users middleware to this index.js (aka api router), then api router is then connect index.js that is not nested.
const sessionRouter = require (`./session.js`);
const usersRouter = require (`./users.js`);
const { restoreUser } = require('../../utils/auth.js');


const { setTokenCookie } = require('../../utils/auth.js');
const { User } = require('../../db/models');
const { requireAuth } = require('../../utils/auth.js');


//this is global. check if a user is existed
router.use(restoreUser);

//if route matches, route to sessionRouter
router.use(`/session`, sessionRouter)

//if route matches, route to usersRouter
router.use(`/users`, usersRouter)


// backend/routes/api/index.js
// ...

// backend/routes/api/index.js
// const router = require('express').Router();
const sessionRouter = require('./session.js');
const usersRouter = require('./users.js');
const { restoreUser } = require("../../utils/auth.js");




// Connect restoreUser middleware to the API router
  // If current user session is valid, set req.user to the user in the database
  // If current user session is not valid, set req.user to null
  router.use(restoreUser);

  router.use('/session', sessionRouter);
  
  router.use('/users', usersRouter);
  
  router.post('/test', (req, res) => {
    res.json({ requestBody: req.body });
  });

  


// backend/routes/api/index.js
// ...

// router.use(restoreUser);

// ...

// GET /api/require-auth
// const { requireAuth } = require('../../utils/auth.js');
router.get(
  '/require-auth',
  requireAuth,
  (req, res) => {
    return res.json(req.user);
  }
);

// ...

  
module.exports = router;