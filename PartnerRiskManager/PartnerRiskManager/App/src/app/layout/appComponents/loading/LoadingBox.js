import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";

const LoadingBox = ({isLoading}) => {
    return (
        <div className="loader">
            <ClimbingBoxLoader loading={isLoading} color="#009ef7" size={30} />
        </div>
    )
}

export default LoadingBox;