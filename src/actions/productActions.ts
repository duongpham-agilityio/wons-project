'use server';
import {
  EMPTY_TEXT,
  MESSAGE,
  OVERVIEW_URL,
  PRODUCT_URL,
  ROUTERS,
} from '@/constants';
import { apiRequest, APIs } from '@/services';
import { IProducts, OverviewDataItem } from '@/types';

const getDataProducts = async (
  search = EMPTY_TEXT,
): Promise<IProducts[] | null> => {
  try {
    if (!PRODUCT_URL) {
      throw new Error(MESSAGE.ERROR_URL);
    }

    const url = search.trim()
      ? `?search=${encodeURIComponent(search)}`
      : ROUTERS.EMPTY;

    return await APIs.get(url);
  } catch (error) {
    console.error(MESSAGE.ERROR_GET_DATA_PRODUCT, error);
    return null;
  }
};

const getDataOverview = async () => {
  const revalidate = 60;
  try {
    if (!OVERVIEW_URL) {
      throw new Error(MESSAGE.ERROR_URL);
    }
    const res = await apiRequest<OverviewDataItem[]>(
      OVERVIEW_URL,
      'GET',
      undefined,
      revalidate,
    );
    return res;
  } catch (error) {
    console.error(MESSAGE.ERROR_GET_DATA_OVERVIEW, error);
    return [];
  }
};

const handleAddProduct = async (products: IProducts) => {
  try {
    console.log({ products });

    const a = await APIs.post(ROUTERS.EMPTY, products);

    console.log({
      a,
    });

    return products;
  } catch (error) {
    console.error(MESSAGE.ERROR_ADD_DATA, error);
  }
};

const handleEditProduct = async (id: string, products: IProducts) => {
  try {
    await APIs.put(`/${id}`, products);
  } catch (error) {
    console.error(MESSAGE.ERROR_EDIT_DATA, error);
  }
};

const handleDeleteProduct = async (id: string) => {
  try {
    const res = await APIs.delete(`/${id}`);
    return res;
  } catch (error) {
    console.error(MESSAGE.ERROR_DELETE_DATA, error);
  }
};

export {
  getDataProducts,
  getDataOverview,
  handleAddProduct,
  handleEditProduct,
  handleDeleteProduct,
};
