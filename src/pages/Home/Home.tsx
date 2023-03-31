import { Timeline } from 'components/Timeline'
import { useEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'
import { match } from 'ts-pattern'

export const Home = () => {
  const workRef = useRef<HTMLDivElement>(null)
  const aboutRef = useRef<HTMLDivElement>(null)
  const contactRef = useRef<HTMLDivElement>(null)

  const { hash } = useLocation()

  useEffect(() => {
    hash &&
      match(hash as '#about' | '#works' | '#contact')
        .with(
          '#about',
          () => aboutRef?.current && aboutRef?.current.scrollIntoView({ behavior: 'smooth' })
        )
        .with(
          '#works',
          () => workRef?.current && workRef?.current.scrollIntoView({ behavior: 'smooth' })
        )
        .with(
          '#contact',
          () => contactRef?.current && contactRef?.current.scrollIntoView({ behavior: 'smooth' })
        )
        .exhaustive()
  }, [hash])

  return (
    <div style={{ overflowY: 'auto' }}>
      <div
        style={{
          height: 'calc(100vh - 3.75rem)',
        }}
      >
        HomePresentation
        <div ref={workRef} />
      </div>
      <div style={{ height: 'calc(100vh - 3.75rem)' }}>
        <Timeline />
      </div>
    </div>
  )
}
