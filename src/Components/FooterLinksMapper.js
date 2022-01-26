import React from "react";

function FooterLinksMapper({ item, onClick }) {
  return (
    <a href="#" className="link-item">
      {item.label.length > 20
        ? `${item?.label?.substring(0, 27)}...`
        : item?.label}
    </a>
  );
}

export default FooterLinksMapper;
