import React from "react";

const FormText = (props) => {
  return (
    <div className="relative">
      <input
        type={props?.form?.type}
        ref={props?.form?.ref}
        value={props?.form?.defaultValue}
        id={`${props?.form?.name}Id`}
        name={props?.form?.name}
        autoComplete={"off"}
        onChange={props.onEventChange}
        className="block px-2.5 pl-[1.5rem] pb-2.5 pt-4 w-full text-md text-gray-900 bg-transparent border border-black  outline-none rounded-[100px] bg-white border-1 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
        placeholder=" "
      />
      <label
        htmlFor={props.form.htmlFor}
        className="absolute text-md text-slate-600 duration-300 transform origin-[0] bg-white  px-2  peer-focus:text-blue-600  peer-placeholder-shown:scale-100 -top-3 left-4">
        {props.form.label}
      </label>
    </div>
  );
};

export default FormText;
