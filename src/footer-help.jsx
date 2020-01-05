import React from "react";

class FooterHelp extends React.Component {
  state = {
    itemsColumn1: [
      { name: "Shipping Information", href: "#" },
      { name: "Returns &amp; Exchange", href: "#" },
      { name: "Terms &amp; Conditions", href: "#" },
      { name: "Privacy Policy", href: "#" }
    ],
    itemsColumn2: [
      { name: "FAQs", href: "#" },
      { name: "Contact", href: "#" }
    ]
  };
  render() {
    return (
      <div className="col-md-4">
        <div className="ftco-footer-widget mb-4">
          <h2 className="ftco-heading-2">Help</h2>
          <div className="d-flex">
            <ul className="list-unstyled mr-l-5 pr-l-3 mr-4">
              {this.state.itemsColumn1.map((item, index) => (
                <li key={index}>
                  <a href={item.href} className="py-2 d-block">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
            <ul className="list-unstyled">
              {this.state.itemsColumn2.map((item, index) => (
                <li key={index}>
                  <a href={item.href} className="py-2 d-block">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export { FooterHelp };
