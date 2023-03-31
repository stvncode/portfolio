import { FC } from 'react'

import { Timeline } from 'components/Timeline'

export const HomePresentation: FC = () => {
  return (
    <div style={{ overflowY: 'auto' }}>
      <div
        style={{
          height: 'calc(100vh - 3.75rem)',
        }}
      >
        HomePresentation
      </div>
      <div style={{ height: 'calc(100vh - 3.75rem)' }}>
        <Timeline />
      </div>
    </div>
  )
}
