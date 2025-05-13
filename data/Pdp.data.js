const products = [
    {
        id: 87,
        optionId: 1,
        image: 'https://i.ibb.co/B5nkbZB6/image.png',
        name: 'Mochila Wayuu',
        rating: 3,
        description: 'Marron',
        normalPrice: 200000,
        discountedPrice: 180000,
        specifications: [
            { feature: "Tamaño", value: "Mediano" },
            { feature: "Color", value: "Marron" },
            { feature: "Material", value: "Algodón" }
        ],
    },
    {
        id : 88,
        optionId: 1,
        image: 'https://i.ibb.co/60m6FNLm/409156-1.png',
        name: 'Mochila Wayuu Azul',
        rating: 4,
        description: 'Azul',
        normalPrice: 340000,
        discountedPrice: 306000,
        specifications: [
            { feature: "Tamaño", value: "Grande" },
            { feature: "Color", value: "Azul" },
            { feature: "Material", value: "Algodón" }
        ],
    },
    {
        id: 89,
        optionId: 1,
        image: 'https://i.ibb.co/chy2y7Q9/mochila-wayuu-verde.png',
        name: 'Mochila Wayuu Verde',
        rating: 5,
        description: 'Verde',
        normalPrice: 200000,
        discountedPrice: 180000,
        specifications: [
            { feature: "Tamaño", value: "Pequeño" },
            { feature: "Color", value: "Verde" },
            { feature: "Material", value: "Algodón" }
        ],
    }
];
module.exports = products;
