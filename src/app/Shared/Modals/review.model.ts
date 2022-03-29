export interface IAuth {
    UserName: string,
    Email: string,
    Phone: number,
    Password: string,
    ConfirmPassword: string,
    Otp: number,
    CreatedOn: string,
    CreatedOn_Local: string,
    Timestamp: string,
    TimeZone: string,
    UTC: string,
    ReferralCode:string
}

export interface IQuotes {
    Quote: string;
    Author: string;
}   