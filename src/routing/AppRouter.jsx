import {useDispatch, useSelector} from "react-redux";
import {Navigate, Route, Routes} from "react-router-dom";
import {authRoutes, publicRoutes} from "./routes.jsx";
import { setAuthAction } from "../store/userReducer.js";

const AppRouter = () => {
  
  const isAuth = useSelector(state => state.user.isAuth)
  const dispatch = useDispatch();

  dispatch(setAuthAction({id: 1}));


  return (
    <Routes>
      {isAuth && authRoutes.map(({path, Element}) => {
        return <Route key={path} path={path} element={Element}/>
      })}
      {publicRoutes.map(({path, Element}) => {
        return <Route key={path} path={path} element={Element}/>
      })}
      <Route path="*" element={<Navigate to="/"/>}/>
    </Routes>
  )
}

export default AppRouter