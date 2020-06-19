export class Order{
    _id:string;
    sellerId: string;
    buyerId : string;
    products : object[];
    orderStatus : string;
    paymentFromCard: Number;
    cuponPayment: Number;
    overAllPayment: Number;
    orderPlacedDate: Date;
    shippedDate: Date;
    cancelDate: Date;
   DeliveredDate: Date;
}