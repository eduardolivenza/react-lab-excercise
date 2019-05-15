import {UserEntityApi} from './user-collection.api';
import {UserEntityVm} from './user-collection.vm';
import {basePicturesUrl} from 'core';

export const mapFromApiToVm = (apiEntity : UserEntityApi) : UserEntityVm => ({
  email : apiEntity.email,
  picture : `${basePicturesUrl}`,
  firstName : apiEntity.firstName,
  lastName : apiEntity.lastName,
});

 // picture : `${basePicturesUrl}${apiEntity.thumbNailUrl}`,


