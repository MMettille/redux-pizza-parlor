import "./Header.css";
import Button from '@material-ui/core/Button';
import {useHistory} from 'react-router-dom';

function Header({ TotalCost }) {

  const history = useHistory('')

  const handleSubmit = (event) => {
    event.preventDefault();
    history.push('/customerInfo');
  }

  return (
    <header className="App-header">
      <h1 className="App-title">Prime Pizza</h1>
      <Button onClick={handleSubmit}>
        <div className="total-cost-container">
          <TotalCost className="total-cost" />
        </div>
      </Button>
    </header>
  );
}

export default Header;
