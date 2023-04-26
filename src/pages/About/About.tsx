import { Avatar, Flex, Text } from '@mantine/core'
import { FC } from 'react'
import { useAboutStyles } from './About.styles'
import { profile } from 'assets'

export const About: FC = () => {
    const { classes } = useAboutStyles()
  return (
    <Flex direction="column" gap={40}>
        <Flex justify="space-between" align="center">
            <Flex direction="column">
                <Text size={35} weight="bold">Steven Travers</Text>
                <Text size={16}>Fullstack developer ( Developer / Design / Content creator )</Text>
            </Flex>
              <Avatar src={profile} size={100} alt="it's me" radius="50%" />
        </Flex>
        <Flex direction="column" gap={20}>
            <Text underline size="xl">About Me</Text>
            <Text size="lg">
                Welcome to my portfolio! As a fullstack developer, I am passionate about creating innovative and dynamic solutions. I strive to create visually stunning and intuitive interfaces that enhance the user experience.

                In addition to my technical skills, I also enjoy creating content and share it for free. Whether it's writing articles, producing videos, or sharing insights from my experiences, I believe in the power of communication to bring people together and drive positive change.

                So take a look around and see what I've been working on. I hope you'll find something that sparks your interest. And if you have any questions or feedback, please don't hesitate to reach out.
            </Text>
        </Flex>
    </Flex>
  )
}
