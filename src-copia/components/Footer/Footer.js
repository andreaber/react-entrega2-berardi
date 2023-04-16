import "./Footer.scss";
import logo from "../../assets/imgs/logo-nombre.png";
import { Link } from "react-router-dom";
import { BsFacebook, BsTwitter, BsYoutube, BsInstagram } from "react-icons/bs";
import newsletter from "../../assets/imgs/newsletter.png";

const Footer = () => {
  return (
    <div>
      <footer className="py-4">
        <div className="container-xxl">
          <div className="row align-items-center my-3">
            <div className="col-5">
              <div className="footer-top-data d-flex gap-30 align-items-center">
                <img src={newsletter} alt="newsletter" />
                <h2 className="mb-0 mx-3 text-white fs-6 fw-light">
                  Regístrate para recibir nuestro Newsletter
                </h2>
              </div>
            </div>
            <div className="col-7">
              <div class="input-group">
                <input
                  type="text"
                  className="form-control py-1"
                  placeholder="Ingresa tu Email"
                  aria-label="Ingresa tu Email"
                  aria-describedby="basic-addon2"
                />
                <span class="input-group-text py-2 px-4" id="basic-addon2">
                  Suscribirse
                </span>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <footer className="py-4">
        <div className="container-xxl">
          <div className="row">
            <div className="col-4">
              <div className="container m-5">
                <img
                  src={logo}
                  alt="Logo"
                  className="rounded ms-1 d-block"
                  height={130}
                />
              </div>
            </div>

            <div className="col-4 my-5">
              <h4 className="text-white mb-3">Contacto</h4>
              <div>
                <address className="text-white fs-6 pt-2">
                  Store <br />
                  Olavarría N° 2680, Mar del Plata, 7600 <br />
                  Argentina
                </address>
                <a
                  href="tel:+54-2233065071"
                  className="mt-3 d-block mb-1 text-white"
                >
                  +54-2233065071
                </a>
                <a
                  href="mailto:urban-kvinde@gmail.com"
                  className="mt-2 d-block mb-0 text-white"
                >
                  urban-kvinde@gmail.com
                </a>
                <div className="social_icons d-flex align-items-center gap-3 mt-4">
                  <a href="https://www.facebook.com" className="text-white" target="_blank" rel="noreferrer noopener">
                    <BsFacebook className="fs-4" />
                  </a>
                  <a href="https://www.instagram.com" className="text-white" target="_blank" rel="noreferrer noopener">
                    <BsInstagram className="fs-4" />
                  </a>
                  <a href="https://twitter.com" className="text-white" target="_blank" rel="noreferrer noopener">
                    <BsTwitter className="fs-4" />
                  </a>
                  <a href="https://www.youtube.com" className="text-white" target="_blank" rel="noreferrer noopener">
                    <BsYoutube className="fs-4" />
                  </a>
                </div>
              </div>
            </div>

            <div className="col-4  my-5">
              <h4 className="text-white mb-3">Información</h4>
              <div className="footer-link d-flex flex-column">
                <Link className="text-white py-2">Blog</Link>
                <Link className="text-white py-2">Nosotros</Link>
                <Link className="text-white py-2">Faq</Link>
                <Link className="text-white py-2">Contacto</Link>
                <Link className="text-white py-2">Términos & Condiciones</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <footer className="py-4">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <p className="text-center mb-0 text-white">
                &copy; {new Date().getFullYear()} | Hecho con ♥️ by Urban Kvinde
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
