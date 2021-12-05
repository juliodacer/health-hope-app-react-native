import React, {createContext, useEffect, useState} from 'react';
import healthHopeAPI from '../api/healthHopeAPI';
import {User, UsersResponse} from '../interfaces/appInterfaces';

type UserContextProps = {
  users: User[];
  usersParticipants: User[];
  usersMedics: User[];
  loadUsers: () => Promise<void>;
  loadUsersParticipants: () => Promise<void>;
  loadUsersMedicals: () => Promise<void>;
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
  const [usersParticipants, setUsersParticipants] = useState<User[]>([]);
  const [usersMedics, setUsersMedics] = useState<User[]>([]);

  useEffect(() => {
    loadUsers();
    loadUsersParticipants();
    loadUsersMedicals();
  }, []);

  useEffect(() => {});

  const loadUsers = async () => {
    const resp = await healthHopeAPI.get<UsersResponse>('/users?limite=50');
    //   setHabits([...habits,...resp.data.habits]);
    const users = resp.data.users;
    // setUsers([...resp.data.users]);
    console.log(users);
    setUsers([...users]);
  };

  const loadUsersParticipants = async () => {
    const resp = await healthHopeAPI.get<UsersResponse>('/users?limite=50');
    //   setHabits([...habits,...resp.data.habits]);
    const participants = resp.data.users.filter(r => r.role == 'USER_ROLE');
    // setUsers([...resp.data.users]);
    //console.log(participants);
    setUsersParticipants([...participants]);
  };

  const loadUsersMedicals = async () => {
    const resp = await healthHopeAPI.get<UsersResponse>('/users?limite=50');
    //   setHabits([...habits,...resp.data.habits]);
    const medics = resp.data.users.filter(r => r.role == 'MEDICAL_ROLE');
    // setUsers([...resp.data.users]);
    //console.log(medics);
    setUsersMedics([...medics]);
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
        usersParticipants,
        usersMedics,
        loadUsers,
        loadUsersParticipants,
        loadUsersMedicals,
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
