import Home from "../components/pages/home/Home.jsx";
import Login from "../components/pages/login/Login.jsx";
import Registration from "../components/pages/registration/Registration.jsx";
import Account from "../components/pages/account/Account.jsx";
import Blog from "../components/pages/blog/Blog.jsx";
import Video from "../components/pages/video/Video.jsx";
import NoPage from "../components/pages/NoPage.jsx";

import {
LOGIN_ROUTE,
CREATE_SETTINGS_MARATHON_ROUTE,
MY_ACC_ROUTE,
CURR_MARATHON_ROUTE,
SIGN_UP__ROUTE,
PLUS_ONE_NEW_MARATHON_ROUTE,
SOS_BUT,
} from "./consts"

export const authRoutes = [
  {
    path: ACCOUNT_ROUTE,
    Element: <Account/>,
  },
]

export const publicRoutes = [
  {
    path: MAIN_ROUTE,
    Element: <Home/>,
  },
  {
    path: SIGN_IN_ROUTE,
    Element: <Login/>,
  },
  {
    path: SIGN_UP_ROUTE,
    Element: <Registration/>,
  },
  {
    path: BLOGS_ROUTE,
    Element: <Blog/>,
  },
  {
    path: VIDEOS_ROUTE,
    Element: <Video/>,
  },
  {
    path: NO_PAGE_ROUTE,
    Element: <NoPage/>,
  },
]