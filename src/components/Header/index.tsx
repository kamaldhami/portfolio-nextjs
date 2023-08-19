import Head from "next/head";

export default function Navbar() {


    function openLeftMenu() {
        document.getElementById("leftMenu").style.display = "block";
    }

    function closeLeftMenu() {
        document.getElementById("leftMenu").style.display = "none";
    }

    return (
        <>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css" />
            </Head>
            <nav className="navbar navbar-expand-lg position-absolute w-100">
                <div className="container-fluid d-none d-lg-block d-xl-block">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link active text-white" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white" href="#features">Features</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white" href="#stack">About</a>
                            </li>
                            <li className="nav-item text-white">
                                <a className="nav-link disabled">Disabled</a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="d-block d-lg-none d-lg-none">
                    <button className="w3-button bg-transparent w3-xlarge w3-left" onClick={openLeftMenu}>&#9776;</button>

                    <div className="w3-sidebar w3-bar-block w3-card w3-animate-left" style={{ display: "none" }} id="leftMenu">
                        <button onClick={closeLeftMenu} className="w3-bar-item w3-button w3-large">Close &times;</button>
                        <a href="#" className="w3-bar-item w3-button">Link 1</a>
                        <a href="#" className="w3-bar-item w3-button">Link 2</a>
                        <a href="#" className="w3-bar-item w3-button">Link 3</a>
                    </div>
                </div>


            </nav>
        </>
    )
}