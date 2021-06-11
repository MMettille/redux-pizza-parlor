import './Header.css'

function Header({TotalCost}) {

    return(
        <header className='App-header'>
            <h1 className='App-title'>Prime Pizza</h1>
            <TotalCost className="total-cost"/>
        </header>

    )
}

export default Header


