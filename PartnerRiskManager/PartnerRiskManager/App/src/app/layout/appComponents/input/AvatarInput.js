import BlankUserImg from "../../../../assets/media/avatars/blank.png";

const AvatarInput = ({userAvatar, className, setFormValues}) => {
    const showImgPreview = event => {
        if (event.target.files && event.target.files[0]) {
            let imgFile = event.target.files[0];
            const reader = new FileReader();
            reader.onload = x => {
                setFormValues(prevState => {
                    return {
                        ...prevState,
                        imgFile,
                        imgSrc: x.target.result
                    }
                })
            };
            reader.readAsDataURL(imgFile)
        }
    }


    return (
        <div className={className ? className : undefined}>
            <label className="d-block fw-bold fs-6 mb-5">Avatar</label>
            <div
                className={`image-input image-input-outline ${!userAvatar && 'image-input-empty'}`}
                data-kt-image-input="true"
                style={{
                    backgroundImage: `url(${BlankUserImg})`
                }}
            >
                <div
                    className="image-input-wrapper w-125px h-125px"
                    style={{
                        backgroundImage: userAvatar ? `url(${userAvatar})` : 'none',
                        backgroundPosition: "center"
                    }}
                />
                <label
                    className="btn btn-icon btn-circle btn-active-color-primary w-25px h-25px bg-body shadow"
                    data-kt-image-input-action="change"
                    data-bs-toggle="tooltip"
                    title="Change avatar"
                >
                    <i className="bi bi-pencil-fill fs-7" />
                    <input type="file" name="avatar" accept=".png, .jpg, .jpeg" onChange={showImgPreview} />
                    <input type="hidden" name="avatar_remove" />
                </label>
                <span
                    className="btn btn-icon btn-circle btn-active-color-primary w-25px h-25px bg-body shadow"
                    data-kt-image-input-action="cancel"
                    data-bs-toggle="tooltip"
                    title="Cancel avatar"
                >
                    <i className="bi bi-x fs-2" />
                </span>
                <span
                    className="btn btn-icon btn-circle btn-active-color-primary w-25px h-25px bg-body shadow"
                    data-kt-image-input-action="remove"
                    data-bs-toggle="tooltip"
                    title="Remove avatar"
                    onClick={() => setFormValues(prevState => {
                        return {
                            ...prevState,
                            imgFile: null,
                            imgSrc: ""
                        }
                    })}
                >
                    <i className="bi bi-x fs-2" />
                </span>
            </div>
            <div className="form-text">
                Allowed file types: png, jpg, jpeg.
            </div>
        </div>
    )
}

export default AvatarInput;