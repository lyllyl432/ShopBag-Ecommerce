import React from "react";
import axios from "axios";
import BrandSelection from "../BrandSelection";
import Selector from "../Selector";
import { API_KEY } from "../../../constants";
import { LevelContext } from "../../../Context/LevelContext";

export default class BrandList extends React.Component {
    state = {
        brands: {},
        selectedBrand: "All Brands",
    };
    #accessToken = API_KEY;

    componentDidMount() {
        axios
            .get("http://127.0.0.1:80/api/v1/brands", {
                headers: { Authorization: `Bearer ${this.#accessToken}` },
            })
            .then((res) => {
                const brands = res.data;
                this.setState({ brands });
            })
            .catch((error) => {
                // Handle errorsconsole.error('Error:', error.message);
                console.log(error);
            });
    }
    handleOnClick = (e, setBrandId) => {
        const id = e.target.dataset.brandId;
        setBrandId(id);
        this.setState({
            selectedBrand: e.target.dataset.brandName,
        });
    };

    render() {
        return (
            <LevelContext.Consumer>
                {({ brandId, setBrandId }) => (
                    <Selector
                        className="bg-white px-4 py-2 relative rounded-lg flex-1 xl:flex-initial xl:basis-52 cursor-pointer md:self-stretch"
                        title="BRANDS"
                        selected={this.state.selectedBrand}
                    >
                        <li
                            onClick={(e) => this.handleOnClick(e, setBrandId)}
                            data-brand-id={null}
                            data-brand-name="All Brands"
                            className="hover:underline"
                        >
                            All Brands
                        </li>
                        {this.state.brands.data
                            ? this.state.brands.data.map((brand) => (
                                  <BrandSelection
                                      key={brand.id}
                                      brand={brand}
                                      setBrandId={setBrandId}
                                      handleOnClick={this.handleOnClick}
                                  />
                              ))
                            : ""}
                    </Selector>
                )}
            </LevelContext.Consumer>
        );
    }
}
