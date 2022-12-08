import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";

const Table = () => {
  const columns = [
    {
      name: "Code",
      selector: (row) => row.code,
    },
    {
      name: "Name",
      selector: (row) => row.Name,
    },
    {
      name: "Description",
      selector: (row) => row.Description,
    },
    {
      name: "isActive",
      selector: (row) => row.isActive,
    },
  ];

  const [pending, setPending] = useState(true);
  const [rows, setRows] = useState([]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      //setRows([{}]);
      setPending(false);
    }, 2000);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className='bg-white mt-5 mr-5 shadow rounded-lg'>
      <DataTable
        columns={columns}
        data={rows}
        progressPending={pending}
        pagination
        selectableRows
        fixedHeader
        fixedHeaderScrollHeight='500px'
      />
    </div>
  );
};

export default Table;
