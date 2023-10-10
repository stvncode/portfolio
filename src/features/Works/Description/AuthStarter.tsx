import { Flex } from '@mantine/core'
import { CustomText } from 'components/Typography'
import { FC } from 'react'
import { WorksCardType } from '../Works.types'
import { authStarterInfos } from './WorksDescription.utils'
import { WorksDescriptionInfos } from './WorksDescriptionInfos'
import { WorksDescriptionLayout } from './WorksDescriptionLayout'
import video from './authStartVideo.mp4'

export const AuthStarter: FC<WorksCardType> = (work) => {
    const { title, img, from, date, link } = work

    return (
        <>
            <WorksDescriptionLayout video={video} title={title} img={img} from={from} date={date} link={link}>
                <CustomText indent>
                    This repository provides a comprehensive starter kit for developers looking to build
                    applications that require user authentication.
                </CustomText>
                <CustomText indent>
                    It's engineered with some of the best technologies in the JavaScript/TypeScript ecosystem,
                    ensuring a smooth development experience and a high-quality application structure.
                </CustomText>
            </WorksDescriptionLayout>
            <Flex mt={35} direction="column" gap={10}>
                <WorksDescriptionInfos infos={authStarterInfos(link)} />
            </Flex>
        </>
    )
}
