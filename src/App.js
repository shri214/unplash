import React, { useState } from "react";
import SearchImage from "./component/SearchImage";
import Display from "./Display";

import "./style.css";

function App() {
  let [pageNumber, setPageNumber] = useState(1);
  let [image, setImage] = useState([]);
  return (
    <>
      <SearchImage addImage={setImage} NoOfPage={pageNumber} />
      <Display Image={image} />
      <button onClick={() => setPageNumber(pageNumber + 1)} className="btns">
        See More
      </button>
    </>
  );
}

export default App;
