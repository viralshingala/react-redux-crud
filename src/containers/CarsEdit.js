import React from 'react';
import { carsActions, carsSelectors } from '../store/cars';
import { connect } from 'react-redux';
import { isEqual } from 'lodash';

@connect(
  (state, props) => {
    return {
      car: carsSelectors.getCar(state, props.params.carId),
    };
  }
)
export class CarsEdit extends React.Component {
  static contextTypes = {
    router: React.PropTypes.object,
    store: React.PropTypes.object
  };

  static propTypes = {
    params: React.PropTypes.object,
    car: React.PropTypes.object,
  };

  constructor(props, context) {
    super(props, context);

    this.state = {
      ...this.state,
      carId: this.props.params.carId,
      car: {manufacturer: '', make: '', model: '', year: ''}
    };
  }

  componentWillReceiveProps(nextProps) {
    if (!isEqual(nextProps.car, this.state.car)) {
      this.setState({...this.state, car: nextProps.car});
    }
  }

  componentDidMount() {
    if (this.state.carId) {
      this.context.store.dispatch(carsActions.fetchCar(this.props.params.carId));
    }
  }

  handleChange(field, e) {
    const car = Object.assign({}, this.state.car, {[field]: e.target.value});
    this.setState(Object.assign({}, this.state, {car}));
  }

  handleSubmit() {
    if (this.state.carId) {
      this.context.store.dispatch(carsActions.updateCar(this.state.car));
    } else {
      this.context.store.dispatch(carsActions.createCar(this.state.car));
    }
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit.bind(this)} noValidate>
        <div className="form-group">
          <label className="label-control">Manufacturer</label>
          <input
            type="text"
            className="form-control"
            value={this.state.car.manufacturer}
            onChange={this.handleChange.bind(this, 'manufacturer')} />
        </div>

        <div className="form-group">
          <label className="label-control">Make</label>
          <input
            type="text"
            className="form-control"
            value={this.state.car.make}
            onChange={this.handleChange.bind(this, 'make')} />
        </div>

        <div className="form-group">
          <label className="label-control">Model</label>
          <input
            type="text"
            className="form-control"
            value={this.state.car.model}
            onChange={this.handleChange.bind(this, 'model')} />
        </div>

        <div className="form-group">
          <label className="label-control">Year</label>
          <input
            type="text"
            className="form-control"
            value={this.state.car.year}
            onChange={this.handleChange.bind(this, 'year')} />
        </div>

        <button type="submit" className="btn btn-default">
          {this.state.carId ? 'Update' : 'Create' } Car
        </button>
      </form>
    );
  }
}
