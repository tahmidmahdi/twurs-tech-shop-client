import React from 'react';

const DashBoardData = ({product}) => {
    return (
      
            <tr className='h-20 border border-black-600 text-center'>
                <td class="border border-black ">{product.model}</td>
                <td class="border border-black ">{product.quantity}</td>
            </tr>
       
    );
};

export default DashBoardData;