import type {FC} from "react";
import type {CartsModel} from "../modeles/Carts/CartsModel.ts";
import './CartComponent.css'

type PropType ={
    cart:CartsModel
}

export const CartComponent:FC<PropType>=({cart})=>{
    return (
        <div className='styles.container'>
            <h1 className='styles.title'>Shopping Cart</h1>

            <div className='styles.cartInfo'>
                <p><strong>User ID:</strong> {cart.userId}</p>
                <p><strong>Total Products:</strong> {cart.totalProducts}</p>
                <p><strong>Total Quantity:</strong> {cart.totalQuantity}</p>
            </div>

            <div className='styles.productsContainer'>
                <h2 className='styles.subtitle'>Products</h2>
                {cart.products?.map((product) => (
                    <div key={product.id} className='styles.productCard'>
                        <img src={product.thumbnail} alt={product.title} className='styles.thumbnail' />
                        <div className='styles.productInfo'>
                            <h3 className='styles.productTitle'>{product.title}</h3>
                            <p><strong>Price:</strong> ${product.price}</p>
                            <p><strong>Quantity:</strong> {product.quantity}</p>
                            <p><strong>Subtotal:</strong> ${product.total}</p>
                            <p><strong>Discount:</strong> {product.discountPercentage}%</p>
                            <p className='styles.discountedPrice'>
                                <strong>Discounted Price:</strong> ${product.discountedTotal}
                            </p>
                        </div>
                    </div>
                ))}
            </div>

            <div className='styles.totalsContainer'>
                <div className='styles.totalRow'>
                    <span><strong>Original Total:</strong></span>
                    <span>${cart.total}</span>
                </div>
                <div className='styles.totalRow'>
                    <span><strong>Discounted Total:</strong></span>
                    <span className='styles.discountedTotal'>${cart.discountedTotal}</span>
                </div>

            </div>
        </div>
    );
};