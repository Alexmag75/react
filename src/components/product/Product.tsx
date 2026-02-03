import { type FC } from "react";
import './Product.css'
import type { ProductsModule } from "../../modules/ProductsModule.ts";

type PropType = {
    product: ProductsModule;
};
export const Product: FC<PropType> = ({ product }) => {
     const discountedPrice = (
        product.price * (1 - product.discountPercentage / 100)
    ).toFixed(2);
    return (
        <div className='cardStyle'>
             <div style={{ textAlign: "center" }}>
                <img src={product.thumbnail} alt={product.title} className='imageStyle' />
            </div>
            <h2>{product.title}</h2>
            <p><i>{product.brand}</i> | Категория: <b>{product.category}</b></p>
            <p>{product.description}</p>
            <div className='priceContainer' >
                <span className='oldPrice'>${product.price}</span>
                <span className='currentPrice'>${discountedPrice}</span>
                <span className='discountBadge'>-{product.discountPercentage}%</span>
            </div>
            <hr />
            <div>
                <h4>Характеристики:</h4>
                <ul>
                    <li>Рейтинг: ⭐ {product.rating}</li>
                    <li>На складе: {product.stock} шт. ({product.availabilityStatus})</li>
                    <li>Размеры: {product.dimensions.width} x {product.dimensions.height} x {product.dimensions.depth} см</li>
                    <li>Вес: {product.weight} кг</li>
                </ul>
            </div>
            <div style={{ marginBottom: '10px' }}>
                {product.tags.map((tag, index) => (
                    <span key={index} className='tagStyle'>#{tag}</span>
                ))}
            </div>
            <hr />
            <div>
                <h4>Отзывы клиентов ({product.reviews.length}):</h4>
                {product.reviews.length > 0 ? (
                    product.reviews.map((review, index) => (
                        <div key={index} className='reviewStyle'>
                            <strong>{review.reviewerName}</strong> (Оценка: {review.rating}/5)
                            <p style={{ margin: "5px 0" }}>{review.comment}</p>
                            <small>{new Date(review.date).toLocaleDateString()}</small>
                        </div>
                    ))
                ) : (
                    <p>Отзывов пока нет.</p>
                )}
            </div>
            <p >Артикул: {product.sku}</p>
        </div>
    );
};