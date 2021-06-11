import "./Header.css";
import Button from '@material-ui/core/Button';

function Header({ TotalCost }) {
  return (
    <header className="App-header">
      <h1 className="App-title">Prime Pizza</h1>
      <Button >
        <div className="total-cost-container">
          <TotalCost className="total-cost" />
        </div>
      </Button>
    </header>
  );
}

export default Header;
