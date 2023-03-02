import React from "react";
import { useNavigate} from "react-router-dom";
import { useRegi } from "../context/RegiContext";

const RegiButton = () => {
    const regi = useRegi();
    const navigate = useNavigate();

    if (!regi.isAuthenticated) {
        return (
            <a class="navbar register" href="/register">Register</a>
        );
    }
    const logout = () => {
        regi.signout().then(() => navigate("/"));
    };
    return (
        <div className="text-white">
            Hey! {regi.user.userName}
            <button className="btn btn-primary" onClick={logout}>
                Logout
            </button>
        </div>
    );
};

export default RegiButton;