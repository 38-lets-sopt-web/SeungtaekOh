import { createBrowserRouter } from "react-router";

import MyInfoPage from "../../pages/myPage/myInfoPage";
import SigninPage from "../../pages/signinPage";
import SignupPage from "../../pages/singUpPage/signupPage";
import UserDetailPage from "../../pages/myPage/userDetailPage";
import UserListPage from "../../pages/myPage/userListPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <SigninPage />,
  },
  {
    path: "/signin",
    element: <SigninPage />,
  },
  {
    path: "/signup",
    element: <SignupPage />,
  },
  {
    path: "/myInfoPage",
    element: <MyInfoPage />,
  },
  {
    path: "/mypage",
    element: <MyInfoPage />,
  },
  {
    path: "/mypage/users",
    element: <UserListPage />,
  },
  {
    path: "/mypage/users/:userId",
    element: <UserDetailPage />,
  },
]);

export default router;
