import { FC } from 'react'
import { WorksCardType } from '../Works.types'
import { WorksDescriptionLayout } from './WorksDescriptionLayout'

export const Feelingo: FC<WorksCardType> = (work) => {
    const { title, img } = work
    return (
        <WorksDescriptionLayout title={title} img={img} />
    )
}
