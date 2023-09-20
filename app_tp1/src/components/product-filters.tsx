// créer un composant client "ProductFilters" qui affiche les filtres de recherche
//ce composant devra afficher un champ de recherche par nom de produit
//ce composant devra afficher une liste de checkboxes permettant de filtrer les produits par catégories
//ce composant devra afficher un bouton "Filtrer" qui permettra de lancer la recherche
"use client";
import { PRODUCTS_CATEGORY_DATA } from "tp-kit/data";
import {BreadCrumbs, Button, Heading, SectionContainer} from "tp-kit/components";
import {ProductCardLayout, ProductGridLayout} from "tp-kit/components/products";
const categories = PRODUCTS_CATEGORY_DATA;
import { TextInput } from '@mantine/core';
import { Checkbox } from '@mantine/core';
import { Group } from '@mantine/core';
import { useForm } from '@mantine/form';





const ProductFilters = ({categories, onChange}) => {
    const form = useForm({
        initialValues: {
            search: '',
            categories: []
        },
        validationRules: {
            search: (value) => value.trim().length > 2,
            categories: (value) => value.length > 0
        }
    });

    return (
        <form onSubmit={form.onSubmit((values) => console.log(values))}>
            <TextInput
                placeholder="Search"
                {...form.getInputProps('search')}
            />
            <Checkbox.Group
                defaultValue={['react']}
                label="Categories"
                {...form.getInputProps('categories')}
                >
                <Group>

                    {categories.map(category => (
                        <Checkbox label={category.name} value={category.slug}>{category.name}</Checkbox>

                    ))}

                </Group>
            </Checkbox.Group>
            <Button variant="ghost" type={"submit"}>Search</Button>

        </form>

    );
}

export default ProductFilters;