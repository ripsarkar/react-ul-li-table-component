import React from 'react';
import './style.css';
import TableRow from './components/TableRow';
const data = [
  { id: 1, name: 'John Doe', age: 30, city: 'New York' },
  { id: 2, name: 'Jane Smith', age: 25, city: 'Los Angeles' },
  { id: 3, name: 'Peter Jones', age: 40, city: 'Chicago' },
];

function ReactTable() {
  const headerColumns = Object.keys(data[0]); // Get column names from the first object

  return (
    <div className="table-container">
      <ul className="table">
        <li className="table-header">
          {headerColumns.map(header => (
            <div className="header-item" key={header}>{header}</div>
          ))}
        </li>
        {data.map(row => (
          <TableRow key={row.id} rowData={row} headerColumns={headerColumns} />
        ))}
      </ul>
    </div>
  );
}



export default ReactTable;
