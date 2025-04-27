import { useState, useEffect } from "react";

const List = () => {
  const [product, setProduct] = useState([]);
  const [filtered, setFiltered] = useState("");
  const [updatedFilter, setUpdatedFilter] = useState([]);
  const [rating, setRating] = useState(false);

  const fetchData = async () => {
    const data = await fetch("https://dummyjson.com/recipes");
    const res = await data.json();
    setProduct(res.recipes);
    setUpdatedFilter(res.recipes);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const applyFilter = (searchTerm,ratingChecked) => {
    let filteredItems = product
   
    if(searchTerm) {
        const lowercasedFiltered = searchTerm.toLowerCase();
        filteredItems =filteredItems.filter((e) => {
         return (
           e.name.toLowerCase().includes(lowercasedFiltered) ||
           e.cuisine.toLowerCase().includes(lowercasedFiltered) ||
           e.tags[0].toLowerCase().includes(lowercasedFiltered) // Filter by tags if present
         );
       });
    }
    if(ratingChecked) {
       filteredItems =  filteredItems.filter((item)=>item.rating > 4.5)
    }
    setUpdatedFilter(filteredItems);
  }

  const handleInputChange = (e) => {
   const search = e?.target?.value;
   setFiltered(search);
  };

  const handleCheckboxChange = (e) => {
    const isChecked = e.target.checked;
    setRating(isChecked);
    applyFilter(filtered, isChecked);
  };

  const handleSearchClick = () => {
    applyFilter(filtered,rating);
  }

  const handleReset = () => {
    setFiltered("");
  setRating(false); // Also reset checkbox
  setUpdatedFilter(product);
  }

  return (
    <div>
      <div>
        <input type={"text"} value={filtered} onChange={handleInputChange} />
        <button onClick={handleSearchClick}>Search</button>
        <button onClick={handleReset}>Reset</button>
      </div>
      <div>
        <input
          type="checkbox"
          onChange={handleCheckboxChange}
          checked={rating}
        />
      </div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Cuisine</th>
            <th>Tags</th>
            <th>Rating</th>
          </tr>
        </thead>
        <tbody>
          {updatedFilter.map((item, i) => {
            return (
              <tr key={item.id}>
                <td>{item.name}</td>
                <td>{item.cuisine}</td>
                <td>{item.tags[0] || "No Tags"}</td>
                <td>{item.rating}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default List;
