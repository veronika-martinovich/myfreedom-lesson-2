import React from "react";

class ProductCategories extends React.Component {
  state = {
    categories: [
      { name: "All", href: "#" },
      { name: "Vegetables", href: "#", isActive: true },
      { name: "Fruits", href: "#" },
      { name: "Juice", href: "#" },
      { name: "Dried", href: "#" }
    ]
  };

  render() {
    return (
      <div className="row justify-content-center">
        <div className="col-md-10 mb-5 text-center">
          <ul className="product-category">
            {this.state.categories.map((item, index) => (
              <li key={index}>
                <a href={item.href} className={item.isActive ? "active" : ""}>
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export { ProductCategories };
