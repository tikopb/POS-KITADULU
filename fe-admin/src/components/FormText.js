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
        className="block px-2.5 pl-[1.5rem] pb-2.5 pt-4 w-full text-md text-gray-900 bg-transparent border border-gray-300  outline-none rounded-[100px] bg-white border-1 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
        placeholder=" "
      />
      <label
        htmlFor={props.form.htmlFor}
        className="absolute text-md text-slate-600 duration-300 bg-gray-50 grid place-items-center rounded-[100px] border-none h-[50px] transform -translate-y-3 scale-75 origin-[0] peer-focus:bg-white  px-5  peer-focus:text-blue-600 peer-focus:px-1 peer-focus:h-auto  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2  peer-focus:top-3 peer-focus:scale-100 peer-focus:-translate-y-6 -top-3 left-1 peer-focus:left-5">
        {props.form.label}
      </label>
    </div>
  );
};

export default FormText;
