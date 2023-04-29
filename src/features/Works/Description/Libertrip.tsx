import { Flex } from '@mantine/core'
import { CustomText } from 'components/Typography'
import { FC } from 'react'
import { WorksCardType } from '../Works.types'
import { libertripInfos } from './WorksDescription.utils'
import { WorksDescriptionInfos } from './WorksDescriptionInfos'
import { WorksDescriptionLayout } from './WorksDescriptionLayout'

export const Libertrip: FC<WorksCardType> = (work) => {
    const { title, img, from, date, link } = work

    return (
        <WorksDescriptionLayout title={title} img={img} from={from} date={date} link={link}>
            <CustomText indent>
                Libertrip is a French company that offers a digital platform for planning and booking personalized travel experiences.
            </CustomText>
            <CustomText indent>
                Through its platform, Libertrip allows users to create their own travel itineraries, which are tailored to their preferences and
                interests. The platform offers a range of features, including destination inspiration, travel planning tools, and booking options
                for accommodation, transportation, and activities.
            </CustomText>
            <CustomText indent>
                Libertrip's mission is to provide travelers with a more personalized and sustainable approach to travel, while also supporting
                local communities and promoting responsible tourism practices.
            </CustomText>
            <CustomText indent>
                When I arrived in the company, the project was working well and my role was to add features such as all inclusive trips, refacto of
                vue js code to react and adding kafka to it. Unfortunately, with the covid, the company had to close due to lack of revenues.
            </CustomText>
            <Flex mt={25} direction="column" gap={10}>
                <WorksDescriptionInfos infos={libertripInfos(link)} />
            </Flex>
        </WorksDescriptionLayout>
    )
}
