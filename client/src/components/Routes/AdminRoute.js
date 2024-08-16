import { useState, useEffect } from "react";
import { useAuth } from "../../context/auth";
import { Outlet } from "react-router-dom";
import axios from "axios";
import Spinner from "../Spinner";

export default function PrivateRoute({ role }) {
  const [ok, setOk] = useState(false);
  const [auth, setAuth] = useAuth();

  useEffect(() => {
    const authCheck = async () => {
      const url = role === "admin" ? "/api/v1/auth/admin-auth" : "/api/v1/auth/user-auth";
      const res = await axios.get(url);
      setOk(res.data.ok);
    };
    if (auth && auth.token ? auth.token : []) authCheck();
  }, [auth?.token, role]);

  return ok ? <Outlet /> : <Spinner />;
}

//<PrivateRoute role="admin" />
{/* <PrivateRoute role="user" /> */}