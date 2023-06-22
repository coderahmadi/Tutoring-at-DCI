function Filter({ categories, selectedCategory, onCateChange }) {
  const handleChange =(e)=>{
    const selectedCategory = e.target.value
    onCateChange(selectedCategory)
  }
  

  return (
    <div>
      <select name="products" id="products" value={selectedCategory} onChange={handleChange}>
        <option value="">All</option>
        {categories.map((ele,index) => {
         return <option key={index} value={ele}>
            {ele}
          </option>;
        })}
      </select>
    </div>
  );
}

export default Filter;
