import React, { useState } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import UI from "../../../../styles/UI.module.scss";
type SelectProps = {
  options: { label: string; value: string }[];
  value: { label: string; value: string };
  setValue: React.Dispatch<
    React.SetStateAction<{
      label: string;
      value: string;
    }>
  >;
};

const Select: React.FC<SelectProps> = ({ options, value, setValue }) => {
  const [toggle, setToggle] = useState(false);
  if (!value) setValue(options[0]);
  return (
    <div className={`${UI.selectContainer}`}>
      <span className={`${UI.selectContainer_current}`}>{value.label}</span>
      <ul
        className={`${UI.selectOptionsContainer} ${!toggle && UI.optionsHide}`}
      >
        {options.map((opt) => (
          <li
            onClick={() => {
              setValue(opt);
              setToggle((prev) => !prev);
            }}
            className={`${UI.selectOptionsContainer_item}`}
            key={opt.value}
          >
            {opt.label}
          </li>
        ))}
      </ul>
      <div onClick={() => setToggle((prev) => !prev)}>
        {toggle ? <FiChevronUp /> : <FiChevronDown />}
      </div>
    </div>
  );
};
export default Select;
