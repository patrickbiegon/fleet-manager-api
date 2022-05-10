 const LoadingButton = ({isSubmitting, onSubmit, classes, children}) => {
     return (
        <button
        type="submit"
        className={`btn btn-primary ${classes ?? ""}`}
        data-kt-users-modal-action="submit"
        data-kt-indicator={isSubmitting ? "on" : "off"}
        onSubmit={onSubmit}
        disabled={isSubmitting ? isSubmitting : false}
      >
        <span className="indicator-label">{children}</span>
        <span className="indicator-progress">
          Please wait...
          <span className="spinner-border spinner-border-sm align-middle ms-2" />
        </span>
      </button>
     )
 }

 export default LoadingButton;