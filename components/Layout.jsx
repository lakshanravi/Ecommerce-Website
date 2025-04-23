//this page wrap pages with a consistent layout (e.g., navbar at the top, footer at the bottom). 

//<Head>: Sets the tab title to "Lakshan Stores".

//<header>: Contains the navigation bar.

//<main>: Will hold the page content 

//<footer>: Contains the footer component.

import React from 'react'

//Head is same as in html. It is used to add meta tags, title, and other elements to the head of the document.
import Head from 'next/head';
import { Footer, Navbar } from './Index';
const Layout = ({children}) => {
  return (
    <div className='layout'>
      <Head>
        <title>Lakshan Stores</title>
        </Head>
       <header className='header'>{/* this contain the navigation Bar */}
        <Navbar/>
      </header>
      <main className='main-container'>
       {children}
      </main>
      <footer>
        <Footer/>
      </footer>
    </div>
  )
}

export default Layout; 