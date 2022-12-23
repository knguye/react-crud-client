import './styles/App.css';

import {
  useState
} from 'react';

import {
        CreateButton,
        CreatePanel,
        }  
from './components/create';

import { FormFieldType, FormTypes } from './utilities/interfaces';

function App() {
  const [activeFormType, setActiveFormType] = useState();

  return (
    <div className="App">
      <div id={`main`}>
        <CreatePanel></CreatePanel>
      </div>

    </div>
  );
}

export default App;
