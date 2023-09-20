import Image from 'next/image'
import { PRODUCTS_CATEGORY_DATA } from "tp-kit/data";
import {BreadCrumbs, Button, Heading, SectionContainer} from "tp-kit/components";
import {ProductCardLayout, ProductGridLayout} from "tp-kit/components/products";
const categories = PRODUCTS_CATEGORY_DATA;

import ProductFilters from "src/components/product-filters";



export default function Home() {
  return (
    <main>
        <BreadCrumbs
            items={[
                {
                    label: 'Acceuil',
                    size: 'large',

                    url: '#'
                }
            ]}
        />
        <ProductFilters categories={categories} />
        <SectionContainer>
            {categories.map(category => (
                <div key={category.id}>
                    <BreadCrumbs items={[
                        {
                            label: category.name + ' (' + category.products.length + ')',
                            url: '#'
                        }
                    ]}/>
                    <ProductGridLayout products={category.products}>
                        {product => (
                            <ProductCardLayout product={product} button={<Button fullWidth variant="ghost">Ajouter au panier</Button>} />
                        )}
                    </ProductGridLayout>
                </div>
            ))}
        </SectionContainer>


    </main>
  )
}
