import React, {createContext, useEffect, useState} from 'react';
import healthHopeAPI from '../api/healthHopeAPI';
import {Habit, HabitsResponse} from '../interfaces/appInterfaces';

type HabitsContextProps = {
  habits: Habit[];
  loadHabits: () => Promise<void>;
  addHabit: (
    habitName: string,
    habitDescription: string,
    habitPerform: string,
  ) => Promise<void>;
  updateHabit: (
    habitId: string,
    habitName: string,
    habitDescription: string,
  ) => Promise<void>;
  deleteHabit: (id: string) => Promise<void>;
  loadHabitById: (id: string) => Promise<Habit>;
  uploadImage: (data: any, id: string) => Promise<void>; //
};

export const HabitsContext = createContext({} as HabitsContextProps);

export const HabitsProvider = ({children}: any) => {
  const [habits, setHabits] = useState<Habit[]>([]);

  useEffect(() => {
    loadHabits();
  }, []);

  const loadHabits = async () => {
    const resp = await healthHopeAPI.get<HabitsResponse>('/habits?limite=50');
    //   setHabits([...habits,...resp.data.habits]);
    setHabits([...resp.data.habits]);
  };

  const addHabit = async (
    habitName: string,
    habitDescription: string,
    habitPerform: string,
  ) => {
    console.log('createHabit');
    // console.log({habitName, habitDescription});
    const resp = await healthHopeAPI.post<Habit>('/habits', {
      name: habitName,
      decription: habitDescription,
      perform: habitPerform
    });

    console.log(resp.data);

    setHabits([...habits, resp.data]);
  };

  const updateHabit = async (
    habitId: string,
    habitName: string,
    habitDescription: string,
  ) => {
    console.log('updateHabit');
    console.log({habitId, habitName, habitDescription});

    const resp = await healthHopeAPI.put<Habit>(`habits/${habitId}`, {
      name: habitName,
      decription: habitDescription,
    });

    setHabits([...habits, resp.data]);
  };

  const deleteHabit = async (id: string) => {};

  const loadHabitById = async (id: string): Promise<Habit> => {
    const resp = await healthHopeAPI.get<Habit>(`habits/${id}`);
    return resp.data;
  };

  const uploadImage = async (data: any, id: string) => {}; //

  return (
    <HabitsContext.Provider
      value={{
        habits,
        loadHabits,
        addHabit,
        updateHabit,
        deleteHabit,
        loadHabitById,
        uploadImage,
      }}>
      {children}
    </HabitsContext.Provider>
  );
};
