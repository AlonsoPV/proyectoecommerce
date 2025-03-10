import './Footer.css'

const Footer = () => {
    return (
      <footer className="footer">
        <p>© {new Date().getFullYear()} eMotion Sites</p>
        <p>
          Desarrollado por <a href="www.emotionsites.com" target="_blank">eMotion Sites</a>
        </p>
        <div className="footer__redes">
          <a className='redes' href="#" target="_blank">Facebook</a>
          <a className='redes' href="#" target="_blank">Instagram</a>
          <a className='redes' href="#" target="_blank">LinkedIn</a>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  