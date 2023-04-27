import { Flex } from '@mantine/core'
import { CustomText } from 'components/Typography'
import { FC } from 'react'
import { WorksCardType } from '../Works.types'
import { conduktorInfos } from './WorksDescription.utils'
import { WorksDescriptionInfos } from './WorksDescriptionInfos'
import { WorksDescriptionLayout } from './WorksDescriptionLayout'



export const Conduktor: FC<WorksCardType> = (work) => {
    const { title, img, from, date, link } = work

    return (
        <WorksDescriptionLayout title={title} img={img} from={from} date={date} link={link}>
            <CustomText indent>
                Conduktor is a software company that specializes in creating tools for Apache Kafka,
                an open-source streaming platform used for building real-time data pipelines and streaming applications.
            </CustomText>
            <CustomText indent>
                Conduktor provides a user-friendly desktop application that allows developers and data engineers to easily
                monitor, manage, and interact with Kafka clusters. Some of the features of the Conduktor application include
                real-time cluster monitoring, testing, rbac and so on.
            </CustomText>
            <CustomText indent>
                The application is designed to simplify the complexity of working with Kafka and make it easier for developers
                to build and deploy Kafka-based applications. Conduktor's mission is to help developers and data engineers
                unleash the full potential of Kafka by providing them with powerful tools that are easy to use and understand.
            </CustomText>
            <Flex mt={25} direction="column" gap={10}>
                <WorksDescriptionInfos infos={conduktorInfos(link)} />
            </Flex>
        </WorksDescriptionLayout>
    )
}
