import { Flex } from '@mantine/core'
import { Section } from 'components/Section'
import { HomeBio, HomeHobbies, HomeLinks, HomePresentation } from 'features/Home'

export const Home = () => (
  <Section>
    <Flex direction="column" gap={40}>
      <HomePresentation />
      <HomeBio />
      <HomeHobbies />
      <HomeLinks />
    </Flex>
  </Section>
)
