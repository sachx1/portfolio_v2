import './App.css';
import ContainerOne from './components/containerOne';
import ContainerTwo from './components/containerTwo';

function App() {
  return (
    <div className='container'>
      <div>
        <ContainerOne />
      </div>
      <div className='container-two'>
        <ContainerTwo />
      </div>
    </div>
  );
}

export default App;
