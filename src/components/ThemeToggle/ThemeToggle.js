import {useContext} from "react";
import ReactSwitch from "react-switch";

import {ThemeContext} from "../../App";

export const ThemeToggle = () => {
    const {theme, setTheme} = useContext(ThemeContext);
    const handleThemeToggle = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark');
    };
    return (
        <div>
            <ReactSwitch
                uncheckedIcon={false}
                checkedIcon={false}
                onColor={'#eee'}
                checked={theme === 'light'}
                onChange={handleThemeToggle}/>
        </div>
    );
};