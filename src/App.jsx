//import logo from './logo.svg';
import './App.scss';
import { Provider } from 'react-redux';
import Main, { store } from './components/Main'
function App() {
  return (
    <Provider store={store} >
      <Main />
    </Provider>
  );
}

export default App;
