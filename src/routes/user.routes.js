const { Router } = require("express");
const {
  userRegister,
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser,
} = require("../controllers");
const authenticate = require("../middlewares/auth.middleware");

const router = Router();

router.post("/users", userRegister);
/**
 * @openapi
 * components:
 *  schemas:
 *    Users:
 *      type: object
 *      properties:
 *        username:
 *          type: string
 *          example: Sergio
 *        email:
 *          type: string
 *          example: sergio@gmail.com
 *        password:
 *          type: string
 *          example: abc123
 *    Heroes:
 *       type: object
 *       properties:
 *         idApi:
 *           type: string
 *           example: string
 *         name:
 *           type: string
 *           example: string
 *         description:
 *           type: string
 *           example: string
 *         image:
 *           type: string
 *           example: string
 *         appears:
 *           type: array
 *           example: [array]
 *  securitySchemes:
 *     bearerAuth:
 *        type: http
 *        scheme: bearer
 *        bearerFormat: JWT
 */


/**
 * @openapi
 * components:
 *  schemas:
 *    Login:
 *      type: object
 *      properties:
 *        email:
 *          type: string
 *          example: sergio@gmail.com
 *        password:
 *          type: string
 *          example: abc123
 */

/**
 * @openapi
 * /api/v1/auth/login:
 *   post:
 *     summary: Create a new user into the app
 *     tags: [Login]
 *     requestBody:
 *       description: For logging, you will need an email and password.
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             $ref: '#/components/schemas/Login'
 *     responses:
 *       200:
 *         description: Logged
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: OK
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       username:
 *                          type: string
 *                          example: string
 *                       email:
 *                          type: string
 *                          example: string
 *                       password:
 *                          type: string
 *                          example: string
 *                       token:
 *                          type: string
 *                          example: eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Ik1hcmxvbiIsImVtYWlsIjoibXR1cml6b0BnbWFpbC5jb20iLCJwYXNzd29yZCI6ImFiYzEyMzQiLCJpYXQiOjE2NzAxMTkxNjYsImV4cCI6MTY3MDEyMDA2Nn0.dBeJ0QEvFX69LDENYmzDoDAlCQNx3kqbxCxqo7Uvy73O1BpTJUNEmctfGiABeZB0dyFZbEigGcZBXnBMRUbnJA
 *       400:
 *          description: "Verify credentials for login"
 */



/**
 * @openapi
 * /api/v1/users:
 *   post:
 *     summary: Create a new user into the app
 *     tags: [Users]
 *     requestBody:
 *       description: To register a new user you need a username, email and password.
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             $ref: '#/components/schemas/Users'
 *     security:
 *        - bearerAuth: []
 *     responses:
 *       200:
 *         description: created
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: OK
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       username:
 *                          type: string
 *                          example: Sergio
 *                       email:
 *                          type: string
 *                          example: sergio@gmail.com
 *                       password:
 *                          type: string
 *                          example: abc123
 */

router.get("/users", authenticate, getAllUsers);
/**
 * @openapi
 * /api/v1/users:
 *  get:
 *    summary: Get all users from the database. You will need to be authenticated.
 *    tags: [Users]
 *    responses:
 *      200:
 *        description: These are all the users registered
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                $ref: '#/components/schemas/Users'
 *    security:
 *        - bearerAuth: []
 */

router.get("/users/:id", getUserById);
/**
 * @openapi
 * /api/v1/users/{id}:
 *  get:
 *    summary: Get one user from the database. You will need to be authenticated.
 *    tags: [Users]
 *    parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: It is the user id
 *    security:
 *        - bearerAuth: []
 *    responses:
 *      200:
 *        description: This is the user registered and selected
 *      404:
 *        description: User not found, please verify
 */

router.put("/users/:id", updateUser);
/**
 * @openapi
 * /api/v1/users/{id}:
 *  put:
 *    summary: Update one user. You will need to be authenticated.
 *    tags: [Users]
 *    parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: It is the user id
 *    requestBody:
 *       description: Update user data.
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             $ref: '#/components/schemas/Users'
 *    security:
 *        - bearerAuth: []
 *    responses:
 *      200:
 *        description: User selected was updated
 *      404:
 *        description: User not found, please verify
 */

router.delete("/users/:id", deleteUser);
/**
 * @openapi
 * /api/v1/users/{id}:
 *  delete:
 *    summary: Delete one user.
 *    tags: [Users]
 *    parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: It is the user id
 *    security:
 *        - bearerAuth: []
 *    responses:
 *      200:
 *        description: User selected was deleted
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              $ref: '#/components/schemas/Users'
 *      404:
 *        description: User not found, please verify
 */



/**
 * @openapi
 * components:
 *  schemas:
 *    Heroes:
 *      type: object
 *      properties:
 *        email:
 *          type: string
 *          example: sergio@gmail.com
 *        password:
 *          type: string
 *          example: abc123
 */


/**
 * @openapi
 * /api/v1/characters/marvel:
 *  get:
 *    summary: Get all Heroes from Marvel Heroes. You will need to be authenticated.
 *    tags: [Heroes]
 *    responses:
 *      200:
 *        description: These are all heroes from API Marvel
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 */



/**
 * @openapi
 * /api/v1/characters/database/seed:
 *   get:
 *     summary: Get heroes form API MARVEL and inserte them in MongoDB daabase
 *     tags: [Heroes]
 *     security:
 *        - bearerAuth: []
 *     responses:
 *       200:
 *         description: Logged
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: OK
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       idApi:
 *                          type: string
 *                          example: string
 *                       name:
 *                          type: string
 *                          example: string
 *                       description:
 *                          type: string
 *                          example: string
 *                       image:
 *                          type: string
 *                          example: string
 *                       appears:
 *                          type: array
 *                          example: string
 *         404:
 *          description: "Verify credentials for login"
 */


/**
 * @openapi
 * /api/v1/characters/database:
 *   post:
 *     summary: Add a new hero into the database
 *     tags: [Heroes]
 *     requestBody:
 *       description: To add a new hero.
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             $ref: '#/components/schemas/Hero'
 *     security:
 *        - bearerAuth: []
 *     responses:
 *       200:
 *         description: created
 *       400:
 *         description: error, please verify
 */


/**
 * @openapi
 * /api/v1/characters/database/{id}:
 *  delete:
 *    summary: Delete one hero.
 *    tags: [Heroes]
 *    parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: It is the hero id
 *    responses:
 *      200:
 *        description: Hero selected was deleted
 *      404:
 *        description: Hero not found, please verify
 */


module.exports = router;
