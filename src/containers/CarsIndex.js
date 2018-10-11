import React from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router';
import { CarsList } from '../components/cars/CarsList';
import { carsActions, carsSelectors } from '../store/cars';


@connect(
  (state) => {
    return {
      params: carsSelectors.getParams(state),
      cars: carsSelectors.getCars(state),
    };
  }
)
export class CarsIndex extends React.Component {
  static contextTypes = {
    router: React.PropTypes.object,
    store: React.PropTypes.object,
  };

  constructor(props, context) {
    super(props, context);

    this.deleteCar = this.deleteCar.bind(this);
  }

  componentDidMount() {
    this.fetchCars({});
  }

  fetchCars(params) {
    this.context.store.dispatch(carsActions.fetchCars(params));
  }

  deleteCar(car) {
    this.context.store.dispatch(carsActions.deleteCar(car));
  }

  handleSearch(field, value) {
    this.fetchCars({q: value})
  }

  render() {
    const { cars } = this.props;
    return (
      <div>
        <div className="row">
          <div className="col-md-6">            
          </div>
          <div className="col-md-6 text-right">
            <Link to="/cars/new" className="btn btn-primary">Add New</Link>
          </div>
        </div>
        {cars.length > 0 &&
        <CarsList cars={cars} onDelete={this.deleteCar}/>}
      </div>
    );
  }
}
