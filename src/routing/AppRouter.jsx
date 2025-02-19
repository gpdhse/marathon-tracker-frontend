import { useSelector} from "react-redux";
import {Navigate, Route, Routes} from "react-router-dom";
import {authRoutes, publicRoutes} from "./routes.jsx";
import {BrowserRouter} from "react-router-dom";


const AppRouter = () => {
  
  const isAuth = useSelector(state => state.user.isAuth)

  return (
    <BrowserRouter>
    <Routes>
      {isAuth && authRoutes.map(({path, Element}) => {
        return <Route key={path} path={path} element={Element}/>
      })}
      {publicRoutes.map(({path, Element}) => {
        return <Route key={path} path={path} element={Element}/>
      })}
      <Route path="*" element={<Navigate to="/"/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default AppRouter