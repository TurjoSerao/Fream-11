import Logo from "../assets/logo.png"

const Nav = () => {
    return (
        <>
        <nav className="m-5">
            <div className="container mx-auto flex justify-between">
                <img src={Logo} alt="" />

                <ul className="flex gap-5 items-center">
                    <li>Home</li>
                    <li>Fixture</li>
                    <li>Teams</li>
                    <li>Schedules</li>
                </ul>
            </div>
        </nav>
            
        </>
    );
};

export default Nav;