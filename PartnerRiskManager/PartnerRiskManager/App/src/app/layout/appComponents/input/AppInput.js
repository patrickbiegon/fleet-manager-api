const AppInput = ({ name, label, type, placeholder, value, onChange, labelClasses, inputClasses, displayOnSameColon }) => {
  return (
    <>
      <label className={labelClasses ? labelClasses : "d-flex align-items-center fs-6 fw-bold mb-2"}>{label}</label>
      {!displayOnSameColon &&
        <input
          type={type ? type : "text"}
          name={name}
          className={inputClasses ? inputClasses : "form-control form-control-solid"}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
      }

      {displayOnSameColon &&
        <div className="col-lg-8 fv-row">
          <input
            type={type ? type : "text"}
            name={name}
            className={inputClasses ? inputClasses : "form-control form-control-solid"}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
          />
        </div>
      }
      <div class="fv-plugins-message-container invalid-feedback"></div>
    </>
  )
}

export default AppInput;