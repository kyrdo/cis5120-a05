import { Clock } from 'lucide-react';
import '../css/TitleBlock.css';

const TitleBlock = ({ title = "My New Project", creationDate = "December 6, 2024", tags = "+ Add tags" }) => {
  return (
      <div className="inspo-block">
          <input placeholder={title}></input>
          <h1 className="info-text"style={{ display: "inline-flex", alignItems: "center" }}><Clock style={{ marginRight: "8px" }}/> {creationDate} </h1>
          <h1 className="info-text">{tags}</h1>
      </div>
  );
};

export default TitleBlock;
