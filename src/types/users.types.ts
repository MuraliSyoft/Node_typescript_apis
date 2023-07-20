export interface User {
  firstName: string;
  lastName: string;
  email: string;
  passwordHash: string;
}

export interface LoginData {
  [x: string]: any;
  email: string;
  passwordHash: string;
}

export interface Products {
  productName: string;
  productDescription: string;
  productPrice: string;
  productImageUrl: string;
}
