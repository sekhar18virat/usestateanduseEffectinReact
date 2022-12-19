import logo from './logo.svg';
import './App.css';
import PostLists from './components/PostLists';
import SendingtoApi from './components/SendingtoApi';
import HookCounter from './components/HookCounter';
import HookCounterTwo from './components/HookCounterTwo';
import HookCounterThree from './components/HookCounterThree';
import HookEffect from './components/HookEffect';

function App() {
  return (
    <div className="App">
      {/* <PostLists /> */}
      {/* <SendingtoApi /> */}
      {/* <HookCounterTwo /> */}
      {/* <HookCounterThree /> */}
      <HookEffect />
    </div>
  );
}

export default App;
