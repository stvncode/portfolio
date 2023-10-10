import { CustomLoader } from 'components/Loader'
import { Section } from 'components/Section'
import { ArcadeLife, AuthStarter, Boarder, Chronicles, ChroniclesArticle, ChroniclesVideo, Conduktor, Feelingo, Libertrip, Matoulina, Orange } from 'features/Works'
import { WorksId } from 'features/Works/Works.types'
import { allWorks } from 'features/Works/Works.utils'
import { FC } from 'react'
import { Navigate, useParams } from 'react-router-dom'
import { match } from 'ts-pattern'

export const WorkDescription: FC = () => {
    const { id } = useParams<{ id: WorksId }>()

    const work = allWorks.filter((work) => work.id === id)[0]

    return <Section>
        {match(id)
            .with(WorksId.CONDUKTOR, () => <Conduktor {...work} />)
            .with(WorksId.ORANGE, () => <Orange {...work} />)
            .with(WorksId.LIBERTRIP, () => <Libertrip {...work} />)
            .with(WorksId.FEELINGO, () => <Feelingo {...work} />)
            .with(WorksId.CHRONICLES, () => <Chronicles {...work} />)
            .with(WorksId.CHRONICLES_ARTICLE, () => <ChroniclesArticle {...work} />)
            .with(WorksId.CHRONICLES_VIDEO, () => <ChroniclesVideo {...work} />)
            .with(WorksId.BOARDER, () => <Boarder {...work} />)
            .with(WorksId.ARCADELIFE, () => <ArcadeLife {...work} />)
            .with(WorksId.AUTH_STARTER, () => <AuthStarter {...work} />)
            .with(WorksId.MATOULINA, () => <Matoulina {...work} />)
            .with(undefined, () => <CustomLoader fullScreen />)
            .otherwise(() => <Navigate to="/" />)}</Section>
}
