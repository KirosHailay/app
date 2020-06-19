import { Address } from './Address';
import { BillingInfo } from './BillingInfo';

export class User {
  _id: string;
  userName: string;
  firstName: string;
  lastName: string;
  birthdate: string;
  email: any;
  role: string;
  token?: string;
  password: string;
  shippingAddress: any[];
  billingInfo: any[];
}