export interface WorksCardType {
  id: string
  title: string
  img: string
  link: string
  on: boolean
  description: string
  from: WorksType
  date: string
}

export enum WorksType {
  COMPANIES = 'companies',
  PERSONAL = 'personal',
  CONTENT = 'content',
}

export enum WorksId {
  MATOULINA = 'matoulina',
  CONDUKTOR = 'conduktor',
  ORANGE = 'orange',
  LIBERTRIP = 'libertrip',
  FEELINGO = 'feelingo',
  CHRONICLES = 'chronicles',
  ARCADELIFE = 'arcade-life',
  BOARDER = 'boarder',
  CHRONICLES_ARTICLE = 'chronicles-article',
  CHRONICLES_VIDEO = 'chronicles-video',
  AUTH_STARTER = 'auth-starter',
}
