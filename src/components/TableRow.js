import React from 'react';

function TableRow({ rowData, headerColumns }) {
  return (
    <li className="table-row">
      {headerColumns.map(header => (
        <div className="table-cell" key={header}>{rowData[header]}</div>
      ))}
    </li>
  );
}

export default TableRow;
