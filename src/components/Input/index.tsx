import * as C from './styles';
import {IInput} from "../../types/Input";
import {useState} from "react";
import {useDebounce} from "./useDebounce";
import {themeActions, useForm} from "../../contexts/ThemeContext";

const delay = 500;
const Input = ({value, setSearch}: IInput) => {
    const {state, dispatch} = useForm()
    const [input, setInput] = useState('');

    const debounceChange = useDebounce(setSearch, delay);
    const handleChange = (e: string) => {
        debounceChange(e)
        setInput(e)
    };

    return (
        <>
            <C.InputArea theme={state.theme}>
                <input
                    type="text"
                    placeholder='Search by Country'
                    value={input}
                    onChange={e => handleChange(e.target.value)}
                />
                <select
                    onChange={e => handleChange(e.target.value)}
                >
                    <option
                        value="Filter by Region"
                        disabled
                        selected
                    >
                        Filter by Region
                    </option>
                    <option value="Africa">Africa</option>
                    <option value="Americas">Americas</option>
                    <option value="Asia">Asia</option>
                    <option value="Europe">Europe</option>
                    <option value="Oceania">Oceania</option>
                </select>
            </C.InputArea>
        </>
    );
};

export default Input;
