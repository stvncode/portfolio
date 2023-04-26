import { conduktor, libertrip } from "assets";

interface TimelineItem {
  date: string
  icon: string
  title: string
  content: string
  website: string
}

export const timelineItems: TimelineItem[] = [
  {
    date: 'dec. 2018 - nov. 2019',
    icon: conduktor,
    title: 'Freelance developer for multiple clients',
    content: 'Worked on mulitple project. Feelingo, Jenji, triPica...',
    website: 'https://www.jenji.io/fr/'
  },
  {
    date: 'dec. 2019 - sept. 2021',
    icon: libertrip,
    title: 'Fullstack JS developer at Libertrip',
    content: 'All in one travel app. React/Typescript/Fp-ts...',
    website: 'https://www.libertrip.com/'
  },
  {
    date: 'sept. 2021 - today',
    icon: conduktor,
    title: 'Frontend lead at Conduktor',
    content: 'Platform for the kafka ecosystem. React/Typescript/Graphql...',
    website: 'https://www.conduktor.io/'
  },
];