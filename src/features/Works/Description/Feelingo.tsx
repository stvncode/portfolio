import { Flex } from '@mantine/core'
import { CustomText } from 'components/Typography'
import { FC } from 'react'
import { WorksCardType } from '../Works.types'
import { feelingoInfos } from './WorksDescription.utils'
import { WorksDescriptionInfos } from './WorksDescriptionInfos'
import { WorksDescriptionLayout } from './WorksDescriptionLayout'

export const Feelingo: FC<WorksCardType> = (work) => {
    const { title, img, from, date, link } = work

    return (
        <>
            <WorksDescriptionLayout title={title} img={img} from={from} date={date} link={link}>
                <CustomText indent>
                    Feelingo is a French company that offers an eco-friendly hotel booking platform.
                    The company aims to promote sustainable tourism by offering a selection of environmentally responsible hotels to customers.
                    Feelingo partners with hotels that have implemented eco-friendly practices such as reducing energy consumption, waste reduction,
                    and the use of eco-friendly products.
                </CustomText>
                <CustomText indent>
                    The company was founded in 2019 and is based in Lille, France. As of September 2021, the company had raised €1.4 million
                    in seed funding to expand its platform and operations.
                </CustomText>
                <CustomText indent>
                    My role in this company was to add features to the existing application + help the founder to make decision in a technical way.
                </CustomText>
            </WorksDescriptionLayout>
            <Flex mt={35} direction="column" gap={10}>
                <WorksDescriptionInfos infos={feelingoInfos(link)} />
            </Flex>
        </>
    )
}
