import SectionHeader from "../components/layout/SectionHeader/SectionHeader";
import { useForm } from "react-hook-form";
import CalcButton from "../components/CalcButton";
import ResponseItem from "../components/ResponseItem";
import { useState } from "react";
import exercise from "../service/exercise";

const GuessLearningStyle = () => {
    const { register, handleSubmit,formState: { errors } } = useForm();
    const instructions = [
        "Para el correcto funcionamiento del algoritmo debe ingresar el recinto.",
        "Debe seccionar Su último promedio de matrícula y su sexo.",
        "El algoritmo puede no ser preciso."
     ];
     const [isLoading, setIsloading] = useState(false);
     const [result, setResult]=useState(null);
    const handleResults = (data) => {
        exercise.getGuessStyle({genre: data.genre, avr: Number(data.avr), place: data.place}).then(response=>{
            setResult(response);
        });
    }
    return (
        <div className="container__">
            <SectionHeader instructionTitle="Adivinar estilo de aprendizaje" title= "Adivinar estilo de aprendizaje" instructions={instructions}/>
            <hr/>
            <form className="algorithm__form" noValidate onSubmit={handleSubmit(handleResults)}>
                <div className="form__item_group">
                    <div className="form__item">
                    <ResponseItem advanced={true} options={["M","F"]} register={register} name="genre" type={" Sexo"}/>
                    </div>
                    <div className="form__item">
                        <label>Prom. Matricula: </label>
                        <input {...register("avr",{ required: errors?true:false })} type={"number"}></input>
                        {
                            errors?
                                errors["avr"] && <p style={{color:"red", fontSize:"15px"}}>{"*ingrese promedio"}</p>
                            :
                                <></>
                        }
                    </div>
                    <div className="form__item">
                    <ResponseItem advanced={true} options={["Turrialba","Paraiso"]} register={register} name="place" type={" Recinto"}/>
                    </div>
                </div>
                <CalcButton/>
            </form>
            {
            result?
                <div className="result__">
                    <p>¡Su estilo de aprendizaje es: {result}!</p>
                </div>
            :
                <></>
            }
        </div>
    );
}

export default GuessLearningStyle;