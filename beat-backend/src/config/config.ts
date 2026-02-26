import fs from "node:fs";
import path from "node:path";
import dotenv from "dotenv";
import { z } from "zod";

const nodeEnv = process.env.NODE_ENV ?? "development";
const envFileByMode: Record<string, string> = {
  development: ".env.development",
  production: ".env.production",
  test: ".env.test",
};

const selectedEnvFile = envFileByMode[nodeEnv] ?? ".env";
const selectedEnvPath = path.resolve(process.cwd(), selectedEnvFile);

if (fs.existsSync(selectedEnvPath)) {
  dotenv.config({ path: selectedEnvPath });
} else {
  dotenv.config();
}

const toNumber = (value: string | undefined, fallback: number): number => {
  if (!value) return fallback;
  const parsed = Number(value);
  return Number.isFinite(parsed) ? parsed : fallback;
};

const toBoolean = (value: string | undefined, fallback: boolean): boolean => {
  if (!value) return fallback;
  return value.toLowerCase() === "true";
};

const rawEnvSchema = z.object({
  NODE_ENV: z.string().default("development"),
  PORT: z.string().optional(),
  JWT_SECRET: z.string().optional(),
  JWT_KEY: z.string().optional(),
  JWT_EXPIRES_IN: z.string().default("1d"),
  DATABASE_URL: z.string().optional(),
  MYSQL_HOST: z.string().optional(),
  MYSQL_PORT: z.string().optional(),
  MYSQL_USER: z.string().optional(),
  MYSQL_PASSWORD: z.string().optional(),
  MYSQL_DATABASE: z.string().optional(),
  SMTP_HOST: z.string().optional(),
  SMTP_PORT: z.string().optional(),
  SMTP_SECURE: z.string().optional(),
  EMAIL_USER: z.string().optional(),
  EMAIL_PASS: z.string().optional(),
  SMTP_FROM: z.string().optional(),
  CONTACT_RECEIVER: z.string().optional(),
});

const parsed = rawEnvSchema.safeParse(process.env);

if (!parsed.success) {
  console.error("Invalid environment variables", parsed.error.format());
  process.exit(1);
}

const raw = parsed.data;

const jwtSecret = raw.JWT_SECRET ?? raw.JWT_KEY;
if (!jwtSecret) {
  console.error("Missing JWT secret. Provide JWT_SECRET or JWT_KEY.");
  process.exit(1);
}

const databaseUrl =
  raw.DATABASE_URL ??
  (raw.MYSQL_HOST && raw.MYSQL_PORT && raw.MYSQL_USER && raw.MYSQL_DATABASE
    ? `mysql://${encodeURIComponent(raw.MYSQL_USER)}:${encodeURIComponent(raw.MYSQL_PASSWORD ?? "")}@${raw.MYSQL_HOST}:${raw.MYSQL_PORT}/${encodeURIComponent(raw.MYSQL_DATABASE)}`
    : undefined);

if (!databaseUrl) {
  console.error(
    "Missing database config. Provide DATABASE_URL or MYSQL_HOST/MYSQL_PORT/MYSQL_USER/MYSQL_DATABASE.",
  );
  process.exit(1);
}

if (!raw.SMTP_HOST || !raw.EMAIL_USER || !raw.EMAIL_PASS) {
  console.error("Missing mail config. Provide SMTP_HOST, EMAIL_USER, and EMAIL_PASS.");
  process.exit(1);
}

const smtpPort = toNumber(raw.SMTP_PORT, 465);

export const config = {
  NODE_ENV: raw.NODE_ENV,
  PORT: toNumber(raw.PORT, 8080),
  JWT_SECRET: jwtSecret,
  JWT_EXPIRES_IN: raw.JWT_EXPIRES_IN,
  DATABASE_URL: databaseUrl,
  SMTP_HOST: raw.SMTP_HOST,
  SMTP_PORT: smtpPort,
  SMTP_SECURE: toBoolean(raw.SMTP_SECURE, smtpPort === 465),
  EMAIL_USER: raw.EMAIL_USER,
  EMAIL_PASS: raw.EMAIL_PASS,
  SMTP_FROM: raw.SMTP_FROM ?? raw.EMAIL_USER,
  CONTACT_RECEIVER: raw.CONTACT_RECEIVER ?? raw.EMAIL_USER,
} as const;
