import { useState } from "react";

export const AddCategory = ({ setCategories }) => {
    const [inputValue, setInputValue] = useState('');

    const onInputChange = ({ target }) => {
        const value = target.value;
        setInputValue(value);
    };

    const onSubmit = (event) => {
        event.preventDefault();
        if (inputValue.trim().length <= 1)
            return;

        setCategories(categories => [inputValue, ...categories]);
        setInputValue('');
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