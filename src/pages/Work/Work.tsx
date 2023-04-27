import { Divider, Flex } from '@mantine/core'
import { useScrollIntoView } from '@mantine/hooks'
import { WorksCards } from 'features/Works'
import { WorksType } from 'features/Works/Works.types'
import { companiesWorks, contentWorks, personnalWorks } from 'features/Works/Works.utils'
import { FC, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { match } from 'ts-pattern'

export const Work: FC = () => {
    const { hash } = useLocation()
    const { scrollIntoView: scrollCompanies, targetRef: refCompanies } = useScrollIntoView<HTMLDivElement>({
        offset: 60,
    })
    const { scrollIntoView: scrollPersonal, targetRef: refPersonal } = useScrollIntoView<HTMLDivElement>({
        offset: 60,
    })
    const { scrollIntoView: scrollContent, targetRef: refContent } = useScrollIntoView<HTMLDivElement>({
        offset: 60,
    })

    const element = hash.slice(1) as WorksType

    console.log(element)

    useEffect(() => {
        element && match(element)
            .with(WorksType.COMPANIES, () => scrollCompanies({ alignment: 'center' }))
            .with(WorksType.PERSONAL, () => scrollPersonal({ alignment: 'center' }))
            .with(WorksType.CONTENT, () => scrollContent({ alignment: 'center' }))
            .exhaustive()
    }, [element])

    return (
        <Flex direction="column" gap={30}>
            <div>
                <div ref={refCompanies} />
                <WorksCards work={companiesWorks} title="Companies works" />
            </div>
            <Divider />
            <div>
                <div ref={refPersonal} />
                <WorksCards work={personnalWorks} title="Personnal work" />
            </div>
            <Divider />
            <div>
                <div ref={refContent} />
                <WorksCards work={contentWorks} title="Content creator" />
            </div>
        </Flex>
    )
}