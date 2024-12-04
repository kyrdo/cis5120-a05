import { Clock } from 'lucide-react';

const TitleBlock = ({ title = "My New Project", creationDate = "October 15, 2024", tags = "+ Add tags" }) => {
  return (
      <div className="inspo-block">
          <h1 className="header-1-text">{title}</h1>
          <h1 className="info-text"style={{ display: "inline-flex", alignItems: "center" }}><Clock style={{ marginRight: "8px" }}/> {creationDate} </h1>
          <h1 className="info-text">{tags}</h1>
      </div>
  );
};

export default TitleBlock;
