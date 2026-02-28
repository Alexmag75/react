import type {IProducts} from "../../models/products/IProducts.ts";
import type {FC} from "react";
import './Product.css'

type Props = {
    product: IProducts;
}

export const Product: FC<Props> = ({ product }) => {
    return (
        /* Главный контейнер карточки товара */
        <div className="product-card">

            {/* Обертка для изображения и SKU (артикула) */}
            <div className="product-image-wrapper">
                 <img src={product.thumbnail} alt={product.title} className="product-image" />
                <span className="product-sku">{product.sku}</span>
            </div>

            {/* Контейнер с текстовой информацией о товаре */}
            <div className="product-info">
                <p className="product-brand">{product.brand}</p>
                <h3 className="product-title">{product.title}</h3>

                {/* Блок с ценой и рейтингом */}
                <div className="product-meta">
                    <span className="product-price">${product.price}</span>
                    <span className="product-rating">★ {product.rating}</span>
                </div>

                {/* Логика в className преобразует "In Stock" в "in-stock", чтобы применить нужный цвет в CSS */}
                <p className={`product-status ${product.availabilityStatus.replace(/\s+/g, '-').toLowerCase()}`}>
                    {product.availabilityStatus}
                </p>
            </div>
        </div>
    );
};