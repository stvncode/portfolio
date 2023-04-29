import { Box, Button, Flex, Group, TextInput, Textarea } from '@mantine/core'
import { useForm, zodResolver } from '@mantine/form'
import sgMail from "@sendgrid/mail"
import { Section } from 'components/Section'
import { FC } from 'react'
import { ContactFormValues, contactSchema } from './Contact.schema'
import { useContactStyles } from './Contact.styles'

sgMail.setApiKey("YOUR_SENDGRID_API_KEY")

export const Contact: FC = () => {
  const form = useForm({
    initialValues: {
      name: '',
      email: '',
      message: '',
    },
    validate: zodResolver(contactSchema)
  })

  const onSubmit = (values: ContactFormValues) => {

    const msg = {
      to: "stvncodechannel@gmail.com",
      from: values.email,
      subject: `${values.name} contact portfolio`,
      text: values.message,
      html: values.message,
    }

    sgMail
      .send(msg)
      .then(() => console.log("Email sent successfully"))
      .catch((error) => console.error(error))
  }

  const { classes } = useContactStyles()

  return (
    <Section>
      <Flex direction="column" align="center">
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
              <Button type="submit" color="violet" variant="filled">
                Submit
              </Button>
            </Group>
          </form>
        </Box>
      </Flex>
    </Section>
  )
}
