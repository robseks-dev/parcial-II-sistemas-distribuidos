export class DeleteInventory {
  constructor(inventoryRepository) {
    this.inventoryRepository = inventoryRepository;
  }

  async execute(code) {
    return await this.inventoryRepository.delete(code);
  }
}
