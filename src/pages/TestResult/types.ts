export type TestResultDataType = {
  testResultId: string;
  testResultName: string;
  testResultType: string;
  testResultDescript: string;
  testResultImg: string;
  bodyLevel: number;
  tanninLevel: number;
  sweetLevel: number;
};

export interface ProductDataType {
  productId: number;
  productName: string;
  productImg: string;
  productSummary: string;
  productDescription: string;
  originPrice: number;
  memberPrice: number;
  wineType: string;
  category: string;
  productionPlace: string;
  testResultId: string;
  reviewCnt: string;
  starPoint: string;
  bodyLevel: number;
  tanninLevel: number;
  sweetLevel: number;
}
