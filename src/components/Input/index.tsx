import * as C from './styles';

const Input = () => {
    return (
        <>
            <C.InputArea>
                <input
                    type="text"
                    placeholder='Search by Country'
                />
                <select value="Filter by Region">
                    <option
                        disabled
                        selected
                    >
                        Filter by Region
                    </option>
                </select>
            </C.InputArea>
        </>
    );
};

export default Input;
