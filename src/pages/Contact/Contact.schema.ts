import { z } from 'zod'

export const contactSchema = z.object({
  name: z.string().nonempty('Name is required'),
  email: z.string().email({ message: 'Invalid email' }),
  message: z.string().nonempty('Message is required'),
})

export type ContactFormValues = z.infer<typeof contactSchema>
