import "./App.css"
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, Route, Routes } from "react-router-dom";
import axios from "axios";
import { login, logout } from "./redux/user";
import { baseUrl } from "./utils/core";
import SplashScreen from "./pages/splashScreen/SplashScreen";
import Home from "./pages/home/Home";

const UnAuthRouting = () => {
    return (
        <Routes>
            {/* <Route path="/login" element={<Login />} /> */}
            <Route path="/" element={<Home />} />
            <Route path="*" element={<Navigate to="/login" replace={true} />} />
        </Routes>
    )

}

const AuthRouting = () => {

    return (
        <Routes>
            {/* <Route path="/" element={<Home />} /> */}
            <Route path="*" element={<Navigate to="/" replace={true} />} />
        </Routes>
    )

}

const Routing = () => {
    const dispatch = useDispatch()
    const currentUser = useSelector((state: any) => state?.user)

    useEffect(() => {
        checkLoginStatus()
    }, [])

    const checkLoginStatus = async () => {
        try {
            const resp = await axios.get(`${baseUrl}/api/v1/profile`, { withCredentials: true })
            dispatch(login(resp?.data?.data))

        } catch (error) {
            console.error(error)
            dispatch(logout())
        }
    }

    return (
        <>
            {currentUser?.isLogin == null ? <SplashScreen /> : null}
            {currentUser?.isLogin == false ? <UnAuthRouting /> : null}
            {currentUser?.isLogin == true ? <AuthRouting /> : null}
        </>
    )
}

export default Routing