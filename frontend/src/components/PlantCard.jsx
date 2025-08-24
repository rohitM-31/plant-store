const PlantCard = ({ plant }) => (
  <div className="col-md-4 mb-3">
    <div className="card h-100 shadow-sm">
      <div className="card-body">
        <h5 className="card-title">{plant.name}</h5>
        <p className="card-text">₹ {plant.price} Rs</p>
        <p className="card-text">
           Categories: {plant.categories.join(", ")}
        </p>
        <p className="card-text">
          {plant.availability ? (
            <span className="badge bg-success">In Stock</span>
          ) : (
            <span className="badge bg-danger">Out of Stock</span>
          )}
        </p>
      </div>
    </div>
  </div>
);

export default PlantCard;
