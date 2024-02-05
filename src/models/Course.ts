import { DataTypes, Model, Optional, Sequelize } from 'sequelize'

interface CursoAttributes {
  id: number
  nombre: string
  duracionHoras: number
  nivel: string
}

interface CursoCreationAttributes extends Optional<CursoAttributes, 'id'> {}

interface CursoInstance
  extends Model<CursoAttributes, CursoCreationAttributes>,
    CursoAttributes {}

const Curso = (sequelize: Sequelize) => {
  return sequelize.define<CursoInstance>(
    'Curso',
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
      duracionHoras: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      nivel: {
        type: DataTypes.STRING,
        allowNull: false
      }
    },
    {
      modelName: 'Curso'
    }
  )
}

export default Curso
