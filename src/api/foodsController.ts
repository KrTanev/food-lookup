import { QueryOptions } from '@tanstack/react-query';
import axios from 'axios';

import { useQueryRequest } from '@/hooks/useQueryRequest';

import { axiosClient } from '../config/axios.config';
import { useMutationRequest } from '../hooks/useMutationRequest';
import { Foods } from './foodsType';

export const getFoods = async (): Promise<Foods[]> => {
  const response = await axiosClient.get('/foods');

  console.log(response);
  return response.data;
};

export const postFood = async (data: Foods): Promise<Foods> => {
  const response = await axiosClient.post('/foods', data);

  return response.data;
};

export const useGetFoods = (options?: QueryOptions<Foods[]>) => {
  return useQueryRequest({
    func: () => getFoods(),
    key: ['foods'],
    options,
  });
};

export const usePostFood = (options?: QueryOptions<Foods[]>) => {
  return useMutationRequest({
    func: () => getFoods(),
    invalidateKeys: ['foods'],
  });
};
