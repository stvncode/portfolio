import { Flex, Text } from '@mantine/core'
import { IconBrandGithub, IconBrandLinkedin } from '@tabler/icons-react'
import { HomeTitle } from 'components/Typography'
import { FC } from 'react'
import { Link } from 'react-router-dom'
import { useStyleStyles } from './Home.styles'

export const HomeLinks: FC = () => {
    const { classes } = useStyleStyles()

    return (
        <Flex direction="column" gap={20}>
            <HomeTitle title="On the web" />
            <Flex ml={15} direction="column" gap={5}>
                <Links to="https://github.com/stvncode" name="@stvncode" icon={<IconBrandGithub size={20} className={classes.icon} />} />
                <Links to="https://www.linkedin.com/in/steven-travers-313b1b102/" name="Steven Travers" icon={<IconBrandLinkedin size={20} className={classes.icon} />} />
            </Flex>
        </Flex>
    )
}

const Links: FC<{ to: string, name: string, icon: JSX.Element }> = ({ to, name, icon }) => {
    const { classes } = useStyleStyles()

    return <Flex align="center" gap={20}>
        {icon}
        <Link to={to} target="_blank" rel="noopener noreferrer" className={classes.link}>
            <Text color="violet.9">{name}</Text>
        </Link>
    </Flex>
}