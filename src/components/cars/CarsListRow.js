import React from 'react';
import { Link } from 'react-router';

export const CarsListRow = ({car, onDelete}) => {
  return (
    <tr key={car.id}>
      <td>{car.manufacturer}</td>
      <td>{car.make}</td>
      <td>{car.model}</td>
      <td>{car.year}</td>
      <td>
        <div className="btn-toolbar pull-right">
          <Link to={`/cars/${car.id}`} className="btn btn-primary">Edit</Link>
          <a onClick={onDelete.bind(this, car)} className="btn btn-danger">Delete</a>
        </div>
      </td>
    </tr>
  )
};
