import { TopNav, Footer, BlogContent } from './Components'
import { Features, Tags, StyleGuide, Author, HomePage, SignIn, SignUp, Membership, Blog} from './Pages'
import { Routes, Route } from 'react-router-dom'
import { AuthProvider } from './Context/Auth'


function App({}) {

  return (
    <div >
      <AuthProvider>
        <TopNav/>
        <Routes>       
          <Route path='/' element= {<HomePage/>}/>
          <Route path='/features' element= {<Features/>}/>
          <Route path='/styleGuide' element= {<StyleGuide/>}/>
          <Route path='/tags' element= {<Tags/>}/>
          <Route path='/author' element= {<Author/>}/>
          <Route path='/signin' element={<SignIn/>} />
          <Route path='/signup' element={<SignUp/>} />
          <Route path='/membership' element={<Membership/>} />
          <Route path='/blog/:id' element={<Blog/>}/>
            {/* <Route path=':id' element={<Blog/>}/>
          </Route> */}
        </Routes>
        <Footer/>
      </AuthProvider>
    </div>
  )
}

export default App
