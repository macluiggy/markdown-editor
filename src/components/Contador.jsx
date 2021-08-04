import {useState, useEffect} from 'react';
import { connect, Provider} from 'react-redux';
import { createStore } from 'redux';

//redux
//empezamos con la accion que usara el dispatch
const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';
const RESET = 'RESET';

const increment = () => {
	return {
		type: INCREMENT,
	}
}
const reset = () => {
	return {
		type: RESET,
	}
}
//ahora con el reductor
const incrementReducer = (state = 0, action) => {
	switch (action.type) {
		case INCREMENT:
			return state + 1;
		case DECREMENT:
			return state - 1;
		case RESET:
			return 0
		default:
			return state;
	}
}
//ahora creamos el store
const store = createStore(incrementReducer);

//react
const Comp = (props) => {
	const [state, setState] = useState(props.value) 
	//console.log(props)
	const inc = () => {
		props.increaseValue()
	}
	const dec = () => {
		props.decreaseValue()
	}
	const rst = () => {
		//props.resetValue({ type: RESET })
		props.resetValue(reset())
	}

	useEffect(() => {
		console.log(`rendered`)
		setState(props.value)
	}, [props.value])
	return (
	 		<div>
	 			<button onClick={inc} >+</button>
	 			<button onClick={dec} >-</button>
	 			<button onClick={rst} >reset</button>
	 			<p>{state} </p>
	 		</div>
		)
}

//react-redux
const mapStateToProps = (state) => {
	return { value: state}
}
const mapDispatchToProps = dispatch => {
	return {
		increaseValue: () => {
			dispatch(increment())
		},
		decreaseValue: () => {
			dispatch({ type: DECREMENT })
		},
		resetValue: (resetDispatch) => {
			dispatch(resetDispatch)
		}
	}
}

//ahora conectamos react con redux
const Container = connect(mapStateToProps, mapDispatchToProps)(Comp)
console.log(typeof Container)
const Contador = () => {
  return (
      <Provider store={store} >
        <Container />
      </Provider>
    );
};
export default Contador