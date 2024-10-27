import { Router } from "express";
import {
  createInventory,
  updateInventory,
  deleteInventory,
  getInventory,
  listInventories,
} from "../infraestructure/controllers/InventoryController.js";

const router = Router();

router.post("/", createInventory);
router.patch("/", updateInventory);
router.delete("/:code", deleteInventory);
router.get("/:code", getInventory);
router.get("/", listInventories);

export default router;
