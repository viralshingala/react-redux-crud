import { keyBy } from 'lodash';
import axios from 'axios';
import querystring from 'querystring';
import { Observable } from 'rxjs/Observable';
import { push } from 'react-router-redux';

import * as actionTypes from './actionTypes';
import * as carsActions from './actionCreators';

export function fetchCar(action$) {
  return action$.ofType(actionTypes.FETCH_ONE)
    .map(action => action.payload)
    .switchMap(id => {
      return Observable.fromPromise(
        axios.get(`http://localhost:8081/cars/${id}`)
      ).map(res => carsActions.fetchCarSuccess(res.data));
    });
}

export function fetchCars(action$) {
  return action$.ofType(actionTypes.FETCH_COLLECTION)
    .map(action => action.payload)
    .switchMap(params => {
      return Observable.fromPromise(
        axios.get(`http://localhost:8081/cars?${querystring.stringify(params)}`)
      ).map(res => carsActions.fetchCarsSuccess(res.data, params));
    });
}

export function updateCar(action$) {
  return action$.ofType(actionTypes.UPDATE)
    .map(action => action.payload)
    .switchMap(car => {
      return Observable.merge(
        Observable.fromPromise(
          axios.put(`http://localhost:8081/cars/${car.id}`, car)
        ).map(res => carsActions.updateCarSuccess(res.data)),
        Observable.of(push('/cars'))
      );
    });
}

export function createCar(action$) {
  return action$.ofType(actionTypes.CREATE)
    .map(action => action.payload)
    .switchMap(car => {
      return Observable.merge(
        Observable.fromPromise(
          axios.post(`http://localhost:8081/cars`, car)
        ).map(res => carsActions.createCarSuccess(res.data)),
        Observable.of(push('/cars'))
      );
    });
}

export function deleteCar(action$) {
  return action$.ofType(actionTypes.DELETE)
    .map(action => action.payload)
    .switchMap(car => {
      return Observable.fromPromise(
        axios.delete(`http://localhost:8081/cars/${car.id}`)
      ).map(res => carsActions.deleteCarSuccess(car));
    });
}
