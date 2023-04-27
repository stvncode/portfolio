import { Flex } from '@mantine/core'
import { CustomText, HomeTitle } from 'components/Typography'
import { FC } from 'react'

export const HomeHobbies: FC = () =>
    <Flex direction="column" gap={20}>
        <HomeTitle title="Hobbies" />
        <CustomText indent>Coding, Video games, Guitar, Piano, Skateboard, Music, Traveling, Sports</CustomText>
    </Flex>