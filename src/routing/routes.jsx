import CreateMarathon from "../components/pages/CreateMarathon/CreateMarathon.jsx";
import CurrentMarathon from "../components/pages/CurrentMarathon/CurrentMarathon.jsx";
import Account from "../components/pages/MyAcc/MyAcc.jsx";
import Login from "../components/pages/Login/Login.jsx";

import {
LOGIN_ROUTE,
CREATE_SETTINGS_MARATHON_ROUTE,
CURR_MARATHON_ROUTE,
MY_ACC_ROUTE,
} from "./consts.js"
import CurrentMarathon from "../pages/CurrentMarathon/CurrentMarathon.jsx";

export const authRoutes = [
  {
    //то, где требуется, чтобы пользовательно был атворизован
    path: CREATE_SETTINGS_MARATHON_ROUTE,
    Element: <CreateMarathon/>,

    path: CURR_MARATHON_ROUTE,
    Element: <CurrentMarathon/>,

    path: MY_ACC_ROUTE,
    Element: <Account/>,

  },
]

export const publicRoutes = [
  {
    path: LOGIN_ROUTE,
    Element: <Login/>,
  },
]