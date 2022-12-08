import React from "react";

const Table = ({ header, data }) => {
  return (
    <div className='overflow-x-auto relative shadow-md sm:rounded-lg mt-5 mr-3'>
      <table className='w-full text-sm text-left text-gray-500 dark:text-gray-400'>
        <thead className='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
          <tr>
            {header.map((row, index) => {
              return (
                <th
                  key={index}
                  scope='col'
                  className='py-3 px-6'>
                  {row.name}
                </th>
              );
            })}

            <th
              scope='col'
              className='py-3 px-6'>
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className='bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600'>
            <th
              scope='row'
              className='py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white'>
              Apple MacBook Pro 17"
            </th>
            <td className='py-4 px-6'>Sliver</td>
            <td className='py-4 px-6'>Laptop</td>
            <td className='py-4 px-6'>Yes</td>
            <td className='py-4 px-6'>Yes</td>
            <td className='py-4 px-6'>$2999</td>
            <td className='py-4 px-6'>3.0 lb.</td>
            <td className='flex items-center py-4 px-6 space-x-3'>
              <a
                href='#'
                className='font-medium text-blue-600 dark:text-blue-500 hover:underline'>
                Edit
              </a>
              <a
                href='#'
                className='font-medium text-red-600 dark:text-red-500 hover:underline'>
                Remove
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Table;
