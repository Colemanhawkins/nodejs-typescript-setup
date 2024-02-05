import { DataTypes, Model, Optional, Sequelize } from 'sequelize'
import bcrypt from 'bcrypt'

interface UserAttributes {
  id: number
  username: string
  email: string
  password: string
}

interface UserCreationAttributes extends Optional<UserAttributes, 'id'> {}

const User = (sequelize: Sequelize) => {
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
      modelName: 'User'
    }
  )
}

export default User
