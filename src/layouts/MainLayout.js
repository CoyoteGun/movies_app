import {Outlet} from "react-router-dom";

import {Header} from "../components/Header/Header";
import {useContext} from "react";
import {ThemeContext} from "../App";

export const MainLayout = () => {

    const {theme} = useContext(ThemeContext);

    const bodyStyle = {
        dark: {
            backgroundImage: 'https://wallpaperaccess.com/full/2773237.jpg',
            color: 'white'
        },
        light: {
            backgroundColor: '#d5d5d5',
            color: 'black'
        },
    }

    const themeStyle = {
        ...(theme === 'light' ? bodyStyle.light : bodyStyle.dark)
    }

    return (
        <div style={themeStyle}>
            <Header />
            <Outlet />
        </div>
    );
};