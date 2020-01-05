import React from "react";

class FooterVegefoods extends React.Component {
  state = {
    socialMedia: [
      { name: "twitter", href: "#" },
      { name: "facebook", href: "#" },
      { name: "instagram", href: "#" }
    ]
  };
  render() {
    return (
      <div className="col-md">
        <div className="ftco-footer-widget mb-4">
          <h2 className="ftco-heading-2">Vegefoods</h2>
          <p>
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia.
          </p>
          <ul className="ftco-footer-social list-unstyled float-md-left float-lft mt-5">
            {this.state.socialMedia.map((item, index) => (
              <li key={index}>
                <a href={item.href}>
                  <span className={`icon-${item.name}`}></span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export { FooterVegefoods };
