import * as React from 'react';

import Login from "./Login/Login";
import Logout from "./Logout/Logout";
const Profile = React.lazy(() => import("./Profile/Profile"));
const SignUp = React.lazy(() => import("./SignUp/SignUp"));

export { Login, Logout, Profile, SignUp };