import React from "react";
import axios from "axios";
import Product from "../Product";
export default class ProductList extends React.Component {
    state = {
        products: {},
    };
    #accessToken = "7|Xt27EeIh3cvAYPiWj009Qt5FEPzYEGtC8rdbHAgscfef42fa";
    componentDidMount() {
        this.fetchProducts();
    }
    componentDidUpdate(prevProps) {
        // Check if brandId or categoryId props have changed
        if (
            prevProps.brandId !== this.props.brandId ||
            prevProps.categoryId !== this.props.categoryId
        ) {
            this.fetchProducts(); // Re-fetch the products when the props change
        }
    }
    fetchProducts() {
        const { brandId, categoryId } = this.props;
        let url = "http://127.0.0.1:80/api/v1/products";
        // Check if either brandId or categoryId exists, and append them as query parameters
        if (brandId || categoryId) {
            const params = new URLSearchParams();

            // Add brandId if it exists
            if (brandId) {
                params.append("brand_id", brandId);
            }

            // Add categoryId if it exists
            if (categoryId) {
                params.append("category_id", categoryId);
            }

            // Append the query parameters to the base URL
            url = `${url}?${params.toString()}`;
        }
        console.log(url);
        // Make the API request
        axios
            .get(url, {
                headers: { Authorization: `Bearer ${this.#accessToken}` },
            })
            .then((res) => {
                console.log(res);
                const products = res.data;
                this.setState({ products });
            })
            .catch((error) => {
                console.error("Error:", error.message);
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
