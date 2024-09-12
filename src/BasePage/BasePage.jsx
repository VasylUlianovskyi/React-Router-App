import { Outlet } from 'react-router-dom'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'

function BasePage () {
  return (
    <>
      <Header />
      <div className='mainContent'>
        <Outlet />
        <h1>Welcome to my Router Site</h1>
      </div>
      <Footer />
    </>
  )
}

export default BasePage
