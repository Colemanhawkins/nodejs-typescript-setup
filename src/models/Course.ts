import { DataTypes, Model, Optional, Sequelize } from 'sequelize'

interface CursoAttributes {
  id: number
  name: string
  durationHours: number
  level: string
}

interface CourseInstance extends Optional<CursoAttributes, 'id'> {}

class CursoModel extends Model<CursoAttributes, CourseInstance> {}

const Course = (sequelize: Sequelize): typeof CursoModel => {
  return sequelize.define(
    'Curso',
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
      durationHours: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      level: {
        type: DataTypes.STRING,
        allowNull: false
      }
    },
    {
      modelName: 'Curso'
    }
  )
}

export default Course
