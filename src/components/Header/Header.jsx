import "./Header.css";

function Header({ TotalCost }) {
  return (
    <header className="App-header">
      <h1 className="App-title">Prime Pizza</h1>
      <div className="total-cost-container">
        <TotalCost className="total-cost" />
      </div>
    </header>
  );
}

export default Header;
