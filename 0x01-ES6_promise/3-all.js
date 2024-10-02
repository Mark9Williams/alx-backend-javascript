// Importing the functions from utils.js
import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  // Use Promise.all to wait for all promises (uploadPhoto and createUser) to resolve
  return Promise.all([uploadPhoto(), createUser()])
    .then((results) => {
      const [photoResponse, userResponse] = results;
      console.log(`${photoResponse.body} ${userResponse.firstName} ${userResponse.lastName}`);
    })
    .catch(() => {
      console.log('Signup system offline');
    });
}