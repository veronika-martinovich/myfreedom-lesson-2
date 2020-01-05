import React from "react";
import { NavDropdownMenu } from "./nav-dropdown-menu";

class Nav extends React.Component {
  state = {
    navItems: [
      { name: "Home", href: "index.html" },
      { name: "Shop", href: "#", hasDropdown: true },
      { name: "About", href: "about.html" },
      { name: "Blog", href: "blog.html" },
      { name: "Contact", href: "contact.html" },
      { name: "[0]", href: "cart.html", hasCart: true }
    ]
  };

  render() {
    return (
      <ul className="navbar-nav ml-auto">
        {this.state.navItems.map((item, index) => {
          let dropdownMenu;
          let cart;
          if (item.hasDropdown) {
            dropdownMenu = <NavDropdownMenu />;
          }
          if (item.hasCart) {
            cart = <span className="icon-shopping_cart"></span>;
          }

          return (
            <li
              key={index}
              className={
                item.hasDropdown
                  ? "nav-item active dropdown"
                  : item.hasCart
                  ? "nav-item cta cta-colored"
                  : "nav-item"
              }
            >
              <a
                href={item.href}
                className={
                  item.hasDropdown ? "nav-link dropdown-toggle" : "nav-link"
                }
                id={item.hasDropdown ? "dropdown04" : ""}
                data-toggle={item.hasDropdown ? "dropdown" : ""}
                aria-haspopup={item.hasDropdown ? "true" : ""}
                aria-expanded={item.hasDropdown ? "false" : ""}
              >
                {cart}
                {item.name}
              </a>
              {dropdownMenu}
            </li>
          );
        })}
      </ul>
    );
  }
}

export { Nav };
