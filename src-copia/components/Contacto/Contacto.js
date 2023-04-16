// const Contacto = () => {
//   return (
//     <div className="container my-5">
//       <h2>Contacto

//       </h2>
//       <hr />
//     </div>
//   );
// };

// export default Contacto;
import "./Contacto.scss";
import {
  AiOutlineHome,
  AiOutlineInfoCircle,
  AiOutlineMail,
  AiOutlinePhone,
} from "react-icons/ai";

const Contacto = () => {
  return (
    <div>
      <div className="contact-wrapper home-wrapper-2 py-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12"></div>
            <div className="col-12 mt-5">
              <div className="contact-inner-wrapper d-flex justify-content-between">
                <div>
                  <h3 className="contact-title mb-4">Contacto</h3>
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
                    <div>
                      <button className="button border-0">Enviar</button>
                    </div>
                  </form>
                </div>
                <div>
                  <h3 className="contact-title mb-4">
                    Ponte en contacto con nosotros
                  </h3>
                  <div>
                    <ul className="ps-0 text-secondary fw-normal">
                      <li className="mb-0 d-flex gap-15 align-items-center">
                        <AiOutlineHome className="fs-5" />
                        <p className="mt-3">
                          Olavarría 2680, Mar del Plata, Bs. As., ARGENTINA
                          (7600)
                        </p>
                      </li>
                      <li className="mb-0 d-flex gap-15 align-items-center">
                        <AiOutlinePhone className="fs-5" />
                        <p className="mt-3">
                          <a href="tel:+54 2233065071">(+54) 223 306-5071</a>
                        </p>
                      </li>
                      <li className="mb-0 d-flex gap-15 align-items-center">
                        <AiOutlineMail className="fs-5" />
                        <p className="mt-3">
                          <a href="mailto:urban-kvinde@gmail.com">
                            urban-kvinde@gmail.com
                          </a>
                        </p>
                      </li>
                      <li className="mb-0 d-flex gap-15 align-items-center">
                        <AiOutlineInfoCircle className="fs-5" />
                        <p className="mt-3">Lunes a Viernes 10 AM - 8 PM</p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacto;
