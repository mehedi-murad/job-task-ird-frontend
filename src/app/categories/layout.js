import CategoryList from '@/components/ui/CategoryList/CategoryList';
import React from 'react';

const CategoriesLayout = ({children}) => {
    return (
        <div className='grid grid-cols-9 gap-7'>
            <div className='col-span-3 bg-white'>
                <CategoryList></CategoryList>
            </div>

            <div className='col-span-6 bg-white'>
                {children}
            </div>
        </div>
    );
};

export default CategoriesLayout;