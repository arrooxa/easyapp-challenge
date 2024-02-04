import dotenv from "dotenv";
import Joi from "joi";

export const dotenvConfig = dotenv.config({ path: `${process.cwd()}/config.env` });

export function validateEnvironmentVariables() {
  const envVarsSchema = Joi.object()
    .keys({
      DB_USER: Joi.string().required().description("Database User to Connection"),
      DB_PASSWORD: Joi.string().required().description("Database Password to Connection"),
      JWT_SECRET: Joi.string().required().description("Secret to JWT Tokens"),
    })
    .unknown();

  const { error } = envVarsSchema.prefs({ errors: { label: "key" } }).validate(process.env);

  if (error) throw new Error(`Config validation error: The environment variable ${error.message}`);
}
