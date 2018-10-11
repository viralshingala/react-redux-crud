import { keyBy } from 'lodash';
import * as actionTypes from './actionTypes';

export function fetchCar(payload) {
  return {type: actionTypes.FETCH_ONE, payload};
}

export function fetchCarSuccess(payload) {
  const byId = {[payload.id]: payload};
  return {type: actionTypes.FETCH_ONE_SUCCESS, payload: {byId}};
}

export function fetchCars(payload) {
  return {type: actionTypes.FETCH_COLLECTION, payload};
}

export function fetchCarsSuccess(cars, params) {
  const byId = keyBy(cars, (car) => car.id);
  return {type: actionTypes.FETCH_COLLECTION_SUCCESS, payload: {byId, params}};
}

export function createCar(payload) {
  return {type: actionTypes.CREATE, payload};
}

export function createCarSuccess(payload) {
  return {type: actionTypes.CREATE_SUCCESS, payload};
}

export function updateCar(payload) {
  return {type: actionTypes.UPDATE, payload};
}

export function updateCarSuccess(payload) {
  return {type: actionTypes.UPDATE_SUCCESS, payload};
}

export function deleteCar(payload) {
  return {type: actionTypes.DELETE, payload};
}

export function deleteCarSuccess(payload) {
  return {type: actionTypes.DELETE_SUCCESS, payload};
}