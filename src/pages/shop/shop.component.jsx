import React from "react";
import SHOP_DATA from "./shop.data";
import CollectionsPreview from "../../components/collections-preview/collections-preview.component";

class ShopPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      collections: SHOP_DATA,
    };
  }

  render() {
    const { collections } = this.state;
    return (
      <div className="shop-page">
        {collections.map(({ id, ...othercollectionProps }) => (
          <CollectionsPreview key={id} {...othercollectionProps} />
        ))}
      </div>
    );
  }
}

export default ShopPage;
