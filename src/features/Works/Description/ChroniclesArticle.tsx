import { Flex, Text } from '@mantine/core'
import { CustomText } from 'components/Typography'
import { FC } from 'react'
import { useNavigate } from 'react-router-dom'
import { WorksCardType } from '../Works.types'
import { chroniclesArticleInfos } from './WorksDescription.utils'
import { WorksDescriptionInfos } from './WorksDescriptionInfos'
import { WorksDescriptionLayout } from './WorksDescriptionLayout'

export const ChroniclesArticle: FC<WorksCardType> = (work) => {
    const { title, img, from, date, link } = work

    const navigate = useNavigate()

    return (
        <>
            <WorksDescriptionLayout title={title} img={img} from={from} date={date} link={link}>
                <CustomText indent>
                    When i created <Text span component='a' color='violet.9' onClick={() => navigate('/works/chronicles')}
                        style={{ cursor: 'pointer' }}>Chronicles</Text>,
                    I also had in my mind that I wanted to share what I did because they are no article related to tRPC, prisma, kafka, mantine,
                    in another term, the stack that i used.
                </CustomText>
                <CustomText indent>
                    I always wanted to create articles to share what I found, what I'm trying to achieve in my projects and I started
                    doing this for Chronicles. This is the first one of a long serie for sure !
                </CustomText>
            </WorksDescriptionLayout>
            <Flex mt={35} direction="column" gap={10}>
                <WorksDescriptionInfos infos={chroniclesArticleInfos(link)} />
            </Flex>
        </>
    )
}
