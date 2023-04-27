import { WorksDescriptionInfoProps } from './WorksDescriptionInfos'

export const conduktorInfos = (link: string): WorksDescriptionInfoProps[] => [
  {
    title: 'Website',
    description: link,
    isLink: true,
  },
  {
    title: 'Platform',
    description: 'Windows/macOS/Linux',
  },
  {
    title: 'Stack',
    description: 'React, Typescript, Radix, Stitches, Graphql, Scala, Rust',
  },
]

export const libertripInfos = (link: string): WorksDescriptionInfoProps[] => [
  {
    title: 'Website',
    description: link,
    isLink: true,
  },
  {
    title: 'Platform',
    description: 'Only for B2B',
  },
  {
    title: 'Stack',
    description: 'React, Typescript, Fp-ts, Monocle-ts, Effect-ts, Morphic-ts, Ruby-on-Rails',
  },
]
