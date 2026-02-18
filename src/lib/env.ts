import { z } from "zod";

const envSchema = z.object({
  NODE_ENV: z
    .enum(["development", "production", "test"])
    .default("development"),
  NEXT_PUBLIC_BASE_URL: z.string().default("http://localhost:3000"),
});

export type Env = z.infer<typeof envSchema>;

export function parseEnv(): Env {
  try {
    return envSchema.parse(process.env);
  } catch (error) {
    if (error instanceof z.ZodError) {
      const errorMessages = error.issues.map(
        (err) => `${err.path.join(".")}: ${err.message}`,
      );
      throw new Error(
        `Environment variable validation failed:\n${errorMessages.join("\n")}`,
      );
    }
    throw error;
  }
}

export const env = parseEnv();

export function getEnv<K extends keyof Env>(key: K): Env[K] {
  return env[key];
}

export { envSchema };
