import { Flex } from '@mantine/core'
import { CustomText } from 'components/Typography'
import { FC } from 'react'
import { WorksCardType } from '../Works.types'
import { orangeInfos } from './WorksDescription.utils'
import { WorksDescriptionInfos } from './WorksDescriptionInfos'
import { WorksDescriptionLayout } from './WorksDescriptionLayout'

export const Orange: FC<WorksCardType> = (work) => {
    const { title, img, from, date, link } = work
    return (
        <WorksDescriptionLayout title={title} img={img} from={from} date={date} link={link}>
            <CustomText indent>
                Orange is a French multinational telecommunications company that provides mobile, internet, and fixed-line services to
                customers in France and internationally. The company is headquartered in Paris and has a presence in over 30 countries.
                Orange offers a range of services to businesses, including cloud services, cybersecurity, and infrastructure management.
            </CustomText>
            <CustomText indent>
                I worked for the the Wed project. It's a management tool designed to help project managers handle client infrastructure.
                My goal was to rewrite the existing project in perl to angular.
            </CustomText>
            <Flex mt={25} direction="column" gap={10}>
                <WorksDescriptionInfos infos={orangeInfos(link)} />
            </Flex>
        </WorksDescriptionLayout>
    )
}
