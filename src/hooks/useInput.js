import React from 'react';

const useInput = (defaultValue = '') => {
    const [value, setValue] = React.useState(defaultValue);

    const onValueChangeHandler = (e) => {
        setValue(e.target.value);
    };

    return [value, onValueChangeHandler];
}

export default useInput;