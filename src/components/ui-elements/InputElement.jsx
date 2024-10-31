
const InputElement = ({name,label,type ,placeholder , }  ) => {
  return (
    <>
    <label htmlFor={name|undefined}>{label|""}</label>
    <input type={type | "text"}  />
    </>

  )
}

export default InputElement