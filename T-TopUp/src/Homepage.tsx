function Homepage() {
    return (
        <>
            <body>
                <header>
                    <nav className="nav1">
                        <a href="#">Log in</a>
                    </nav>
                    <nav className="nav2">
                        <a href="Homepage.tsx">
                            <img src="image.png" alt="Logo" className="logosize"></img>
                        </a>
                        <a href="Homepage.tsx">Home</a>
                        <a href="#">Games</a>
                        <a href="#">User Management</a>
                        <a href="#">Product Management</a>
                    </nav>
                </header>
            </body>
        </>
    )
}
export default Homepage;