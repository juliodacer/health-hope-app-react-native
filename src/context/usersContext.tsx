import React, {createContext, useEffect, useState} from 'react';
import healthHopeAPI from '../api/healthHopeAPI';
import {User, UsersResponse} from '../interfaces/appInterfaces';

type UserContextProps = {
  users: User[];
  loadUsers: () => Promise<void>;
  addUser: (
    userName: string,
    userEmail: string,
    userPassword: string,
    userRole: string,
  ) => Promise<void>;
  updateUser: (
    userName: string,
    userEmail: string,
    userPassword: string,
    userRole: string,
    userId: string,
  ) => Promise<void>;
  deleteUser: (id: string) => Promise<void>;
  loadUserById: (id: string) => Promise<User>;
  uploadImage: (data: any, id: string) => Promise<void>; //
};

export const UsersContext = createContext({} as UserContextProps);

export const UsersProvider = ({children}: any) => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const resp = await healthHopeAPI.get<UsersResponse>('/users?limite=50');
    //   setHabits([...habits,...resp.data.habits]);
    const participants = resp.data.users.filter(r => r.role == 'USER_ROLE');
    // setUsers([...resp.data.users]);
    console.log(participants);
    setUsers([...participants]);
  };

  const addUser = async (
    userName: string,
    userEmail: string,
    userPassword: string,
    userRole: string,
  ) => {
    // console.log('addHabit');
    // console.log({habitName});
    const resp = await healthHopeAPI.post<User>('/users', {
      name: userName,
      email: userEmail,
      password: userPassword,
      role: userRole,
    });

    setUsers([...users, resp.data]);
  };

  const updateUser = async (
    userName: string,
    userEmail: string,
    userPassword: string,
    userRole: string,
    userId: string,
  ) => {
    console.log('updateUser');
    console.log({userName, userEmail, userPassword, userRole, userId});
  };

  const deleteUser = async (id: string) => {};

  const loadUserById = async (id: string): Promise<User> => {
    const resp = await healthHopeAPI.get<User>(`users/${id}`);
    return resp.data;
  };

  const uploadImage = async (data: any, id: string) => {}; //

  return (
    <UsersContext.Provider
      value={{
        users,
        loadUsers,
        addUser,
        updateUser,
        deleteUser,
        loadUserById,
        uploadImage,
      }}>
      {children}
    </UsersContext.Provider>
  );
};