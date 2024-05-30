import axios, { AxiosError, AxiosResponse } from "axios";


enum DataRequest {
    URL = 'https://dummyjson.com/users',    
}

type Role = 'user' | 'admin' | 'moderator';
type Gender = 'male' | 'female';

interface Bank {    
    cardExpire: string,
    cardNumber: string,
    cardType: string,
    currency: string,
    iban: string     
}

interface Adress {    
    address: string,
    city: string,
    state: string,
    stateCode: string,
    postalCode: string,  
    coordinates: {
        lat: number,
        lng: number
    },      
    country: string      
}

interface Company {
    department: string,
    name: string,
    title: string,
    address: Adress
  }

interface Hair { 
    color: string,
    type: string 
}

interface Crypto {
    coin: string,
    wallet: string,
    network: string
}

interface ResponseData {
    id: number,
    firstName: string,
    lastName: string,
    maidenName: string,
    age: number,
    gender: Gender,
    email: string,
    phone: string,
    username: string,
    password: string,
    birthDate: string,
    image: string,
    bloodGroup: string,
    height: number,
    weight: number,
    eyeColor: string,
    hair: Hair,
    ip: string,
    address: Adress,
    macAddress: string,
    university: string,
    bank: Bank,
    company: Company,
    ein: string,
    ssn: string,
    userAgent: string,
    crypto: Crypto,
    role: Role
}

interface ErrorResponseMessage {
    status: number,
    statusText: string,
}


async function getUserData(url: DataRequest.URL) {
    try{
        const reuqest = await axios.get(url);
        const response: ResponseData[] = reuqest.data.users;
        console.log(response);
        return response        
    } catch(error: unknown){         
        if(axios.isAxiosError(error)){
            if(error.response){
                const errorMessage: ErrorResponseMessage = {
                    status: error.response.status,
                    statusText: error.response.statusText,
                }
            console.log(errorMessage);               
                
            }else if(error.request){
                console.log(error.request);            
            }            
        } else {
            console.log(error);            
        }
    }    
}

getUserData(DataRequest.URL);


