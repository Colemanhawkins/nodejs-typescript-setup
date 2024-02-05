import { DataTypes, Model, Optional, Sequelize } from 'sequelize'
import bcrypt from 'bcrypt'

interface UserAttributes {
  id: number
  username: string
  email: string
  password: string
}

interface UserInstance extends Optional<UserAttributes, 'id'> {}

class UserModel extends Model<UserAttributes, UserInstance> {
  // Puedes agregar métodos o propiedades personalizadas aquí si es necesario
}
const User = (sequelize: Sequelize): typeof UserModel => {
  return sequelize.define(
    'User',
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      username: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
      },
      email: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        set(this: any, value: string) {
          const hashedPassword = bcrypt.hashSync(value, 10)
          this.setDataValue('password', hashedPassword)
        }
      }
    },
    {
      modelName: 'Usuario'
    }
  )
}

export default User
