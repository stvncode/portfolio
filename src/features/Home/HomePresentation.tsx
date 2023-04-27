import { Avatar, Flex } from '@mantine/core'
import { profile } from 'assets'
import { CustomText, HomeTitle } from 'components/Typography'
import { FC } from 'react'

export const HomePresentation: FC = () =>
    <>
        <Flex justify="space-between" align="center">
            <Flex direction="column">
                <CustomText size={35} weight="bold">Steven Travers</CustomText>
                <CustomText size={16}>Fullstack developer ( Developer / Design / Content creator )</CustomText>
            </Flex>
            <Avatar src={profile} size={100} alt="it's me" radius="50%" />
        </Flex>
        <Flex direction="column" gap={20}>
            <HomeTitle title="About Me" />
            <CustomText indent>
                Welcome to my portfolio! As a fullstack developer, I am passionate about creating innovative and dynamic solutions.
                I strive to create visually stunning and intuitive interfaces that enhance the user experience.
                In addition to my technical skills, I also enjoy creating content and share it for free. Whether it's writing articles,
                producing videos, or sharing insights from my experiences, I believe in the power of communication to bring people together and drive positive change.
                So take a look around and see what I've been working on. I hope you'll find something that sparks your interest.
                And if you have any questions or feedback, please don't hesitate to reach out.
            </CustomText>
        </Flex>
    </>