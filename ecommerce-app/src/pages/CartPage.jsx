export default function BasketView() {
  return (
    <div className="text-center py-5">
      <div className="mb-4">
        <i className="bi bi-basket3 display-1 text-primary"></i>
      </div>
      <h2 className="text-primary fw-bold mb-3">Your Shopping Basket</h2>
      <p className="text-muted fs-5">Your basket is empty. Start shopping to add items!</p>
      <a href="/products" className="btn btn-warning text-dark fw-bold mt-3 px-4">
        Browse Items
      </a>
    </div>
  );
}
