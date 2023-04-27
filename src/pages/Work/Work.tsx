import { Divider, Flex } from '@mantine/core'
import { WorksCards } from 'features/Works'
import { WorksType } from 'features/Works/Works.types'
import { companiesWorks, contentWorks, personnalWorks } from 'features/Works/Works.utils'
import { FC } from 'react'

export const Work: FC = () => (
    <Flex direction="column" gap={30}>
        <div id={WorksType.COMPANIES}>
            <WorksCards work={companiesWorks} title="Companies works" />
        </div>
        <Divider />
        <div id={WorksType.PERSONNAL}>
            <WorksCards work={personnalWorks} title="Personnal work" />
        </div>
        <Divider />
        <div id={WorksType.CONTENT}>
            <WorksCards work={contentWorks} title="Content creator" />
        </div>
    </Flex>
)
