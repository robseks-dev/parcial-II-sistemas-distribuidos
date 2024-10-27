export class InventoryModel {
  constructor({
    code,
    password,
    email,
    id_product,
    amount,
    location,
    date_entry,
    date_exit,
    status,
    id_provider,
  }) {
    this.code = code;
    this.password = password;
    this.email = email;
    this.id_product = id_product;
    this.amount = amount;
    this.location = location;
    this.date_entry = date_entry;
    this.date_exit = date_exit;
    this.status = status;
    this.id_provider = id_provider;
  }

  getCode() {
    return this.code;
  }

  setCode(code) {
    this.code = code;
  }

  getPassword() {
    return this.password;
  }

  setPassword(password) {
    this.password = password;
  }

  getEmail() {
    return this.email;
  }

  setEmail(email) {
    this.email = email;
  }

  getIdProduct() {
    return this.id_product;
  }

  setIdProduct(id_product) {
    this.id_product = id_product;
  }

  getAmount() {
    return this.amount;
  }

  setAmount(amount) {
    this.amount = amount;
  }

  getLocation() {
    return this.location;
  }

  setLocation(location) {
    this.location = location;
  }

  getDateEntry() {
    return this.date_entry;
  }

  setDateEntry(date_entry) {
    this.date_entry = date_entry;
  }

  getDateExit() {
    return this.date_exit;
  }

  setDateExit(date_exit) {
    this.date_exit = date_exit;
  }

  getStatus() {
    return this.status;
  }

  setStatus(status) {
    this.status = status;
  }

  getIdProvider() {
    return this.id_provider;
  }

  setIdProvider(id_provider) {
    this.id_provider = id_provider;
  }
}
