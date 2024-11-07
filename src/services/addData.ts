import { ProductList } from '@/types';
import { apiRequest } from './api';
import { PRODUCT_URL } from '@/constants';

const addData = async ({ products }: ProductList) => {
  if (!PRODUCT_URL) {
    throw new Error('PRODUCT_URL is not defined');
  }

  const response = await apiRequest(PRODUCT_URL, 'POST', products);
  return response;
};

export { addData };
