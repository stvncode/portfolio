import { Flex } from '@mantine/core'
import { CustomText } from 'components/Typography'
import { FC } from 'react'
import { WorksCardType } from '../Works.types'
import { boarderInfos } from './WorksDescription.utils'
import { WorksDescriptionInfos } from './WorksDescriptionInfos'
import { WorksDescriptionLayout } from './WorksDescriptionLayout'

export const Boarder: FC<WorksCardType> = (work) => {
    const { title, img, from, date, link } = work

    return (
        <WorksDescriptionLayout title={title} img={img} from={from} date={date} link={link}>
            <CustomText indent>
                Boarder is an idea I had in 2022. The idea is to create a "dating" mobile app to find
                poeple to play board games with. Why tho ? Because it can be difficult to find people if you just arrived
                in a new place. Also, board games can be expensive sometimes and if you find someone who already have a game
                that you like, you can play it for free with him/them.
            </CustomText>
            <CustomText indent>
                The problem is that it's hard to make money without paid plans. I don't want to make it like all dating apps
                because I want it to be a place to help find people and to play with them for free. It's just to build connections.
            </CustomText>
            <Flex mt={25} direction="column" gap={10}>
                <WorksDescriptionInfos infos={boarderInfos(link)} />
            </Flex>
        </WorksDescriptionLayout>
    )
}
