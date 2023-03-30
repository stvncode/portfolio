import { useMantineColorScheme } from '@mantine/core'
import { FC } from 'react'

export const HomePresentation: FC = () => {
  const { colorScheme } = useMantineColorScheme()

  const dark = colorScheme === 'dark'

  return (
    <div style={{ overflowY: 'auto' }}>
      <div
        style={{
          height: 'calc(100vh - 3.75rem)',
        }}
      >
        HomePresentation
      </div>
      {/* <div style={{ height: 'calc(100vh - 3.75rem)' }}>
        {technologies.map(technology => (
          <div className="w-28 h-28" key={technology.name}>
            <BallCanvas icon={technology.icon} />
          </div>
        ))}
      </div> */}
    </div>
  )
}
