import React, {createContext, useEffect, useState} from 'react';
import healthHopeAPI from '../api/healthHopeAPI';
import {Plan, PlansResponse} from '../interfaces/appInterfaces';

type plansContextProps = {
  plans: Plan[];
  loadPlans: () => Promise<void>;
  addPlan: (PlanName: string, PlanDescription: string) => Promise<void>;
  updatePlan: (
    planName: string,
    planId: string,
  ) => Promise<void>;
  deletePlan: (id: string) => Promise<void>;
  loadPlanById: (id: string) => Promise<Plan>;
  uploadImage: (data: any, id: string) => Promise<void>; //
};

export const PlansContext = createContext({} as plansContextProps);

export const PlansProvider = ({children}: any) => {
  const [plans, setPlans] = useState<Plan[]>([]);

  useEffect(() => {
    loadPlans();
  }, []);

  const loadPlans = async () => {
    const resp = await healthHopeAPI.get<PlansResponse>('/plans?limite=50');
    //   setHabits([...habits,...resp.data.habits]);
    setPlans([...resp.data.plans]);
  };

  const addPlan = async (planName: string, planDescription: string) => {
    // console.log('addHabit');
    // console.log({habitName});
    const resp = await healthHopeAPI.post<Plan>('/plans', {
      name: planName,
      decription: planDescription
    });

    setPlans([...plans, resp.data]);

  };

  const updatePlan = async (planName: string, planId: string) => {
    console.log('updatePlan');
    console.log({planName, planId});
  };

  const deletePlan = async (id: string) => {};

  const loadPlanById = async (id: string): Promise<Plan> => {
    const resp = await healthHopeAPI.get<Plan>(`plans/${id}`);
    return resp.data;
  };

  const uploadImage = async (data: any, id: string) => {}; //

  return (
    <PlansContext.Provider
      value={{
        plans,
        loadPlans,
        addPlan,
        updatePlan,
        deletePlan,
        loadPlanById,
        uploadImage,
      }}>
      {children}
    </PlansContext.Provider>
  );
};
