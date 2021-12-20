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
    userId: string,
    userName: string,
    userEmail: string,
    userPassword: string,
    userGender: string,
    userAge: number,
    userWeight: number,
    userHeight: number,
    userBirthDate: string,
    userCell: string,
    userAddress: string,
    userOccupation: string,
    userRole: string,
    userImg: string,
  ) => Promise<void>;
  updateUser: (
    userId: string,
    userName: string,
    userEmail: string,
    userPassword: string,
    userGender: string,
    userAge: number,
    userWeight: number,
    userHeight: number,
    userBirthDate: string,
    userCell: string,
    userAddress: string,
    userOccupation: string,
    userRole: string,
    userImg: string,
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
    userId: string,
    userName: string,
    userEmail: string,
    userPassword: string,
    userGender: string,
    userAge: number,
    userWeight: number,
    userHeight: number,
    userBirthDate: string,
    userCell: string,
    userAddress: string,
    userOccupation: string,
    userRole: string,
    userImg: string,
  ) => {
    // console.log('addHabit');
    // console.log({habitName});
    const resp = await healthHopeAPI.post<User>('/users', {
      name: userName,
      email: userEmail,
      password: userPassword,
      gender: userGender,
      age: userAge,
      weight: userWeight,
      height: userHeight,
      birthDate: userBirthDate,
      cell: userCell,
      address: userAddress,
      occupation: userOccupation,
      img: userImg,
      role: userRole,
    });

    setUsers([...users, resp.data]);
  };

  const updateUser = async (
    userId: string,
    userName: string,
    userEmail: string,
    userPassword: string,
    userGender: string,
    userAge: number,
    userWeight: number,
    userHeight: number,
    userBirthDate: string,
    userCell: string,
    userAddress: string,
    userOccupation: string,
    userRole: string,
    userImg: string,
  ) => {
    console.log('updateUser');
    console.log({
      userName,
      userEmail,
      userPassword,
      userGender,
      userRole,
      userId,
      userAge,
      userWeight,
      userHeight,
      userBirthDate,
      userCell,
      userAddress,
      userOccupation,
      userImg,
    });
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
