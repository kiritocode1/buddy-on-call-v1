import { betterAuth } from "better-auth";
import { nextCookies } from "better-auth/next-js";
import { env } from "@/env";

export const auth = betterAuth({
    secret: env.BETTER_AUTH_SECRET,
    baseURL: env.BETTER_AUTH_URL,
    // You can add your database adapter here later
    // emailAndPassword: {
    //     enabled: true
    // },
    plugins: [nextCookies()]
});
