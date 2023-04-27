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
                Through its platform, Libertrip allows users to create their own travel itineraries, which are tailored to their preferences and interests. The platform offers a range of features, including destination inspiration, travel planning tools, and booking options for accommodation, transportation, and activities.
            </CustomText>
            <CustomText indent>
                One of the unique features of Libertrip is its focus on sustainable and responsible tourism. The platform encourages travelers to make eco-friendly choices when planning their trips, and offers information and resources to help users make informed decisions.
            </CustomText>
            <CustomText indent>
                Libertrip's mission is to provide travelers with a more personalized and sustainable approach to travel, while also supporting local communities and promoting responsible tourism practices.
            </CustomText>
            <Flex mt={25} direction="column" gap={10}>
                <WorksDescriptionInfos infos={libertripInfos(link)} />
            </Flex>
        </WorksDescriptionLayout>
    )
}
