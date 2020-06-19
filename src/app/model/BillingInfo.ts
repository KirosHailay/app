export class BillingInfo {
    _id: string;
    billingAddress : {
        country: string;
        state: string;
        city: string;
        zipAddress: string;
    }
    cardInfo : {
        cardHolderName: string;
        exparationDate: Date;
        cardType: string;
        cardCode: string;
    }
  
}