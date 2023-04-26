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
import { WorksCardType } from './Works.types'

export const companiesWorks: WorksCardType[] = [
  {
    title: 'Conduktor',
    img: conduktor,
    link: 'https://www.conduktor.io/',
    description: 'Apache Kafka platform',
    on: true,
  },
  {
    title: 'Libertrip',
    img: libertrip,
    link: 'https://www.libertrip.com/',
    description: 'All in one travel platform',
    on: true,
  },
  {
    title: 'Feelingo',
    img: feelingo,
    link: 'https://feelingo.com/',
    description: 'Ecological hotel reservation',
    on: false,
  },
  {
    title: 'Orange',
    img: orange,
    link: 'https://www.orange.com/en',
    description: 'Web application for PM',
    on: true,
  },
]

export const personnalWorks: WorksCardType[] = [
  {
    title: 'Chronicles',
    img: chronicles,
    link: 'https://github.com/stvncode/chronicles',
    description: 'Fullstack blog app with kafka',
    on: false,
  },
  {
    title: 'ArcadeLife',
    img: arcadeLife,
    link: 'https://github.com/stvncode/ArcadeLife',
    description: 'Social network for gamers',
    on: false,
  },
  {
    title: 'Boarder',
    img: boarder,
    link: 'https://github.com/stvncode/Boarder',
    description: '"Dating" mobile app for board games',
    on: false,
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
  },
  {
    title: 'Chronicles video',
    img: videoChronicles,
    link: 'https://www.youtube.com/watch?v=4BbnsqMkK30&t',
    description: 'Video about my project chronicles',
    on: true,
  },
]
