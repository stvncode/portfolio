import { FC } from 'react'
import { WorksCardType } from '../Works.types'
import { WorksDescriptionLayout } from './WorksDescriptionLayout'

export const ArcadeLife: FC<WorksCardType> = (work) => {
    const { title, img, from, date, link } = work

    return (
        <WorksDescriptionLayout title={title} img={img} from={from} date={date} link={link} />
    )
}
