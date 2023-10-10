import { Flex } from '@mantine/core'
import { CustomText } from 'components/Typography'
import { FC } from 'react'
import { WorksCardType } from '../Works.types'
import { feelingoInfos, matoulinaInfos } from './WorksDescription.utils'
import { WorksDescriptionInfos } from './WorksDescriptionInfos'
import { WorksDescriptionLayout } from './WorksDescriptionLayout'

export const Matoulina: FC<WorksCardType> = (work) => {
    const { title, img, from, date, link } = work

    return (
        <>
            <WorksDescriptionLayout title={title} img={img} from={from} date={date} link={link}>
                <CustomText indent>
                    Crafting a digital haven for psychology professionals, I journeyed from a conceptual spark to a fully deployed website,
                    integrating empathetic design with robust technology.
                </CustomText>
                <CustomText indent>
                    Every pixel and line of code was meticulously curated, ensuring an
                    intuitive and serene user experience that seamlessly marries functionality with aesthetics.
                </CustomText>
                <CustomText indent>
                    From initial sketches to a live, impactful platform, the website now stands as a testament to a
                    holistic and user-centric development journey, embodying a space where technology and empathy coalesce.
                </CustomText>
            </WorksDescriptionLayout>
            <Flex mt={35} direction="column" gap={10}>
                <WorksDescriptionInfos infos={matoulinaInfos(link)} />
            </Flex>
        </>
    )
}
