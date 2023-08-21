import { Model } from "sequelize";


export class User extends Model {
    public id!: number;
    public name!: string;
    public email!: string;
}

export const createUser = async (name: string, email: string) => {
    try {
      const user = await User.create({ name, email });
      console.log('User created:', user.toJSON());
    } catch (error) {
      console.error('Error creating user:', error);
    }
};