import { lazy, useEffect } from 'react'
import  Layout  from '../Layout/Layout'
import { Route, Routes } from 'react-router-dom';
import './App.css'
import { useDispatch, useSelector } from 'react-redux';
import { selectIsRefreshing } from '../../redux/auth/selectors';
import { refreshUser } from '../../redux/auth/operations';
import RestrictedRouted from '../RestrictetRoute/RestrictedRoute';
import PrivateRoute from '../PrivateRoute/PrivateRoute';



const HomePage = lazy(() => import('../../pages/HomePage/HomePage'));
const RegistrationPage = lazy(() => import("../../pages/RegistrationPage/RegistrationPage"));
const LoginPage = lazy(() => import("../../pages/LoginPage/LoginPage"));
const ContactsPage = lazy(() => import("../../pages/ContactsPage/ContactsPage"));

function App() {

  const dispatch = useDispatch()
  const isRefreshing = useSelector(selectIsRefreshing)


  useEffect(() => {
    dispatch(refreshUser())
  }, [dispatch])

  return (
    <>
      <Layout>
        {isRefreshing ? (<p>Refreshing please wait</p>) : (
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/register" element={<RestrictedRouted component={<RegistrationPage />} redirectTo="/" />} />
            <Route path="/login" element={<RestrictedRouted component={<LoginPage />}  redirectTo="/contacts"  />} />
            <Route path="/contacts" element={<PrivateRoute  component={<ContactsPage />} redirectTo="/login"/>} />
          </Routes>
        )}
      </Layout>
       
    </>
  )
}

export default App