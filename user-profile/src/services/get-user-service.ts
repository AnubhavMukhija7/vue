import { User } from '@/interfaces/users';

export const getUser = async (id: number): Promise<User> => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${id}`
  );
  return await response.json();
};
