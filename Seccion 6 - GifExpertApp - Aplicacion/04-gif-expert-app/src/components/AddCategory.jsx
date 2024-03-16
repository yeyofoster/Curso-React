import { useState } from "react";

export const AddCategory = () => {

    const [inputValue, setInputValue] = useState('One Punch');

    const onInputChange = ({ target }) => {
        const value = target.value;
        setInputValue(value);
    };

    const onSubmit = (event) => {
        event.preventDefault();
        console.log(inputValue);
    };

    return (
        <form onSubmit={onSubmit}>
            <input
                type="text"
                placeholder="Buscar gif's"
                value={inputValue}
                onChange={onInputChange}
            />
        </form>
    );
};