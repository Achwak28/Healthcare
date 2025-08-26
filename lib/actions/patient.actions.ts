"use server"
import { BUCKET_ID, DATABASE_ID, databases, ENDPOINT, PATIENT_COLLECTION_ID, PROJECT_ID, storage, users } from "../appwrite.config";
import { parseStringify } from "../utils";
import { ID, Query } from "node-appwrite";
import { InputFile } from "node-appwrite/file";

export const createUser = async (user: CreateUserParams) => {
  console.log("actions")
  try{
     const newuser = await users.create(
      ID.unique(),
      user.email,
      user.phone,
      undefined,
      user.name
    );
    console.log('User created:', newuser);
    return parseStringify(newuser);

  } catch (error: any) {
    
    if (error && error?.code === 409) {
      const existingUser = await users.list([
        Query.equal("email", [user.email]),
      ]);

      return existingUser.users[0];
    }
     console.log("this error from actionse"+ error);
      throw error;
  }
}

// GET USER
export const getUser = async (userId: string) => {
  try {
    const user = await users.get(userId);

    return parseStringify(user);
  } catch (error) {
    console.error(
      "An error occurred while retrieving the user details:",
      error
    );
  }
}; 

// REGISTER PATIENT
export const registerPatient = async ({
  identificationDocument,
  ...patient
}: RegisterUserParams) => {
  try {
    // Upload file ->  // https://appwrite.io/docs/references/cloud/client-web/storage#createFile
    let file;
    if (identificationDocument) {
      const inputFile =
        identificationDocument &&
        InputFile.fromBuffer(
          identificationDocument?.get("blobFile") as Blob,
          identificationDocument?.get("fileName") as string
        );

      file = await storage.createFile('68a86179002af2e5a206', ID.unique(), inputFile);
    }

    // Create new patient document -> https://appwrite.io/docs/references/cloud/server-nodejs/databases#createDocument
    const newPatient = await databases.createDocument(
      '68a860e8003a60a9e1bd',
      '68a8610f000c30407167',
      ID.unique(),
      {
        identificationDocumentId: file?.$id ? file.$id : null,
        identificationDocumentUrl: file?.$id
          ? `${ENDPOINT}/storage/buckets/${BUCKET_ID}/files/${file.$id}/view??project=${PROJECT_ID}`
          : null,
        ...patient,
      }
    );

    return parseStringify(newPatient);
  } catch (error) {
    console.error("An error occurred while creating a new patient:", error);
  }
};

/*
// GET PATIENT
export const getPatient = async (userId: string) => {
  try {
    const user = await users.get(userId);
console.log(parseStringify(user))
    return parseStringify(user);

  } catch (error) {
    console.error(
      "An error occurred while retrieving the user details:",
      error
    );
  }
}; */


// GET PATIENT
export const getPatient = async (userId: string) => {
  try {
    const patients = await databases.listDocuments(
      DATABASE_ID!,
      PATIENT_COLLECTION_ID!,
      [Query.equal('userId', userId)]
    );
console.log(parseStringify(patients.documents[0]))
    return parseStringify(patients.documents[0]);

  } catch (error) {
    console.error(
      "An error occurred while retrieving the user details:",
      error
    );
  }
};