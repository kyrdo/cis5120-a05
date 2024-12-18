import imageUrl from '../assets/image-tile.png';
const ImageBlock = ({ src = imageUrl}) => {
    return (
        <div className="inspo-block">
            <img
                src={src}
                alt="Image Block"
                style={{ borderRadius: "16pt" }}
                className="max-w-[296px]"
            />
        </div>
    );
};

export default ImageBlock;