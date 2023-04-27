import { FC } from 'react'
import { WorksCardType } from '../Works.types'
import { WorksDescriptionLayout } from './WorksDescriptionLayout'

export const ChroniclesArticle: FC<WorksCardType> = (work) => {
    const { title, img } = work
    return (
        <WorksDescriptionLayout title={title} img={img} />
    )
}
