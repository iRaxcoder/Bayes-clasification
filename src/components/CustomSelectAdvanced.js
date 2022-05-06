const CustomSelectAdvanced = ({ register, name, val, options, ...rest }) =>{
    return (
      <select {...register(name)} {...rest}>
          {options.map((object,i)=>(
              val?<option key={i} value={val[i]}>{object}</option>
              :
              <option key={i} value={object}>{object}</option>
          ))}
    </select>
    )
  }
  
  export default CustomSelectAdvanced;