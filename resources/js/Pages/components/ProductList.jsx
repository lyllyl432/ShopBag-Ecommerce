import React from "react";
import axios from "axios";
import Product from "./Product";

export default class ProductList extends React.Component {
    state = {
        products: {},
    };
    #accessToken = "7|Xt27EeIh3cvAYPiWj009Qt5FEPzYEGtC8rdbHAgscfef42fa";

    componentDidMount() {
        axios
            .get("http://127.0.0.1:80/api/v1/products", {
                headers: { Authorization: `Bearer ${this.#accessToken}` },
            })
            .then((res) => {
                const products = res.data;
                this.setState({ products });
            })
            .catch((error) => {
                // Handle errorsconsole.error('Error:', error.message);
                console.log(error);
            });
    }

    render() {
        return (
            <>
                {this.state.products.data
                    ? this.state.products.data.map((product) => (
                          <Product key={product.id} product={product} />
                      ))
                    : ""}
            </>
        );
    }
}
