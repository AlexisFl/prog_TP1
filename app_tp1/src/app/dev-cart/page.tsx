"use client";
import { PRODUCTS_CATEGORY_DATA } from "tp-kit/data";
import { Button, ProductCardLayout, SectionContainer } from "tp-kit/components";
import {ProductCartLine} from "tp-kit/components/products/product-cart-line";
import {FormattedPrice} from "tp-kit/components/data-display";
const products = PRODUCTS_CATEGORY_DATA[0].products.slice(0, 3);


export default function DevCartPage() {
    return (
        <SectionContainer
            className="py-36"
            wrapperClassName="flex flex-col lg:flex-row gap-24"
        >
            {/* Produits */}
            {/*<section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 flex-1">
                {products.map((product) => (
                    <ProductCardLayout
                        key={product.id}
                        product={product}
                        button={<Button variant={"ghost"} fullWidth>Ajouter au panier</Button>}
                    />
                ))}
            </section>*/}
            {/* /Produits */}

            {/* Panier */}
            <section className="w-full lg:w-1/3 space-y-8">
                <h2 className="text-lg font-semibold mb-8 tracking-tight">Mon Panier</h2>
                <div className="flex justify-between items-center">
                    <span className="text-lg font-semibold">
                        <ProductCartLine
                            product={products[0]}
                            qty={1}
                        />
                    </span>
                </div>
                <div className="flex justify-between items-center">
                    <span className="text-lg font-semibold">
                        <ProductCartLine
                            product={products[1]}
                            qty={2}
                        />
                    </span>
                </div>
                <div className="flex justify-between items-center">
                    <span className="text-lg font-semibold">Total</span>
                    <span className="text-lg font-semibold">
                        <FormattedPrice price={products[0].price + products[1].price * 2} />
                    </span>
                </div>

                <Button variant={"outline"} fullWidth>Vider le panier</Button>
            </section>
            {/* /Panier */}
        </SectionContainer>
    );
}