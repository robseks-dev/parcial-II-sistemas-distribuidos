import { InventoryRepository } from "../repositories/InventoryRepository.js";
import { CreateInventory } from "../../application/commands/createInventory.js";
import { UpdateInventory } from "../../application/commands/updateInventory.js";
import { DeleteInventory } from "../../application/commands/deleteInventory.js";
import { GetInventory } from "../../application/queries/getInventory.js";
import { ListInventory } from "../../application/queries/listInventories.js";

const inventoryRepository = new InventoryRepository();

export async function createInventory(req, res) {
  const createInventory = new CreateInventory(inventoryRepository);
  try {
    const inventory = await createInventory.execute(req.body);
    res.status(201).json(inventory);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

export async function updateInventory(req, res) {
  const updateInventory = new UpdateInventory(inventoryRepository);
  try {
    const inventory = await updateInventory.execute(req.body);
    res.status(200).json(inventory);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

export async function deleteInventory(req, res) {
  const deleteInventory = new DeleteInventory(inventoryRepository);
  try {
    const inventory = await deleteInventory.execute(req.params.code);
    res.status(200).json(inventory);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

export async function getInventory(req, res) {
  const getInventory = new GetInventory(inventoryRepository);
  try {
    const inventory = await getInventory.execute(req.params.code);
    res.status(200).json(inventory);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

export async function listInventories(req, res) {
  const listInventories = new ListInventory(inventoryRepository);
  try {
    const inventories = await listInventories.execute();
    res.status(200).json(inventories);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}
