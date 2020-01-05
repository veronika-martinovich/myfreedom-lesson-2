import React from "react";

class FooterMenu extends React.Component {
  state = {
    menuItems: [
      { name: "Shop", href: "#" },
      { name: "About", href: "#" },
      { name: "Journal", href: "#" },
      { name: "Contact Us", href: "#" }
    ]
  };
  render() {
    return (
      <div className="col-md">
        <div className="ftco-footer-widget mb-4 ml-md-5">
          <h2 className="ftco-heading-2">Menu</h2>
          <ul className="list-unstyled">
            {this.state.menuItems.map((item, index) => (
              <li key={index}>
                <a href={item.href} className="py-2 d-block">
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

export { FooterMenu };
