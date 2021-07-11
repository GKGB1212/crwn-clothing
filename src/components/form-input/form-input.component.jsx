import React from 'react';

import './form-input.styles.scss';

const FormInput = ({ handleChange, label, ...otherProps }) => (
    <div className="group">
        <input className='form-input' onChange={handleChange} {...otherProps} />
        {
            // Kiểm tra xem có truyền xuống thuộc tính label không nếu có thì mới style
            label ?
            (<label className={`${otherProps.value.length ? 'shrink' : ''} form-input-label`}>
                {label}
            </label>)
            : null
        }
    </div>
)

export default FormInput;