import { QueryOptions } from '@tanstack/react-query';
import axios from 'axios';

import { useQueryRequest } from '@/hooks/useQueryRequest';

import { axiosClient } from '../config/axios.config';
import { Foods } from './foodsType';

export const getFoods = async (): Promise<Foods> => {
  const response = await axiosClient.get('/foods');

  console.log(response);
  return response.data;
};

export const useGetFoods = (options?: QueryOptions<Foods>) => {
  return useQueryRequest({
    func: () => getFoods(),
    key: ['foods'],
    options,
  });
};
