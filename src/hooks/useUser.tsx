import React, {useEffect, useState} from 'react';
import healthHopeAPI from '../api/healthHopeAPI';
import { User } from '../interfaces/appInterfaces';

export const useUsers = () => {
  const [isLoading, setIsLoading] = useState(true);

  const [users, setUSers] = useState<User[]>([]);

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    const resp = await healthHopeAPI.get(`/users`);
    setUSers(resp.data.users);
    setIsLoading(false);
  };

  return {isLoading, users};
};
