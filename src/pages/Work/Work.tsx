import { Divider, Flex } from '@mantine/core'
import { WorksCards } from 'features/Works'
import { contentWorks, companiesWorks, personnalWorks } from 'features/Works/Works.utils'
import { FC } from 'react'

export const Work: FC = () => {

    return (
        <Flex direction="column" gap={30}>
            <WorksCards work={companiesWorks} title="Companies works" />
            <Divider />
            <WorksCards work={personnalWorks} title="Personnal work" />
            <Divider />
            <WorksCards work={contentWorks} title="Content creator" />
        </Flex>
    )
}
