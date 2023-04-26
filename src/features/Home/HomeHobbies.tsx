import { Flex, Text } from '@mantine/core'
import { HomeTitle } from 'components/Typography'
import { FC } from 'react'

export const HomeHobbies: FC = () =>
    <Flex direction="column" gap={20}>
        <HomeTitle title="Hobbies" />
        <Text>Coding, Video games, Guitar, Piano, Skateboard, Music, Sharing ...</Text>
    </Flex>