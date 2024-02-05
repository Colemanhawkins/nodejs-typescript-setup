import { DataTypes, Model, Optional, Sequelize } from 'sequelize'

interface UnitAttributes {
  id: number
  name: string
  description: string
  order: number
  courseId: number
}

interface UnitInstance extends Optional<UnitAttributes, 'id'> {}

class UnitModel extends Model<UnitAttributes, UnitInstance> {
  // Puedes agregar métodos o propiedades personalizadas aquí si es necesario
}

const Unit = (sequelize: Sequelize): typeof UnitModel => {
  return sequelize.define(
    'Unit',
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      description: {
        type: DataTypes.STRING,
        allowNull: true
      },
      order: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      courseId: {
        type: DataTypes.INTEGER,
        allowNull: false
      }
    },
    {
      modelName: 'Unidad'
    }
  )
}

export default Unit
