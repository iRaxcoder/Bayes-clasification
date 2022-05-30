import SectionHeader from "../components/layout/SectionHeader/SectionHeader";
import { useForm } from "react-hook-form";
import CalcButton from "../components/CalcButton";
import ResponseItem from "../components/ResponseItem";
import { useState } from "react";
import exercise from '../service/exercise'
const OriginPlace = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const instructions = [
    "Para utilizar este algoritmo correctamente debe seleccionar su estilo de aprendizaje (convergente,divergente, asimilador, acomodador).",
    "Debe seccionar Su último promedio de matrícula y su sexo.",
    "El algoritmo puede no ser preciso.",
  ];
  const [result, setResult] = useState(null);
  const [isLoading, setIsloading] = useState(false);
  const handleResults = (d) => {
    exercise.getOriginPlace({style: d.style, avr: Number(d.average), genre: d.genre}).then(response=>{
      setResult(response);
  });
  };
  return (
    <div className="container__">
      <SectionHeader
        instructionTitle="Adivinar recinto de origen"
        title="Adivinar recinto de origen"
        instructions={instructions}
      />
      <hr />
      <form
        className="algorithm__form"
        noValidate
        onSubmit={handleSubmit(handleResults)}
      >
        <div className="form__item_group">
          <div className="form__item">
            <ResponseItem
              advanced={true}
              options={[
                "CONVERGENTE",
                "DIVERGENTE",
                "ASIMILADOR",
                "ACOMODADOR",
              ]}
              register={register}
              name="style"
              type={" Estilo de aprendizaje"}
            />
          </div>
          <div className="form__item">
            <label>Prom. Matricula: </label>
            <input
              {...register("average", { required: errors ? true : false })}
              type={"number"}
            ></input>
            {errors ? (
              errors["average"] && (
                <p style={{ color: "red", fontSize: "15px" }}>
                  {"*ingrese promedio"}
                </p>
              )
            ) : (
              <></>
            )}
          </div>
          <ResponseItem
            advanced={true}
            options={["M", "F"]}
            register={register}
            name="genre"
            type={" Sexo"}
          />
        </div>
        <CalcButton />
      </form>
      {result ? (
        <div className="result__">
          <p>{result}</p>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default OriginPlace;
