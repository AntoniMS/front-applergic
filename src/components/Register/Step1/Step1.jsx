import React from "react";
import { useForm } from "react-hook-form";
import "./Step1.scss";
import { RegisterContext } from "../../../pages/RegisterPage/RegisterPage";

const Step1 = ({ setStep }) => {
  const { user } = React.useContext(RegisterContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ criteriaMode: "all" });

  const onSubmit = (formData) => {
    user.name = formData.name;
    user.photo = formData.photo;
    user.email = formData.email;
    user.password = formData.password;
    user.phone = formData.phone;
    setStep(2);
    console.log(user);
  };

  return (
    <div>
      <nav>
        <h5> ⬅ volver</h5> <h5>1 de 4</h5>
      </nav>
      <div>
        <h3>Dinos quien eres.</h3>
        <form onSubmit={handleSubmit(onSubmit)} className="register__form">
          <label className="register__photo">

          <img src="/images/loginregister/cam3.png" alt="camara" />
           {/*  <h3>Subir Foto</h3> */}

            <input
              type="file"
              id="photo"
              accept="image/png, image/jpg, image/jpeg"
              {...register("photo")}
            />
          </label>

          <div className="register__label">
            <label className="register__info" htmlFor="name">
              <input
                className="register__info--input"
                id="name"
                placeholder="Tu nombre completo"
                {...register("name", {
                  required: "Introduce tu nombre, por favor.",
                })}
              />
            </label>

            {errors.name ? (
              <>
                {errors.name.type === "required" && (
                  <span className="register__errors">{errors.name.message}</span>
                )}
              </>
            ) : null}

            <label className="register__info" htmlFor="email">
              <input
                className="register__info--input"
                id="email"
                type="text"
                placeholder="Email"
                {...register("email", {
                  required: "Introduce un email, por favor.",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                    message:
                      "Introduce un email con formato válido: xxx@xxx.com",
                  },
                })}
              />

              {errors.email ? (
                <>
                  {errors.email.type === "required" && (
                    <span className="register__errors">{errors.email.message}</span>
                  )}
                  {errors.email.type === "pattern" && (
                    <span className="register__errors">{errors.email.message}</span>
                  )}
                </>
              ) : null}
            </label>

            <label className="register__info" htmlFor="phone">
              <input
                className="register__info--input"
                type="text"
                id="phone"
                placeholder="Móvil"
                {...register("phone", {
                  required: "Introduce un nº de teléfono, por favor.",
                  pattern: {
                    value: /^[9|8|7|6]\d{8}$/i,
                    message: "Introduce correctamente tu teléfono.",
                  },
                })}
              />
              {errors.phone ? (
                <>
                  {errors.phone.type === "required" && (
                    <span className="register__errors">{errors.phone.message}</span>
                  )}
                  {errors.phone.type === "pattern" && (
                    <span className="register__errors">{errors.phone.message}</span>
                  )}
                </>
              ) : null}
            </label>

            <label className="register__info" htmlFor="password">
              <input
                className="register__info--input"
                name="password"
                id="password"
                type="password"
                placeholder="Contraseña"
                {...register("password", {
                  required: "Introduce una contraseña, por favor.",
                  pattern: {
                    value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,
                    message:
                      "Debe contener mínimo 8 carácteres, mayúsculas y minúsculas.",
                  },
                })}
              />
              {errors.password ? (
                <>
                  {errors.password.type === "required" && (
                    <span className="register__errors">
                      {errors.password.message}
                    </span>
                  )}
                  {errors.password.type === "pattern" && (
                    <span className="register__errors">
                      {errors.password.message}
                    </span>
                  )}
                </>
              ) : null}
            </label>

            <button className="register__button" type="submit">
              Guardar perfil
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Step1;