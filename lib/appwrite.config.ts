

import * as sdk from "node-appwrite";


export const {
   PROJECT_ID,
  API_KEY,
  DATABASE_ID,
  PATIENT_COLLECTION_ID,
  DOCTOR_COLLECTION_ID,
  APPOINTMENT_COLLECTION_ID,
  NEXT_PUBLIC_ENDPOINT: ENDPOINT, 
  NEXT_PUBLIC_BUCKET_ID: BUCKET_ID,
} = process.env;


const client = new sdk.Client();

client.setEndpoint('https://fra.cloud.appwrite.io/v1')
.setProject('68a86038003b471ee689')
.setKey('standard_dfab587183fcd2a524efa37d3d7294efd7b22cf2a2714a16d8ec576f883b2db32d4c710a219930cf09fff29e75bf1f53fac5b6a55333036d116210c8a5030cbb20ed8c34ffda49ab2bce8a8113f27c500bcdd209159525e23d38a41999e7cedd9ec38a111ccf2d06997db2ed779fd92a7d293a0738fa315763047366292f0fca');

export const databases = new sdk.Databases(client);
export const storage = new sdk.Storage(client);
export const messaging = new sdk.Messaging(client);
export const users = new sdk.Users(client);




/*
const {
  NEXT_PUBLIC_ENDPOINT: ENDPOINT,
  NEXT_PUBLIC_PROJECT_ID: PROJECT_ID,
  NEXT_PUBLIC_API_KEY: API_KEY,
  DATABASE_ID,
  PATIENT_COLLECTION_ID,
  DOCTOR_COLLECTION_DB,
  APPOINTMENT_COLLECTION_DB,
  NEXT_PUBLIC_BUCKET_ID: BUCKET_ID,
} = process.env;

export const {
  NEXT_PUBLIC_ENDPOINT: ENDPOINT,
  PROJECT_ID,
  API_KEY,
  DATABASE_ID,
  PATIENT_COLLECTION_ID,
  DOCTOR_COLLECTION_ID,
  APPOINTMENT_COLLECTION_ID,
  NEXT_PUBLIC_BUCKET_ID: BUCKET_ID,
} = process.env;
*/
/*
//NEXT_PUBLIC_PROJECT_ID=67181cdc001de9293380
NEXT_PUBLIC_API_KEY=standard_f1ab7c6e78af8f2d0e14b7eea829a827dff81ebf861ef2460473a464d19be580f910b3457c26e2aadaff4857aa49ae62ffe9ea70cd3fb6a6d94ecc1031b48b42763d45985063d15fa911f254f2df1a1dbeb600e92bd905649d1c41b716dbc44ffa903a477b8c7482279387ee0d1f753c4e54dfe19796fd456858bc3b41b894ab

*/