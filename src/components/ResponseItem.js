import CustomSelectStyle from "./CustomSelectStyle";
import CustomSelectAdvanced from "./CustomSelectAdvanced";

const ResponseItem = (props) => (
    <div className="response__item">
        <>
        {props.advanced?
        <CustomSelectAdvanced val={props.val} options={props.options} name={props.name} register={props.register}/>
        :
        <CustomSelectStyle name={props.name} register={props.register}/>
        }
        <label>{props.type}</label>
        </>
    </div>
)

export default ResponseItem;