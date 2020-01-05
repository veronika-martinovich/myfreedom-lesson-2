import React from "react";

class NavDropdownItem extends React.Component {
  state = {
    dropdownItems: [
      { name: "Shop", href: "shop.html" },
      { name: "Wishlist", href: "wishlist.html" },
      { name: "Single Product", href: "product-single.html" },
      { name: "Cart", href: "cart.html" },
      { name: "Checkout", href: "checkout.html" }
    ]
  };

  render() {
    return this.state.dropdownItems.map((item, index) => (
      <a className="dropdown-item" href={item.href} key={index}>
        {item.name}
      </a>
    ));
  }
}

export { NavDropdownItem };
