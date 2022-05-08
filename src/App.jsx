import Aboutpage from './pages/Aboutpage'
import Blogpage from './pages/Blogpage'
import Homepage from './pages/Homepage'
import Notfoundpage from './pages/Notfoundpage'
import { Routes, Route} from 'react-router-dom'
import { Layout } from './components/Layout'
import { Singlepage } from './pages/Single.page'
import { Editpost } from './pages/Editpost'
import { Navigate } from 'react-router-dom'
import { LoginPage } from './pages/Loginpage'
import { RequireAuth } from './hoc/RequireAuth'
import { Createpost } from './pages/Createpost'
import { AuthProvider } from './hoc/AuthProvider';


function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Homepage />} />
          <Route path='about/*' element={<Aboutpage />} />
          <Route path='about-us' element={<Navigate to="/about" replace/>} />
          <Route path='posts' element={<Blogpage />} />
          <Route path='posts/:id' element={<Singlepage />} />
          <Route path='posts/:id/edit' element={<Editpost />} />
          <Route path='posts/new' element={
            <RequireAuth>
              <Createpost />
            </RequireAuth>
          } />
          <Route path='login' element={<LoginPage />} />
          <Route path='*' element={<Notfoundpage />} />
        </Route>

      </Routes>

    </AuthProvider>
  );
}

export default App;
