import React from 'react';
import './SelectCover.scss'

export const BrochureCover = ({ image = '' }) => {
    return (
        <div
            className="select__cover"
            style={{ backgroundImage: `url(${image})` }}
      />
    )
}
