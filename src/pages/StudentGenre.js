import SectionHeader from "../components/layout/SectionHeader/SectionHeader";
import { useForm } from "react-hook-form";
import CalcButton from "../components/CalcButton";
import ResponseItem from "../components/ResponseItem";
import { useState } from "react";
import exercise from '../service/exercise'
const StudenGenre = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const instructions = [
    "Para utilizar este algoritmo correctamente debe seleccionar su estilo de aprendizaje (convergente,divergente, asimilador, acomodador).",
    "Debe seccionar Su último promedio de matrícula y recinto",
    "El algoritmo puede no ser preciso.",
  ];
  const [result, setResult] = useState(null);
  const [isLoading, setIsloading] = useState(false);
  const handleResults = (data) => {
    exercise.getStudentSex({style: data.style, avr: Number(data.average), place: data.place}).then(response=>{
      setResult(response);
  });
  };
  return (
    <div className="container__">
      <SectionHeader
        instructionTitle="Adivinar sexo de estudiante"
        title="Adivinar sexo de estudiante"
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
          <div className="form__item">
            <ResponseItem
              advanced={true}
              options={["Turrialba", "Paraiso"]}
              register={register}
              name="place"
              type={" Recinto"}
            />
          </div>
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

export default StudenGenre;
