import React from 'react';

const Countries = ({ countries, query }) => {
  const filterSearch = val => {
    if (query === '') {
      return val;
    } else if (val.name.toLowerCase().includes(query.toLowerCase())) {
      return val;
    }
  };

  return (
    <table className="table table-sm table-striped">
      <thead>
        <tr>
          <th scope="col">S.N.</th>
          <th scope="col">Name</th>
          <th scope="col">Code</th>
        </tr>
      </thead>
      <tbody>
        {countries
          .filter(filterSearch)
          .map(({ name, code }, index) => (
            <tr key={code}>
              <td>{index + 1}</td>
              <td>{name}</td>
              <td>{code}</td>
            </tr>
          ))}
      </tbody>
    </table>
  );
};

export default Countries;
