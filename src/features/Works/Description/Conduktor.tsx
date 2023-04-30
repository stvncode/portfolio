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
        <>
            <WorksDescriptionLayout title={title} img={img} from={from} date={date} link={link}>
                <CustomText indent>
                    Conduktor is a software company that specializes in creating tools for Apache Kafka,
                    an open-source streaming platform used for building real-time data pipelines and streaming applications.
                </CustomText>
                <CustomText indent>
                    The platform provides a user-friendly desktop application that allows developers and data engineers to easily
                    monitor, manage, and interact with Kafka clusters. Some of the features of the Conduktor application include
                    real-time cluster monitoring, testing, rbac and so on.
                </CustomText>
                <CustomText indent>
                    I had the privilege of being the first frontend developer at Conduktor, where I contributed to the development of the company's frontend
                    infrastructure (design system, monorepo, etc).
                    I worked diligently to build intuitive user interfaces and improve the user experience across all applications in our product suite.
                    While I played a role in the company's success, I am grateful for the opportunity to have worked alongside a talented team of individuals.
                </CustomText>
            </WorksDescriptionLayout>
            <Flex mt={35} direction="column" gap={10}>
                <WorksDescriptionInfos infos={conduktorInfos(link)} />
            </Flex>
        </>
    )
}
