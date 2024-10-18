import React from "react";
import axios from "axios";
import BrandSelection from "../BrandSelection";
import Selector from "../Selector";

export default class BrandList extends React.Component {
    state = {
        brands: {},
        selectedBrand: "TRIAL",
    };
    #accessToken = "7|Xt27EeIh3cvAYPiWj009Qt5FEPzYEGtC8rdbHAgscfef42fa";

    componentDidMount() {
        axios
            .get("http://127.0.0.1:80/api/v1/brands", {
                headers: { Authorization: `Bearer ${this.#accessToken}` },
            })
            .then((res) => {
                const brands = res.data;
                console.log(brands);
                this.setState({ brands });
            })
            .catch((error) => {
                // Handle errorsconsole.error('Error:', error.message);
                console.log(error);
            });
    }

    render() {
        return (
            <>
                <Selector
                    className="bg-white px-4 py-2 relative rounded-lg flex-1 xl:flex-initial xl:basis-52 cursor-pointer md:self-stretch"
                    title="BRANDS"
                    selected={this.state.selectedBrand}
                >
                    {this.state.brands.data
                        ? this.state.brands.data.map((brand) => (
                              <BrandSelection brand={brand} />
                          ))
                        : ""}
                </Selector>
            </>
        );
    }
}
