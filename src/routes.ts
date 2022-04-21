import { Router } from "express";
import { addComputerController } from "./services/addComputer";
import { getComputersController } from "./services/getComputers";
import { addUserController } from "./services/addUser";
import { getUserDataController } from "./services/getUserData";
import { addComputerToUserController } from "./services/addComputerToUser";
import { setWeeklyJourneyToUserController } from "./services/setWeeklyJourneyToUser";
import { canUserAccessComputerController } from "./services/canUserAccessComputer";

const router = Router();

router.post("/computers", (req, res) => {
  addComputerController.handle(req, res);
});

router.get("/computers", (req, res) => {
  getComputersController.handle(req, res);
});

router.post("/users", (req, res) => {
  addUserController.handle(req, res);
});

router.get("/users", (req, res) => {
  getUserDataController.handle(req, res);
});

router.put("/users/add-computer", (req, res) => {
  addComputerToUserController.handle(req, res);
});

router.put("/users/set-weekly-journey", (req, res) => {
  setWeeklyJourneyToUserController.handle(req, res);
});

router.get("/access", (req, res) => {
  canUserAccessComputerController.handle(req, res);
});

export default router;
