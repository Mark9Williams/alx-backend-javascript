// 6-profile-signup.js
import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  // Call the two functions and store the promises
  const signUpPromise = signUpUser(firstName, lastName);
  const uploadPromise = uploadPhoto(fileName);

  // Return the result of Promise.allSettled
  return Promise.allSettled([signUpPromise, uploadPromise])
    .then((results) => {
      // Map the results to the required structure
      return results.map((result) => ({
        status: result.status,
        value: result.status === 'fulfilled' ? result.value : result.reason,
      }));
    });
}