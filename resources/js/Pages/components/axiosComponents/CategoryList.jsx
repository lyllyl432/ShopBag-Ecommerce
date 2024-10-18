import React from "react";
import axios from "axios";
import CategorySelection from "../CategorySelection";
import Selector from "../Selector";

export default class CategoryList extends React.Component {
    state = {
        categories: {},
        selectedCategories: "TRIAL",
    };
    #accessToken = "7|Xt27EeIh3cvAYPiWj009Qt5FEPzYEGtC8rdbHAgscfef42fa";

    componentDidMount() {
        axios
            .get("http://127.0.0.1:80/api/v1/categories", {
                headers: { Authorization: `Bearer ${this.#accessToken}` },
            })
            .then((res) => {
                const categories = res.data;
                console.log(categories);
                this.setState({ categories });
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
                    title="CATEGORIES"
                    selected={this.state.selectedCategories}
                >
                    {this.state.categories.data
                        ? this.state.categories.data.map((category) => (
                              <CategorySelection
                                  key={category.id}
                                  category={category}
                              />
                          ))
                        : ""}
                </Selector>
            </>
        );
    }
}
