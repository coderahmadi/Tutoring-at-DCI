import { useState } from "react";

import Product from "./Product";
import Filter from "./Filter";

function ProductList({ products }) {
    const [selectedCategory, setSelectedCategory] = useState("");

    const categories = products.reduce((accu, product) => {
        if (!accu.includes(product.category)) {
            accu.push(product.category);
        }
        return accu;
    }, []);

    const handleChange = (category) => {
        setSelectedCategory(category);
    };

    const filteredCategoriy = selectedCategory
        ? products.filter((product) => product.category === selectedCategory)
        : products;

    return (
        <div className="container pt-5 mt-5">
            <Filter
                categories={categories}
                selectedCategory={selectedCategory}
                onCateChange={handleChange}
            />

            <div className="row d-flex d-wrap justify-content-center">
                {filteredCategoriy.map((eachPro) => {
                    return (
                        <div key={eachPro.id}>
                            <Product
                                name={eachPro.name}
                                category={eachPro.category}
                                price={eachPro.price}
                            />
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default ProductList;
