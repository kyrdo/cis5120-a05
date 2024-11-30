const ImageBlock = ({ src = "src/assets/image-tile.png" }) => {
    return (
        <div className="inspo-block">
            <img
                src={src}
                alt="Image Block"
                style={{ borderRadius: "15pt" }}
                className="image-style"
            />
        </div>
    );
};

export default ImageBlock;