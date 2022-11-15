import React from "react";

const FormText = (props) => {
  return (
    <div className="form-item">
      <label
        htmlFor={props.form.htmlFor}
        className="inline-block bg-white absolute p-[0_10px] translate-x-[30px] -translate-y-[10px] text-md">
        {props.form.label}
      </label>
      <input
        type={props.form.type}
        id={`${props.form.name}Id`}
        name={props.form.name}
        className="border border-black h-14 p-[0_2rem] w-full transition duration-[5s] text-[18px] outline-none rounded-[100px] bg-white"
      />
    </div>
  );
};

export default FormText;
