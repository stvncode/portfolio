import React, { FC } from 'react'
import { Outlet } from 'react-router-dom'
import { Header } from './Header'

export const Layout: FC = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  )
}
