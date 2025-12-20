import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
    /**
     * Server-side Environment variables schema.
     */
    server: {
        NODE_ENV: z.enum(["development", "test", "production"]).default("development"),
        BETTER_AUTH_SECRET: z.string().min(1),
        BETTER_AUTH_URL: z.string().url(),
        // DATABASE_URL: z.string().url().optional(), // Add later when setting up Drizzle
    },

    /**
     * Client-side Environment variables schema.
     * To expose them to the client, prefix them with `NEXT_PUBLIC_`.
     */
    client: {
        // NEXT_PUBLIC_CLIENTVAR: z.string(),
    },

    /**
     * Destructure all variables from `process.env` here.
     * This is required for Next.js 13+ to ensure variables are not bundled for the client unless prefixed.
     */
    runtimeEnv: {
        NODE_ENV: process.env.NODE_ENV,
        BETTER_AUTH_SECRET: process.env.BETTER_AUTH_SECRET,
        BETTER_AUTH_URL: process.env.BETTER_AUTH_URL,
    },

    /**
     * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation.
     * This is especially useful for Docker builds.
     */
    skipValidation: !!process.env.SKIP_ENV_VALIDATION,

    /**
     * Makes it so that empty strings are treated as undefined. `SOME_VAR: z.string()` and
     * `SOME_VAR=""` will throw an error.
     */
    emptyStringAsUndefined: true,
});
