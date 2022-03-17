import React from "react";

interface Props {
  children: string;
  onClick?: (event: any) => void;
  className?: string;
  type?: "button" | "submit";
}

const Button: React.FC<Props> = (props) => {
  return (
    <button
      type={props.type}
      className={`border-2 border-x-blue-400 border-opacity-80 
                border-y-pink-400 p-2 rounded-md 
                text-center w-40 shadow-md hover:text-lg h-12 ${props.className}`}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

Button.defaultProps = {
  type: "button",
};

export default React.memo(Button);
