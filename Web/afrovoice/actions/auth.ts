'use server';

import { Account, ID } from "node-appwrite";
import { createAdminClient, createSessionClient } from "@/src/lib/appwrite";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { ID as appwriteID, Query } from "node-appwrite";


export const getUsersDetails = async (userId: string) => {
    try {
        const {database} = await createAdminClient();
        const user = await database.listDocuments(
            process.env.DATABASE_ID!,
            process.env.USER_COLLECTION_ID!,
            [Query.equal("userid", [userId])]
        );

        return JSON.parse(JSON.stringify(user.documents[0]));
    } catch (error) {
        console.log(error);
    }
} 

export const getLoggedInUser = async () => {
    try {
      console.log("[DEBUG] Using Project ID:", process.env.APPWRITE_PROJECT);
        const { account } = await createSessionClient();
        
        if (!account) {
          console.log("No active session found");
            return null; 
        }

        const result = await account.get();
        return result;

    } catch (error) {
        console.error("Error in getLoggedInUser:", error);
        return null;
    }
};

export async function signUp(formData: FormData) {

    const username = formData.get("username") as string;
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

     try {
    const { account, database } = await createAdminClient();
    
    // Creating account
    const newUserAccount = await account.create(
      ID.unique(),
      email,
      password,
      username
    );
    console.log("Auth User Created:", newUserAccount.$id);

    // Creating user in Database Document
    const newUser = await database.createDocument(
      process.env.DATABASE_ID!,
      process.env.USER_COLLECTION_ID!,
      ID.unique(),
      {
        userid: newUserAccount.$id,
        email: email,
        username: username,
      }
    ).catch(err => {
      console.error("Database Error:", err); 
      throw err;
    });

    console.log("Database Document Created:", newUser.$id);
    
    const session = await account.createEmailPasswordSession(email, password);

    (await cookies()).set("appwrite-session",  session.secret, {
      path: "/",
      httpOnly: true,
      sameSite: "strict",
      secure: process.env.NODE_ENV === "production",
    });

    return {success: true}

  } catch (err: any) {
    console.error("Error from auth:", err);
    return { err: err.message };
  }


}

export async function signIn(formData: FormData) {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  try {
    const { account } = await createAdminClient();
    const session = await account.createEmailPasswordSession(email, password);

    (await cookies()).set("appwrite-session", session.secret, {
      path: "/",
      httpOnly: true,
      sameSite: "strict",
      secure: process.env.NODE_ENV === "production",
    });

    return { success: true };
  } catch (error: any) {
    return {error: error.message}
  }

}

export async function signOut(): Promise<void>  {
    try {
    const { account } = await createSessionClient();
    if (account) {
      await account.deleteSession("current");
    }
    (await cookies()).delete("appwrite-session");
    redirect("/login");
  } catch (error) {
    console.error("Logout failed:", error);
    redirect("/login");
  }

}

