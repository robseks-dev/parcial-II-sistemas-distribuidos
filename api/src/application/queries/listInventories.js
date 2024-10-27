export class ListInventory {
  constructor(inventoryRepository) {
    this.inventoryRepository = inventoryRepository;
  }

  async execute() {
    return await this.inventoryRepository.getAll();
  }
}
