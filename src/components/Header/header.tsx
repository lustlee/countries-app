import * as C from './styles';
import {themeActions, useForm} from "../../contexts/ThemeContext";

export const Header = () => {
    const {state, dispatch} = useForm()

    const handleChangeTheme = () => {
        dispatch({
            type: themeActions.setTheme,
            payload: state.theme === 'light' ? 'dark' : 'light'
        })
    }

    return (
        <>
            <C.Header theme={state.theme}>
                <div className='container'>
                    <h1>Countries App</h1>
                    <p onClick={handleChangeTheme}>Dark Mode</p>
                </div>
            </C.Header>
        </>
    )
}