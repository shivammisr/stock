import { environment } from "../../../../environments/environment.development";


export const userAPI = {
    authenticateUser() : string {
        return `${environment.apiUrl}/login`
    } ,
    signUpUser() : string {
        return `${environment.apiUrl}/signup`
    },
    getUser(): string {
         return `${environment.userUrl}/me`
    }
}