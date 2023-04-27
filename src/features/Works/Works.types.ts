export interface WorksCardType {
  id: string
  title: string
  img: string
  link: string
  on: boolean
  description: string
  from: WorksType
}

export enum WorksType {
  COMPANIES = 'companies',
  PERSONNAL = 'personnal',
  CONTENT = 'content',
}

export enum WorksId {
  CONDUKTOR = 'conduktor',
  ORANGE = 'orange',
  LIBERTRIP = 'libertrip',
  FEELINGO = 'feelingo',
  CHRONICLES = 'chronicles',
  ARCADELIFE = 'arcade-life',
  BOARDER = 'boarder',
  CHRONICLES_ARTICLE = 'chronicles-article',
  CHRONICLES_VIDEO = 'chronicles-video',
}
