import { useTheme } from '../hooks/useTheme';

import '../styles/darkmode.scss';

export function ThemeSwitcher (){
    const { toggleTheme } = useTheme()

    return(
        <div className="switch">
            <input type="checkbox" className="checkbox" id="checkbox" onChange={toggleTheme} />
            <label htmlFor="checkbox" className="label">
                <span className="slider-round"> </span>
            </label>
        </div> 
    );
}