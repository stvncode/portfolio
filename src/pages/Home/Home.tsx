import { Flex } from '@mantine/core'
import { HomeBio, HomeHobbies, HomeLinks, HomePresentation } from 'features/Home'

export const Home = () => (
  <Flex direction="column" gap={40}>
    <HomePresentation />
    <HomeBio />
    <HomeHobbies />
    <HomeLinks />
  </Flex>
)
