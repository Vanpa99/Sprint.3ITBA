import React from "react";
import PropTypes from "prop-types";
import reut from "../../modules/Reut.module.css";
function InputField({
  label,
  type,
  value,
  onChange,
  placeholder,
  disabled,
  id,
  required,
}) {
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input
        className={reut.inputField}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        disabled={disabled}
        id={id}
        required={required}
      />
    </div>
  );
}

InputField.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
  id: PropTypes.string.isRequired,
  required: PropTypes.bool,
};

export default InputField;
