import { InventoryModel } from "../../domain/models/InventoryModel.js";

export class CreateInventory {
  constructor(inventoryRepository) {
    this.inventoryRepository = inventoryRepository;
  }

  async execute(data) {
    if (
      !data.password ||
      !data.email ||
      !data.id_product ||
      !data.amount ||
      !data.location ||
      !data.date_entry ||
      !data.date_exit ||
      !data.status ||
      !data.id_provider
    ) {
      throw new Error("Los campos no pueden estar vacios");
    }

    const inventory = new InventoryModel(data);
    return await this.inventoryRepository.save(inventory);
  }
}
