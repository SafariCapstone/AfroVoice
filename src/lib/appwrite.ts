// src/lib/server/appwrite.js
"use server";
import { Client, Account, Users } from "node-appwrite";
import { cookies } from "next/headers";
import { get } from "http";
import { Databases } from "node-appwrite";

export async function createSessionClient() {
  const client = new Client()
    .setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT!)
    .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT!);

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
    .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT!)
    .setKey(process.env.NEXT_APPWRITE_KEY!);

  return {
    account: new Account(client),
    database: new Databases(client),
    user: new Users(client),
  }
}
