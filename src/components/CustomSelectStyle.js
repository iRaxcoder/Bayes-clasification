const CustomSelectStyle = ({ register, name, ...rest }) =>{
  return (
    <select {...register(name)} {...rest}>
      <option key={1} value={1}>1</option>
      <option key={2} value={2}>2</option>
      <option key={3} value={3}>3</option>
      <option key={4} value={4}>4</option>
  </select>
  )
}

export default CustomSelectStyle;