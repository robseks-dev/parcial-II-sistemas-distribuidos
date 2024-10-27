export class GetInventory {
  constructor(inventoryRepository) {
    this.inventoryRepository = inventoryRepository;
  }

  async execute(code) {
    return await this.inventoryRepository.findByCode(code);
  }
}
