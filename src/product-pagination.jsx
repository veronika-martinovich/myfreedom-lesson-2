import React from "react";

class ProductPagination extends React.Component {
  state = {
    elements: [
      { page: 1, href: "#", isActive: true },
      { page: 2, href: "#" },
      { page: 3, href: "#" },
      { page: 4, href: "#" },
      { page: 5, href: "#" }
    ]
  };

  render() {
    return (
      <div className="row mt-5">
        <div className="col text-center">
          <div className="block-27">
            <ul>
              <li>
                <a href="#">&lt;</a>
              </li>
              {this.state.elements.map((item, index) => {
                let pageType;
                if (item.isActive) {
                  pageType = <span>{item.page}</span>;
                } else {
                  pageType = <a href={item.href}>{item.page}</a>;
                }

                return (
                  <li key={index} className={item.isActive ? "active" : ""}>
                    {pageType}
                  </li>
                );
              })}
              <li>
                <a href="#" className="active">
                  &gt;
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export { ProductPagination };
