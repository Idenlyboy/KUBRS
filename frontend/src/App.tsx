import {FC} from 'react';
import {Route,Routes} from 'react-router-dom';
import { Registration } from './Pages/Registration/registration';
import { Login } from './Pages/Login/login';
import { PersonalArea } from './Pages/PersonalArea/personal_area';
import { Home } from './Pages/Home/Home';
import { Layout } from './Components/Layout/layout';
import { SignUp } from './Pages/SignUp/signup';
export const App:FC = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route path="/" element={<Registration/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path={`/personalArea`} element={<PersonalArea/>}/>
          <Route path='/home' element={<Home/>}/>
          <Route path='/signup_for_service' element={<SignUp/>}/>
        </Route>
      </Routes>
    </>
  )
}

