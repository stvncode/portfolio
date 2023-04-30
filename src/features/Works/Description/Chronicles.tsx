import { Flex } from '@mantine/core'
import { CustomText } from 'components/Typography'
import { FC } from 'react'
import { WorksCardType } from '../Works.types'
import { chroniclesInfos } from './WorksDescription.utils'
import { WorksDescriptionInfos } from './WorksDescriptionInfos'
import { WorksDescriptionLayout } from './WorksDescriptionLayout'

export const Chronicles: FC<WorksCardType> = (work) => {
    const { title, img, from, date, link } = work

    return (
        <>
            <WorksDescriptionLayout title={title} img={img} from={from} date={date} link={link}>
                <CustomText indent>
                    This project started by a need to discover how can I implement Kafka with JS. I also wanted
                    to try t3Stack with tRPC. With that in mind I did an experiment in a week-end and created Chronicles.
                </CustomText>
                <CustomText indent>
                    The goal was to have a simple ui when you can add, edit and delete blog post. After that I implementend
                    KafkaJS with Conduktor console (free online cluster with Conduktor playground). Every time a post is created,
                    data is produced into a topic and for each message produced, data is consumed and create a post notification
                    for each user to inform that a new plog has been posted.
                </CustomText>
                <CustomText indent>
                    It was really a fun experimentation since I discovered some new technologies and implemented something nice
                    in a short time.
                </CustomText>
            </WorksDescriptionLayout>
            <Flex mt={35} direction="column" gap={10}>
                <WorksDescriptionInfos infos={chroniclesInfos(link)} />
            </Flex>
        </>
    )
}
