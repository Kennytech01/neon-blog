import { useState } from 'react'
import { TopNav } from './Components/TopNav'
import { Routes, Route } from 'react-router-dom'
import {Features} from './Pages/Features'
import {StyleGuide} from './Pages/StyleGuide'
import { Author } from './Pages/Author'
import { Tags } from './Pages/Tags'
import { HomePage } from './Pages/HomePage'
import { Footer } from './Pages/Footer'


function App() {

  return (
    <>
      <TopNav/>
      <Routes>
        <Route path='/' element= {<HomePage/>}/>
        <Route path='/features' element= {<Features/>}/>
        <Route path='/styleGuide' element= {<StyleGuide/>}/>
        <Route path='/tags' element= {<Tags/>}/>
        <Route path='/author' element= {<Author/>}/>
      </Routes>
      <Footer/>
    </>
  )
}

export default App
