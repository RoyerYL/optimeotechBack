const {Router} = require("express");

const userRouter = Router();

//Importar los handlers
const { getFilteredUsersHandler, changePasswordHandler} = require("../handlers/userHandlers");
const {createUserHandler,  getAll, banUserHandler, unBanUserHandler} = require("../handlers/userHandlers");

//Rutas
userRouter.post("/", createUserHandler);
userRouter.get("/", getAll);
userRouter.post("/ban/:id", banUserHandler);
userRouter.post("/unBan/:id", unBanUserHandler);
userRouter.get("/filter", getFilteredUsersHandler);
userRouter.post("/changePassword", changePasswordHandler);


module.exports = userRouter;