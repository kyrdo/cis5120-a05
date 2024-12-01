const ImageBlock = ({ src = "src/assets/image-tile.png" }) => {
    return (
        <div className="inspo-block">
            <img
                src={src}
                alt="Image Block"
                style={{ borderRadius: "16pt" }}
                className="image-style max-w-full max-w-[290px]"
            />
        </div>
    );
};

export default ImageBlock;