import React, { Children } from 'react';

const FeaturedProducts = ({children}) => {
    return (
        <div>
            {children}
            <h1>this is featured products here</h1>
        </div>
    );
};

export default FeaturedProducts;