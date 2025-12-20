"use server";

import { auth } from "@/lib/auth";
import { headers } from "next/headers";

/**
 * Server Action to get the current session and user
 * This can be called from both Server Components and Client Components
 */
export async function getSession() {
    return await auth.api.getSession({
        headers: await headers()
    });
}

/**
 * Server Action to get only the current user
 */
export async function getUser() {
    const session = await getSession();
    return session?.user || null;
}

/**
 * Server Action to sign out
 */
export async function signOut() {
    return await auth.api.signOut({
        headers: await headers()
    });
}

/**
 * Helper to ensure the user is authenticated in a server action
 */
export async function requireUser() {
    const user = await getUser();
    if (!user) {
        throw new Error("Unauthorized");
    }
    return user;
}
