function Product({ name, category, price }) {
  return (
    <div className="col-md-4">
      <div className="card" style={{ width: "21rem" }}>
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">Price: {price}</p>
          <p className="card-text">Category: {category}</p>
        </div>
      </div>
    </div>
  );
}

export default Product;
