const baseURL = 'https://fakestoreapi.com/products';
import axios from 'axios';

export const getProducts = async () => {
  let Products = [];
  try {
    const response = await axios.get(baseURL);
    Products = response.data;
  } catch (error) {
    console.log(error);
  }
  return {
    type: 'PRODUCTS_LIST',
    payload: Products,
  };
};

export const getProductDetails = async id => {
  let product = {};
  try {
    const response = await axios.get(`${baseURL}/${id}`);
    product = response.data;
  } catch (error) {
    console.log(error);
  }
  return {
    type: 'PRODUCTS_DETAILS',
    payload: product,
  };
};

export const clearDetails = () => {
  return {
    type: 'CLEAR_DETAILS',
  };
};
