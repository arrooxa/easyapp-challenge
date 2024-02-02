import dotenv from "dotenv";
import Joi from "joi";

export const dotenvConfig = dotenv.config({ path: `${process.cwd()}/config.env` });

export function validateEnvironmentVariables() {
  const envVarsSchema = Joi.object()
    .keys({
      DB_URI: Joi.string().required().description("Database URI to Connection"),
    })
    .unknown();

  const { error } = envVarsSchema.prefs({ errors: { label: "key" } }).validate(process.env);

  if (error) throw new Error(`Config validation error: The environment variable ${error.message}`);
}
