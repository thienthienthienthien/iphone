
import './App.scss';
import Header from './Components/Header/Header';
import { Link } from 'react-router-dom';

const App = () => {
  return (
    <>

      <div className="app-container">
        <Header />
      </div>

      <div>
        Test Link
      </div>
      <button>
        <Link to="/user">Go to User page</Link>
      </button>
      <button>
        <Link to="/Admin">Go to Admin page</Link>
      </button>

    </>
  )
}
export default App;