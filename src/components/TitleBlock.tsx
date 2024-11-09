import { Clock } from 'lucide-react';

const TitleBlock = () => {
  return (
      <div className="inspo-block">
          <h1 className="header-1-text">Bunny</h1>
          <h1 className="info-text"style={{ display: "inline-flex", alignItems: "center" }}><Clock style={{ marginRight: "8px" }}/> Created October 15, 2024</h1>
          <h1 className="info-text">+ Add tags</h1>
      </div>
  );
};

export default TitleBlock;
