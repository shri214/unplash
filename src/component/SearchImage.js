import axios from "axios";
import { useEffect, useState } from "react";

const SearchImage = ({ addImage, NoOfPage }) => {
  let arr = [
    "cat",
    "dog",
    "nature",
    "city",
    "Lord shiva",
    "Lord Ram",
    "Lord krishna",
    "forest",
  ];

  console.log(NoOfPage);
  let ind = Math.floor(Math.random() * arr.length);
  // console.log(arr[ind]);
  let [search, setSearch] = useState(arr[ind]);
  useEffect(() => {
    getImage();
  }, [NoOfPage]);

  function getImage() {
    axios
      .get("https://api.unsplash.com/search/photos", {
        params: {
          client_id: process.env.REACT_APP_ACCESS_KEY,
          query: search,
          per_page: 10 * NoOfPage,
        },
      })
      .then((res) => {
        // console.log(res.data.results);
        addImage(res.data.results);
      })
      .catch((err) => {
        console.log("error", err);
      });
  }

  useEffect(() => {
    getImage();
  }, []);

  return (
    <div className="search-box">
      <input
        onChange={(e) => setSearch(e.target.value)}
        value={search}
        type="search"
        placeholder="search Image"
        className="Search-bar"
      />
      <div className="btn-box">
        <button onClick={getImage} className="search-btn">
          search
        </button>
      </div>
    </div>
  );
};
export default SearchImage;
