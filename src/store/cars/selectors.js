export function getParams(state) {
  return state.cars.params;
}

export function getCar(state, id) {
  return state.cars.byId[id];
}

export function getCars(state) {
  return Object.values(state.cars.byId);
}
