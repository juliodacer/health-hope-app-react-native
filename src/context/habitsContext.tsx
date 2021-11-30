import React, {createContext, useEffect, useState} from 'react';
import healthHopeAPI from '../api/healthHopeAPI';
import {Habit, HabitsResponse} from '../interfaces/appInterfaces';

type HabitsContextProps = {
  habits: Habit[];
  loadHabits: () => Promise<void>;
  addHabit: (planId: string, habitName: string) => Promise<void>;
  updateHabit: (
    planId: string,
    habitName: string,
    habitId: string,
  ) => Promise<void>;
  deleteHabit: (id: string) => Promise<void>;
  loadById: (id: string) => Promise<Habit>;
  uploadImage: (data: any, id: string) => Promise<void>; //
};

export const HabitsContext = createContext({} as HabitsContextProps);

export const HabitsProvider = ({children}: any) => {
  const [habits, setHabits] = useState<Habit[]>([]);

  useEffect(() => {
    loadHabits();
  }, []);

  const loadHabits = async () => {
    const resp = await healthHopeAPI.get<HabitsResponse>('/habits?limit=50');
    //   setHabits([...habits,...resp.data.habits]);
    setHabits([...resp.data.habits]);
  };

  const addHabit = async (planId: string, habitName: string) => {};
  const updateHabit = async (
    planId: string,
    habitName: string,
    habitId: string,
  ) => {};
  const deleteHabit = async (id: string) => {};
  const loadById = async (id: string) => {
    throw new Error('Not implemented');
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
        loadById,
        uploadImage,
      }}>
      {children}
    </HabitsContext.Provider>
  );
};
