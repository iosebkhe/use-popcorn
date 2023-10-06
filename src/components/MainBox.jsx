import { useState } from "react";
import PropTypes from "prop-types";


const MainBox = ({ children }) => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="box">
      <button className="btn-toggle" onClick={() => setIsOpen((open) => !open)}>
        {isOpen ? "–" : "+"}
      </button>

      {isOpen && children}
    </div>
  );
};

MainBox.propTypes = {
  children: PropTypes.node,
};

export default MainBox;