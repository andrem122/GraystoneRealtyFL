export function NavBar() {
    const navBarItemTitles = ['Home', 'Listings', 'Contact', 'About'];
    return (
        <header>
            {/* NavBar Logo */}
            <div>
                <img />
            </div>
            {/* NavBar Items */}
            <nav>
                <ul>
                   {
                     navBarItemTitles.map((title) => <li><a>{title}</a></li>)  
                   } 
                </ul> 
            </nav>
        </header>
    );
}