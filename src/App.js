import Block from './components/Block';
import './index.css';

function App() {
  return (
    <div className="App">
      <Block transform="150px"/>
      <Block color="orange" transform="450px"/>
      <Block color="green" transform="50px"/>
      <Block color="pink" transform="200px"/>
      <Block color="yellow" transform="25px"/>
    </div>
  );
}

export default App;
