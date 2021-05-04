const Footer = () => {
    return (
        <div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-light border-bottom shadow-sm">
            <div className="container">
                <footer className="footer mt-auto py-3 bg-dark">
                    <div className="container">
                        <p className="text-light">App desenvolvido por <a href="https://github.com/mauricioqvp" target="_blank" rel="noreferrer">Maurício Quaranta</a></p>
                        <p className="text-light"><small><strong>Semana Spring React</strong><br />
      Evento promovido pela escola DevSuperior: <a href="https://instagram.com/devsuperior.ig" target="_blank" rel="noreferrer">@devsuperior.ig</a></small></p>
                    </div>
                </footer>
            </div>
        </div>
    );
}

export default Footer;