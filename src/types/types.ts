export interface CreateUserRequestBody {
    username: string;
    name: string;
    surname: string;
    password_hash: string;
    email: string;  
    phone: string 
 }
 export interface CreateArtistRequestBody {
   user_id: number;
   portfolio: string;
   
}
 
 export interface LoginUserRequestBody {
    email: string;
    password_hash: string;
 }
 
 export interface TokenData {
    userId: string;
    userRoles: string[];
    email?: string;
 }

 export interface CreateAppointmentsRequestBody {
   user_id: number,
   artist_id:number,
   date: Date;
   hour: string
 }