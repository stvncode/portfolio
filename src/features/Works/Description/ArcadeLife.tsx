import { Flex } from '@mantine/core'
import { CustomText } from 'components/Typography'
import { FC } from 'react'
import { WorksCardType } from '../Works.types'
import { arcardeLifeInfos } from './WorksDescription.utils'
import { WorksDescriptionInfos } from './WorksDescriptionInfos'
import { WorksDescriptionLayout } from './WorksDescriptionLayout'

export const ArcadeLife: FC<WorksCardType> = (work) => {
    const { title, img, from, date, link } = work

    return (
        <>
            <WorksDescriptionLayout title={title} img={img} from={from} date={date} link={link}>
                <CustomText indent>
                    Arcade life is an idea I had early 2023. Since one of my main passion is video games, I wanted to create a platform
                    where people could chat about new/old games and strategies, create teams, have game rewards, share clips, news feed and so on. They
                    could also connect to different platforms (steam, epic games, etc) to show their skills and compare them with others.
                </CustomText>
                <CustomText indent>
                    Before coding, I did everything I needed to do to make this project the next reference in gaming : market research,
                    technologies comparisons, mockups, etc.
                </CustomText>
            </WorksDescriptionLayout>
            <Flex mt={35} direction="column" gap={10}>
                <WorksDescriptionInfos infos={arcardeLifeInfos(link)} />
            </Flex>
        </>
    )
}
