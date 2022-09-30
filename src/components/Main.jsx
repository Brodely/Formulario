import '../assets/style/form/form.css';
import '../assets/style/form/column.css';
import img1 from '../assets/img/background/background.jpg';
import Tag from "./main/Tag.jsx";

function Main(){

    return (
        <main>
            <Tag></Tag>

            <div className="l-form">
                <form action="" className="form">
                    <h1 className="form__title">Formulario</h1>

                    <div className="column-f">
                        <div className="form__div element">
                            <input type="text" className="form__input" placeholder=" "></input>
                            <label htmlFor="" className="form__label">Nombre</label>
                        </div>

                        <div className="form__div element">
                            <input type="url" className="form__input" placeholder=" "></input>
                            <label htmlFor="" className="form__label">Instagram</label>
                        </div>

                        <div className="form__div element">
                            <input type="password" className="form__input" placeholder=" "></input>
                            <label htmlFor="" className="form__label">Contraseña</label>
                        </div>

                        <div className="form__div element">
                            <input type="number" className="form__input" placeholder=" "></input>
                            <label htmlFor="" className="form__label">Edad</label>
                        </div>


                        <div className="form__div element">
                            <input type="text" className="form__input" placeholder=" "></input>
                            <label htmlFor="" className="form__label">Correo</label>
                        </div>
                        <div className="form__div element">
                            <input type="checkbox" className="form__input acept" placeholder=" "></input>
                            <label htmlFor="" className="form__label2">Aceptas Terminos y condiciones</label>
                        </div>

                    </div>
                    <input type="submit" className="form__button element" value="Registrarte"></input>
                    <input type="button" className="form__button element2" value="Iniciar Sesión "></input>


                </form>
                <div className="img">
                    <input type="image" src={img1}></input>
                </div>
            </div>

        </main>
    );
}

export default Main;