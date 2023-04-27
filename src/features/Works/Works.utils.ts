import {
  arcadeLife,
  articlesChronicles,
  boarder,
  chronicles,
  conduktor,
  feelingo,
  libertrip,
  orange,
  videoChronicles,
} from 'assets'
import { WorksCardType, WorksId, WorksType } from './Works.types'

export const companiesWorks: WorksCardType[] = [
  {
    title: 'Conduktor',
    img: conduktor,
    link: 'https://www.conduktor.io/',
    description: 'Apache Kafka platform',
    on: true,
    id: WorksId.CONDUKTOR,
    from: WorksType.COMPANIES,
  },
  {
    title: 'Libertrip',
    img: libertrip,
    link: 'https://www.libertrip.com/',
    description: 'All in one travel platform',
    on: true,
    id: WorksId.LIBERTRIP,
    from: WorksType.COMPANIES,
  },
  {
    title: 'Feelingo',
    img: feelingo,
    link: 'https://feelingo.com/',
    description: 'Ecological hotel reservation',
    on: false,
    id: WorksId.FEELINGO,
    from: WorksType.COMPANIES,
  },
  {
    title: 'Orange',
    img: orange,
    link: 'https://www.orange.com/en',
    description: 'Web application for PM',
    on: true,
    id: WorksId.ORANGE,
    from: WorksType.COMPANIES,
  },
]

export const personnalWorks: WorksCardType[] = [
  {
    title: 'Chronicles',
    img: chronicles,
    link: 'https://github.com/stvncode/chronicles',
    description: 'Fullstack blog app with kafka',
    on: false,
    id: WorksId.CHRONICLES,
    from: WorksType.PERSONNAL,
  },
  {
    title: 'ArcadeLife',
    img: arcadeLife,
    link: 'https://github.com/stvncode/ArcadeLife',
    description: 'Social network for gamers',
    on: false,
    id: WorksId.ARCADELIFE,
    from: WorksType.PERSONNAL,
  },
  {
    title: 'Boarder',
    img: boarder,
    link: 'https://github.com/stvncode/Boarder',
    description: '"Dating" mobile app for board games',
    on: false,
    id: WorksId.BOARDER,
    from: WorksType.PERSONNAL,
  },
]

export const contentWorks: WorksCardType[] = [
  {
    title: 'Chronicles article',
    img: articlesChronicles,
    link:
      'https://dev.to/stvncode/fullstack-blog-app-with-t3-stack-next-jsauth-prisma-trpc[…]a225f4061f1a6f395d2ff92ca80671ab9619244adc2c85f615096255d15360d57',
    description: 'Article about my project chronicles',
    on: false,
    id: WorksId.CHRONICLES_ARTICLE,
    from: WorksType.CONTENT,
  },
  {
    title: 'Chronicles video',
    img: videoChronicles,
    link: 'https://www.youtube.com/watch?v=4BbnsqMkK30&t',
    description: 'Video about my project chronicles',
    on: true,
    id: WorksId.CHRONICLES_VIDEO,
    from: WorksType.CONTENT,
  },
]

export const allWorks = [...companiesWorks, ...personnalWorks, ...contentWorks]
