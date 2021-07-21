import { Users } from '@/interfaces/users';

export const getUsers = async (): Promise<Users> => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/users/`);
  return await response.json();
};
