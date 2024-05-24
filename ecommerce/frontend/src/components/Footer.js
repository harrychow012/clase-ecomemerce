function Footer (){ 
    return (
    <footer className="d-flex flex-wrap justify-content-between container align-items-center my-4 border-top">
        <div className="col-md-4 d-flex align-items-center">
            <a href="/" className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1">
            PythonSoftwareMP
            </a>
                <span className="mb-3 mb-md-0 text-muted">© 2024 Company, Inc</span>
        </div>

            <ul className="nav col-md-4 justify-content-end list-unstyled d-flex pt-2">
                <li className="ms-3">
                    <a className="text-muted" href="www.facebook.com" target='blank'><i className='fa-brands fa-facebook fa-2x'></i></a>            
                </li>
                <li className="ms-3">
                    <a className="text-muted" href="www.instagram.com" target='blank'><i className='fa-brands fa-instagram fa-2x'></i></a>            
                </li>
                <li className="ms-3">
                    <a className="text-muted" href="www.twitter.com" target='blank'><i className='fa-brands fa-twitter fa-2x'></i></a>            
                </li>
                <li className="ms-3">
                    <a className="text-muted" href="www.github.com" target='blank'><i className='fa-brands fa-github fa-2x'></i></a>            
                </li>
            </ul>
    </footer>

    );

}
export default Footer;