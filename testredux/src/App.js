import './App.css';
import BookContainer from "./components/bookContainer";
import  HookBookContainer  from "./components/HookBookContainer";
import {Provider} from 'react-redux';
import store from './redux/store/store'

function App() { 
  return (
    <Provider store={store} >
      <div className="App">
        <BookContainer/>
        <HookBookContainer/>
      </div>
    </Provider>
  );
}

export default App;
