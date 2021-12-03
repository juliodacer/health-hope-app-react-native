import React, {useEffect, useState} from 'react';
import healthHopeAPI from '../api/healthHopeAPI';
import {Plan} from '../interfaces/appInterfaces';

export const usePlans = () => {
  const [isLoading, setIsLoading] = useState(true);

  const [plans, setPlans] = useState<Plan[]>([]);

  useEffect(() => {
    getPlans();
  }, []);

  const getPlans = async () => {
    const resp = await healthHopeAPI.get('/plans');
    setPlans(resp.data.plans);
    setIsLoading(false);
  };

  return {isLoading, plans};
};
