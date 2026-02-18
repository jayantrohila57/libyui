import { z } from "zod";
import "server-only";

const envServerSchema = z.object({
  GITHUB_APP_ID: z.string(),
  GITHUB_APP_PRIVATE_KEY: z.string(),
});

export type Env = z.infer<typeof envServerSchema>;

export function parseEnv(): Env {
  try {
    return envServerSchema.parse(process.env);
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

export const envServer = parseEnv();

export function getEnvServer<K extends keyof Env>(key: K): Env[K] {
  return envServer[key];
}

export { envServerSchema };
