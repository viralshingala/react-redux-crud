import React from 'react';
import { CarsListRow } from './CarsListRow';

export const CarsList = ({cars, onDelete}) => {
  return (
    <table className="table table-hover">
      <thead>
      <tr>
        <th>Manufacturer</th>
        <th>Make</th>
        <th>Model</th>
        <th>Year</th>
        <th></th>
      </tr>
      </thead>
      <tbody>
      {cars.map(car => CarsListRow({car, onDelete}))}
      </tbody>
    </table>
  )
};
