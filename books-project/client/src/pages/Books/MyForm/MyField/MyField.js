import React from 'react'
import { Input } from 'antd'
import { StyledInput } from './styled'
import PropTypes from 'prop-types';

export const MyField = (props) => {
    const { name } = props.input
    const { allowClear } = props;
    return (
        <>
            <StyledInput>
                <label for={name}>{name}</label>
                <Input
                    id={name}
                    {...props.input}
                    allowClear={allowClear}
                />
            </StyledInput>
        </>
    );
}

MyField.propTypes = {
    allowClear: PropTypes.bool,
    name: PropTypes.string,
    input: PropTypes.object,
}

export default MyField;