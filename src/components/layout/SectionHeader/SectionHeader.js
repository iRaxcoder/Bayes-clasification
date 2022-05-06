import Instruction from "../../Instruction.js"
const SectionHeader = (props) => (
    <div className='instruction__'>
            <h2>{props.title}</h2>
            <Instruction title={props.instructionTitle} instructions={props.instructions}/>
    </div>
);

export default SectionHeader;