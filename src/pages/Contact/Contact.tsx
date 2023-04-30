import emailjs from '@emailjs/browser'
import { Box, Button, Flex, Group, TextInput, Textarea } from '@mantine/core'
import { useForm, zodResolver } from '@mantine/form'
import { notifications } from '@mantine/notifications'
import { Section } from 'components/Section'
import { CustomText } from 'components/Typography'
import env from 'core/env'
import { FC, useState } from 'react'
import { ContactFormValues, contactSchema } from './Contact.schema'
import { useContactStyles } from './Contact.styles'

export const Contact: FC = () => {
  const form = useForm({
    initialValues: {
      name: '',
      email: '',
      message: '',
    },
    validate: zodResolver(contactSchema)
  })

  const [loading, setLoading] = useState(false)

  const onSubmit = async (values: ContactFormValues) => {

    const msg = {
      email: values.email,
      from_name: values.name,
      message: values.message,
    }

    try {
      setLoading(true)
      await emailjs.send(env.VITE_EMAIL_SERVICE_ID, env.VITE_EMAIL_TEMPLATE_ID, msg, env.VITE_EMAIL_PUBLIC_KEY)
      notifications.show({
        variant: 'success',
        title: 'Success!',
        message: 'Your message has been sent.',
      })
      setLoading(false)
    } catch {
      notifications.show({
        variant: 'error',
        title: 'Error!',
        message: 'Something went wrong.',
      })
    }
  }

  const { classes } = useContactStyles()

  return (
    <Section>
      <Flex direction="column" gap={10} align="center">
        <CustomText>
          <h2>Let's have a talk!</h2>
        </CustomText>
        <Box maw={520} mx="auto">
          <form onSubmit={form.onSubmit(onSubmit)} className={classes.form}>
            <TextInput
              label="Name"
              className={classes.input}
              withAsterisk
              {...form.getInputProps('name')}
              required

            />
            <TextInput
              label="Email"
              className={classes.input}
              withAsterisk
              {...form.getInputProps('email')}
              required
            />
            <Textarea
              label="Message"
              className={classes.input}
              withAsterisk
              {...form.getInputProps('message')}
              required
            />
            <Group position="center" mt="xl">
              <Button loading={loading} type="submit" color="violet" variant="filled">
                Submit
              </Button>
            </Group>
          </form>
        </Box>
      </Flex>
    </Section>
  )
}
