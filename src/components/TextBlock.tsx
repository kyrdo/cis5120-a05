const TextBlock = ({ title = "Your title here", points = ["point 1", "point 2"]}: { title: string; points: string[] }) => {
    return (
        <div className="inspo-block">
            <h1 className="header-2-text">{title}</h1>
            {points.map((point, index) => (
                <h1 key={index} className="info-text">• {point}</h1>
            ))}
        </div>
    );
};

export default TextBlock;
