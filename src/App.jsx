//import logo from './logo.svg';
import './App.scss';
import { Provider } from 'react-redux';
import Main from './components/Main'
import store from './store'
//console.log(store.getState())
function App() {
  return (
    <Provider store={store} >
      <Main />
    </Provider>
  );
}

export default App;
