import Image from "next/image"
import Link from "next/link"

export default function Navbar(){
    return<>
        <nav className="navbar navbar-expand-md fixed-top px-5 py-3">
            <div className="container-fluid p-0">
                <a className="navbar-brand" href="#">
                    <Image src={"/cover/logo.svg"} width={100} height={40} alt="logo" style={{ marginLeft: "-5px" }}></Image>
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0 gap-2">
                    <li className="nav-item">
                        <Link className="nav-link" href="/">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" href="/beverages">Beverages</Link>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" aria-current="page" href="#">Foods</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link pe-0" aria-current="page" href="#">Working Space</a>
                    </li>
                </ul>
                </div>
            </div>
        </nav>
    </>
}


