import SectionHeader from "../components/layout/SectionHeader/SectionHeader";
import ResponseItem from "../components/ResponseItem";
import { useForm } from "react-hook-form";
import CalcButton from "../components/CalcButton";
import "./ProfessorType.css";
import { useState } from "react";
import exercise from "../service/exercise";
const ProfessorType = () => {
  const instructions = [
    "Usted como prefesor, con el fin de determinar si es principiante, intermedio o avanzado...",
    "Deberá responder a los criterios mostrados en la interfaz.",
    "El algoritmo puede no ser preciso.",
  ];
  const [result, setResult] = useState(null);
  const { register, handleSubmit } = useForm();
  const handleResults = (data) => {
    console.log(data)
    exercise.getProfessorType(data).then((response) => {
      setResult(response);
    });
  };
  return (
    <div className="container__">
      <SectionHeader
        instructionTitle="Adivinar tipo de profesor"
        title="Adivinar tipo de profesor"
        instructions={instructions}
      />
      <hr />
      <form noValidate onSubmit={handleSubmit(handleResults)}>
        <div className="response__container_">
          <div className="style__container">
            <ResponseItem
              advanced={true}
              val={[1, 2, 3]}
              options={["<=30", ">30 y <=55", ">55"]}
              register={register}
              name="A"
              type={"Edad "}
            />
            <ResponseItem
              advanced={true}
              val={["F", "M", "NA"]}
              options={["Femenino", "Masculino", "NA"]}
              register={register}
              name="B"
              type={"Género"}
            />
            <ResponseItem
              advanced={true}
              val={["B", "I", "A"]}
              options={["Principiante", "Medio", "Avanzado"]}
              register={register}
              name="C"
              type={"Autoevaluación de habilidad o exp"}
            />
            <ResponseItem
              advanced={true}
              val={[1, 2, 3]}
              options={["Nunca", "1 a 5 veces", "Más de 5 veces"]}
              register={register}
              name="D"
              type={"Número de veces de involucrado en el curso"}
            />
          </div>
          <div className="style__container">
            <ResponseItem
              advanced={true}
              val={["DM", "ND", "O"]}
              options={["Tomador de decisiones", "Network design", "Other"]}
              register={register}
              name="E"
              type={"Enfoque de disciplina o area experta"}
            />
            <ResponseItem
              advanced={true}
              val={["L", "A", "H"]}
              options={["Baja", "Promedio", "Alta"]}
              register={register}
              name="F"
              type={"Habilidad con el computador"}
            />
            <ResponseItem
              advanced={true}
              val={["N", "S", "O"]}
              options={["Nunca", "A veces", "A menudo"]}
              register={register}
              name="G"
              type={"Experiencia enseñando con tecnología web"}
            />
            <ResponseItem
              advanced={true}
              val={["N", "S", "O"]}
              options={["Nunca", "A veces", "A menudo"]}
              register={register}
              name="H"
              type={"Experiencia en uso de sitios web"}
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

export default ProfessorType;
