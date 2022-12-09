import React from 'react'
import classnames from 'classnames'

const TextField = ({ marginTop, title, type, error, placeHolder, value, onChange, onKeyDown, style, isActive }) => {
    return (
        <div>
            <h6 className={marginTop}><small>{title}</small></h6>
            <div className='text-start'>Search</div>
            <div className='input-group rounded'>
                <input
                    type={type}
                    className={classnames('form-control text-truncate btn-control', { "is-invalid": error })}
                    placeholder={placeHolder}
                    value={value}
                    onChange={onChange}
                    onKeyDown={onKeyDown}
                    style={style}
                    disabled={isActive}
                />
                <div className='invalid-feedback'>{error}</div>
            </div>
        </div>
    )
}

export default TextField