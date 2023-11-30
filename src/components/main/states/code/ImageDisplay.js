function ImageDisplay({ url }){
    return (
        <div id="image-container">
            <img src={url} alt="repo file" />
        </div>
    )
}

export default ImageDisplay;
