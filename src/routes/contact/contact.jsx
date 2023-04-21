import {
  AiOutlineHome,
  AiOutlineInfoCircle,
  AiOutlineMail,
  AiOutlinePhone,
} from "react-icons/ai";

import Button from "../../components/button/button";

import './contact.scss'

const Contact = () => {
  return (  
    <div className="contact-container">
      <div className="user-information-container">
        <h2>Datos de Contacto</h2>
        <span>¿Cómo podemos ayudarlo?</span>
        <div className="data-container">
        <form action="" className="d-flex flex-column">
          <div>
            <input
              type="text"
              className="form-control"
              placeholder="Nombre"
            />
          </div>
          <div>
            <input
              type="email"
              className="form-control"
              placeholder="Email"
            />
          </div>
          <div>
            <input
              type="tel"
              className="form-control"
              placeholder="Teléfono"
            />
          </div>
          <div>
            <textarea
              name=""
              id=""
              className="w-100 form-control"
              cols="30"
              rows="4"
              placeholder="Comentarios"
            ></textarea>
          </div>

          <div className="buttons-container">
            <Button type="submit">Enviar</Button>
          </div>

        </form>
        </div>
      </div>

      <div className="company-information-container">
        <h2>Información de la Empresa</h2>
        <span>Puede contactarse con nosotros a través de:</span>
        <div className="data-container">
          <ul className="ps-0 text-secondary fw-normal">
            <li className="mb-0 d-flex gap-15 align-items-center">
              <p>  
                <AiOutlineHome className="icon-company" />
                <span className="data-company">
                  Olavarría 2680, Mar del Plata, Bs. As., ARGENTINA
                  (7600)
                </span>
              </p>
            </li>
            <li className="mb-0 d-flex gap-15 align-items-center">
              <p>  
                <AiOutlinePhone className="icon-company" />
                <span className="data-company">
                  <a href="tel:+54 2233065071">(+54) 223 306-5071</a>
                </span>
              </p>
            </li>
            <li className="mb-0 d-flex gap-15 align-items-center">
              <p> 
                <AiOutlineMail className="icon-company" />
                <span className="data-company">
                  <a href="mailto:urban-kvinde@gmail.com">
                    urban-kvinde@gmail.com
                  </a>
                </span>
              </p>
            </li>
            <li className="mb-0 d-flex gap-15 align-items-center">
              <p>
                <AiOutlineInfoCircle className="icon-company" />
                <span className="data-company">Lunes a Viernes 10 AM - 8 PM</span>
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Contact;

