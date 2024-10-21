import React from "react";
import axios from "axios";
import CategorySelection from "../CategorySelection";
import Selector from "../Selector";
import { LevelContext } from "../../../Context/LevelContext";

export default class CategoryList extends React.Component {
    state = {
        categories: {},
        selectedCategory: "All Categories",
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
    handleOnClick = (e, setCategoryId) => {
        const id = e.target.dataset.categoryId;
        setCategoryId(id);
        this.setState({
            selectedCategory: e.target.dataset.categoryName,
        });
    };

    render() {
        return (
            <LevelContext.Consumer>
                {({ setCategoryId }) => (
                    <Selector
                        className="bg-white px-4 py-2 relative rounded-lg flex-1 xl:flex-initial xl:basis-52 cursor-pointer md:self-stretch"
                        title="CATEGORIES"
                        selected={this.state.selectedCategory}
                    >
                        <li
                            onClick={(e) =>
                                this.handleOnClick(e, setCategoryId)
                            }
                            data-category-id={null}
                            data-category-name="All Categories"
                            className="hover:underline"
                        >
                            All Categories
                        </li>
                        {this.state.categories.data
                            ? this.state.categories.data.map((category) => (
                                  <CategorySelection
                                      key={category.id}
                                      category={category}
                                      setCategoryId={setCategoryId}
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
