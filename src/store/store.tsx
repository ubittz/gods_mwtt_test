import { create } from 'zustand';

import productDataJson from '../assets/data/productDataList.json';
import testResultDataJson from '../assets/data/testResultDataList.json';

export const useStore = create(() => ({
  productData: productDataJson,
  testResultData: testResultDataJson,
}));

export default useStore;
