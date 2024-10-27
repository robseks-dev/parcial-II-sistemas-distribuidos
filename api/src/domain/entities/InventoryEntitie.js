import { DataTypes } from "sequelize";
import { sequelize } from "../../infraestructure/database/sequelize.js";

export const InventoryEntitie = sequelize.define("InventoryEntitie", {
  code: {
    type: DataTypes.STRING(16),
    primaryKey: true,
  },
  password: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING(70),
    allowNull: false,
    unique: true,
  },
  id_product: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  amount: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  location: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  date_entry: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  date_exit: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  status: {
    type: DataTypes.STRING(20),
    allowNull: false,
  },
  id_provider: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
}, {
  tableName: "inventory",
  timestamps: false,
});
