import { NavLink, Outlet } from 'react-router-dom'
import { CustomLink } from './CustomLink'

// const isActive = ({isActive}) => isActive ? 'active-link' : null;

const Layout = () => {
  return (
    <>
      <header>
        <CustomLink to="/">Home</CustomLink>
        <CustomLink to="/posts">Blog</CustomLink>
        <CustomLink to="/about">About</CustomLink>
      </header>

      <main className='container'>
      <Outlet />
      </main>

      
      <footer className='container'>footer 2022</footer>
    </>

  )
}

export {Layout}