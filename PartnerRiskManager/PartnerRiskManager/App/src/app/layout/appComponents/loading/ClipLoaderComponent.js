import ClipLoader from "react-spinners/ClipLoader";

const ClipLoaderComponent = ({isLoading, className}) => {
    return (
        <div className={className ?? "loader"}>
            <ClipLoader loading={isLoading} color="#009ef7" size={30} />
        </div>
    )
}

export default ClipLoaderComponent;