export class UpdateInventory {
  constructor(inventoryRepository) {
    this.inventoryRepository = inventoryRepository;
  }

  async execute(inventory) {
    return await this.inventoryRepository.update(inventory);
  }
}
