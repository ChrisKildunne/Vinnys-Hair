import ProductListItem from "../ProductListItem/ProductListItem";
import './ProductList.css'

export default function ProductList({ productItems, handleAddToCart, user, isPaid }) {
    const products = productItems.map( product =>
        <ProductListItem 
        key={product._id}
        productItem={product}
        handleAddToCart={handleAddToCart}
        user={user}
        />
        );
        return (
            <main className="ProductList">
                {products}
            </main>
        )
}