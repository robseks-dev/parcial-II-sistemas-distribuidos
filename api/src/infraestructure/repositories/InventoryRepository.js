import { InventoryEntitie } from "../../domain/entities/InventoryEntitie.js";

export class InventoryRepository {
  async findByCode(code) {
    return await InventoryEntitie.findByPk(code);
  }

  async save(inventory) {
    return await InventoryEntitie.create(inventory);
  }

  async delete(code) {
    return await InventoryEntitie.destroy({ where: { code } });
  }

  async update(inventory) { 
    return await InventoryEntitie.update(inventory, { where: { code: inventory.code } });
  }

  async getAll() {
    return await InventoryEntitie.findAll();
  }
}