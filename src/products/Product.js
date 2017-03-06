import React from 'react';
import {GradeBadge} from '../common/GradeBadge';
import './Product.css';

export const Product = ({name, type, grade}) => (
  <div className="product">
    <div className="product-info">
      <h4>{name}</h4>
      <div>
        {type}
      </div>
    </div>
    <div className="product-badge">
      <GradeBadge label={grade} isActive={true} />
    </div>
  </div>
);