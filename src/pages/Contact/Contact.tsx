import { Box, Button, Flex, Group, TextInput, Textarea } from '@mantine/core'
import { useForm } from '@mantine/form'
import { Section } from 'components/Section'
import { FC } from 'react'

interface FormValues {
  name: string
  email: string
  message: string
}

export const Contact: FC = () => {

  const form = useForm({
    initialValues: {
      name: '',
      email: '',
      message: '',
    },
    validate: {
      name: (value) => value.trim().length > 0 || 'Name is required',
      email: (value) => /\S+@\S+\.\S+/.test(value) || 'Email is invalid',
      message: (value) => value.trim().length > 0 || 'Message is required',
    },
  })

  const onSubmit = (values: FormValues) => { console.log(values) }

  return (
    <Section>
      <Flex direction="column" align="center">
        <Box maw={320} mx="auto">
          <form onSubmit={form.onSubmit(onSubmit)} style={{ width: '400px', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            <TextInput
              label="Name"
              withAsterisk
              {...form.getInputProps('name')}
              required
            />
            <TextInput
              label="Email"
              withAsterisk
              {...form.getInputProps('email')}
              required
            />
            <Textarea
              label="Message"
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
