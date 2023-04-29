import * as z from 'zod'

const envSchema = z.object({
  VITE_EMAIL_SERVICE_ID: z.string(),
  VITE_EMAIL_TEMPLATE_ID: z.string(),
  VITE_EMAIL_PUBLIC_KEY: z.string(),
})

type Env = z.infer<typeof envSchema>

const env: Env = {
  VITE_EMAIL_SERVICE_ID: import.meta.env.VITE_EMAIL_SERVICE_ID!,
  VITE_EMAIL_TEMPLATE_ID: import.meta.env.VITE_EMAIL_TEMPLATE_ID!,
  VITE_EMAIL_PUBLIC_KEY: import.meta.env.VITE_EMAIL_PUBLIC_KEY!,
}

envSchema.parse(env)

export default env
