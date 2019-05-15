import Axios from "axios";
import {baseApiUrl} from 'core'

export interface UserEntityApi {
  email: string;
  firstName: string;
  lastName: string;
}

const getUsersUrl = `${baseApiUrl}/users`;


// TODO: Just only managing the "happy path", adding error handling here or upper level 
// would be a good idea
export const getUsersCollection = () : Promise<UserEntityApi[]> => {  
  const promise = new Promise<UserEntityApi[]>((resolve, reject) => 
    Axios.get<UserEntityApi[]>(getUsersUrl).then((response) => resolve(response.data)
  ));

  return promise;
}

