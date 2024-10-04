// 100-await.js
import { uploadPhoto, createUser } from './utils'; // Combine the imports

export default async function asyncUploadUser(fileName, firstName, lastName) {
  try {
    // Await the responses from the uploadPhoto and createUser functions
    const photoResponse = await uploadPhoto(fileName);
    const userResponse = await createUser(firstName, lastName);

    // Return the responses in the desired format
    return {
      photo: photoResponse,
      user: userResponse,
    };
  } catch (error) {
    // If either function fails, return an object with null values
    return {
      photo: null,
      user: null,
    };
  }
}
