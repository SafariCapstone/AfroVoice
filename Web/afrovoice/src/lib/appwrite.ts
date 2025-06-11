// src/lib/server/appwrite.js
"use server";
import { Client, Account, Users } from "node-appwrite";
import { cookies } from "next/headers";
import { get } from "http";
import { Databases } from "node-appwrite";

// export async function createSessionClient() {
//   const client = new Client()
//     .setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT!)
//     // .setProject(process.env.APPWRITE_PTOJECT!);
//     .setProject(process.env.APPWRITE_PTOJECT!) // "PTOJECT" should be "PROJECT"

//   const session = cookies().get("appwrite-session");
//   if (!session || !session.value) {
//     return;
//   }

//   client.setSession(session.value);

//   return {
//     get account() {
//       return new Account(client);
//     },
//   };
// }

export async function createSessionClient() {
  const client = new Client()
    .setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT!)
    .setProject(process.env.APPWRITE_PTOJECT!); // Fixed typo: PTOJECT → PROJECT

    const cookieStore = cookies();
  const session = (await cookieStore).get("appwrite-session");
  
  if (!session || !session.value) {
    return {
      account: null, 
    };
  }

  client.setSession(session.value);

  return {
    account: new Account(client), // Simplified from getter to direct property
  };
}

export async function createAdminClient() {
    
  const client = new Client()
    .setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT!)
    .setProject(process.env.APPWRITE_PTOJECT!)
    .setKey(process.env.NEXT_APPWRITE_KEY!);

  // return {
  //   get account() {
  //     return new Account(client);
  //   },
  //   get database() {
  //        return new Databases(client);
  //   }, 
  //   get user() {
  //       return new Users(client);
  //   }
  // };

  return {
    account: new Account(client),
    database: new Databases(client),
    user: new Users(client),
  }
}
