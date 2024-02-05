import { DataTypes, Model, Optional, Sequelize } from 'sequelize'

interface UnidadAttributes {
  id: number
  nombre: string
  descripcion: string
  orden: number
  cursoId: number
}

interface UnidadCreationAttributes extends Optional<UnidadAttributes, 'id'> {}

interface UnidadInstance
  extends Model<UnidadAttributes, UnidadCreationAttributes>,
    UnidadAttributes {}

const Unidad = (sequelize: Sequelize) => {
  return sequelize.define<UnidadInstance>(
    'Unidad',
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      nombre: {
        type: DataTypes.STRING,
        allowNull: false
      },
      descripcion: {
        type: DataTypes.STRING,
        allowNull: true
      },
      orden: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      cursoId: {
        type: DataTypes.INTEGER,
        allowNull: false
      }
    },
    {
      modelName: 'Unidad'
    }
  )
}

export default Unidad
