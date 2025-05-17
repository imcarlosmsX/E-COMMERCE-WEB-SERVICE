const products_plp = [
    {
        id: 87,
        optionId: 1,
        image: 'https://i.ibb.co/M5M1hVWd/mochila.png',
        name: 'Mochila Wayuu',
        rating: 3,
        description: 'Mochila Wayuu 100% Hecha a Mano',
        normalPrice: 200000,
        discountedPrice: 180000,
        specifications: [
            { feature: "Tamaño", value: "Mediano" },
            { feature: "Color", value: "Marron" },
            { feature: "Material", value: "Algodón" }
        ],
        discount: 10,
        history: 'La mochila Wayuu es un símbolo de la cultura indígena Wayuu, tejida a mano con técnicas ancestrales que se transmiten de generación en generación. Cada diseño cuenta una historia única, reflejando la conexión espiritual y cultural de los Wayuu con su entorno. Estas mochilas no solo son objetos utilitarios, sino también expresiones de identidad y resistencia cultural. El proceso de tejido puede tomar semanas, y cada figura o color usado tiene un significado específico que comunica parte del legado Wayuu.',
        demoVideo: 'https://www.youtube.com/watch?v=MSqh3NggnU0&ab_channel=DavidAr%C3%A9valo'
    },
    {
        id: 88,
        optionId: 1,
        image: 'https://i.ibb.co/60m6FNLm/409156-1.png',
        name: 'Mochila Wayuu Azul',
        rating: 4,
        description: 'Mochila Wayuu 100% Hecha a Mano',
        normalPrice: 340000,
        discountedPrice: 306000,
        specifications: [
            { feature: "Tamaño", value: "Grande" },
            { feature: "Color", value: "Azul" },
            { feature: "Material", value: "Algodón" }
        ],
        discount: 10,
        history: 'Esta mochila azul es una variación moderna de las tradicionales mochilas Wayuu. Los colores vibrantes y los patrones geométricos representan la naturaleza y las historias de la comunidad Wayuu. El color azul evoca el mar que rodea La Guajira, tierra natal del pueblo Wayuu. Es un homenaje al equilibrio entre tradición y modernidad, y una forma de compartir con el mundo la riqueza cultural de esta etnia indígena colombiana.',
        demoVideo: 'https://www.youtube.com/watch?v=MSqh3NggnU0&ab_channel=DavidAr%C3%A9valo'
    },
    {
        id: 89,
        optionId: 1,
        image: 'https://i.ibb.co/chy2y7Q9/mochila-wayuu-verde.png',
        name: 'Mochila Wayuu Verde',
        rating: 5,
        description: 'Mochila Wayuu 100% Hecha a Mano',
        normalPrice: 200000,
        discountedPrice: 180000,
        specifications: [
            { feature: "Tamaño", value: "Pequeño" },
            { feature: "Color", value: "Verde" },
            { feature: "Material", value: "Algodón" }
        ],
        discount: 10,
        history: 'La mochila Wayuu verde simboliza la conexión con la naturaleza. Cada pieza es tejida con dedicación y refleja la armonía entre los Wayuu y su entorno. El verde representa la vegetación de los oasis en medio del árido desierto guajiro. Esta mochila es una celebración de la vida, la esperanza y el respeto por la tierra, elementos fundamentales en la cosmovisión Wayuu.',
        demoVideo: 'https://www.youtube.com/watch?v=MSqh3NggnU0&ab_channel=DavidAr%C3%A9valo'
    },
    {
        id: 90,
        optionId: 1,
        image: 'https://i.ibb.co/WN1vrMnW/35049-venta-ig-labs-album5-04-1-n.png',
        name: 'Mochila Wayuu Amarilla',
        rating: 4,
        description: 'Mochila Wayuu 100% Hecha a Mano',
        normalPrice: 340000,
        discountedPrice: 306000,
        specifications: [
            { feature: "Tamaño", value: "Grande" },
            { feature: "Color", value: "Amarillo" },
            { feature: "Material", value: "Algodón" }
        ],
        discount: 10,
        history: 'La mochila Wayuu amarilla destaca por su diseño alegre y lleno de vida. Representa la luz del sol y la energía que impulsa a la comunidad Wayuu. Esta tonalidad es símbolo de optimismo y creatividad, y se asocia con el despertar de un nuevo día en las tierras del norte de Colombia. Su elaboración demuestra la habilidad de las artesanas Wayuu para fusionar simbolismo ancestral con diseño contemporáneo.',
        demoVideo: 'https://www.youtube.com/watch?v=MSqh3NggnU0&ab_channel=DavidAr%C3%A9valo'
    },
    {
        id: 91,
        optionId: 1,
        image: 'https://i.ibb.co/XZs1TfhW/3-C101-GSYQ-mochila-wayuu-rosada.png',
        name: 'Mochila Wayuu Rosa',
        rating: 4,
        description: 'Mochila Wayuu 100% Hecha a Mano',
        normalPrice: 100000,
        discountedPrice: 80000,
        specifications: [
            { feature: "Tamaño", value: "Grande" },
            { feature: "Color", value: "Rosa" },
            { feature: "Material", value: "Algodón" }
        ],
        discount: 20,
        history: 'La mochila Wayuu rosa es un homenaje a la creatividad y la innovación de los artesanos Wayuu. Su diseño único combina tradición y modernidad. El uso del rosa es una reinterpretación contemporánea que busca conectar con nuevas generaciones, manteniendo viva la esencia del tejido manual. Esta pieza refleja la versatilidad cultural y la capacidad de adaptación de los Wayuu a un mundo globalizado.',
        demoVideo: 'https://www.youtube.com/watch?v=MSqh3NggnU0&ab_channel=DavidAr%C3%A9valo'
    },
    {
        id: 92,
        optionId: 2,
        image: 'https://i.ibb.co/84GHZGDH/D-NQ-NP-649249-MCO74384299597-022024-O.png',
        name: 'Sombrero Vueltiao',
        rating: 4,
        description: 'Sombrero Vueltiao 100% Hecha a Mano',
        normalPrice: 350000,
        discountedPrice: 280000,
        specifications: [
            { feature: "Tamaño", value: "Adulto" },
            { feature: "Color", value: "Original" },
            { feature: "Material", value: "Paja" }
        ],
        discount: 20,
        history: 'El sombrero Vueltiao es un ícono de la cultura colombiana. Hecho a mano con paja de caña flecha, su diseño en espiral representa el movimiento de la danza y la vida cotidiana. Declarado símbolo cultural de la nación, es usado en festividades, eventos oficiales y como muestra de orgullo nacional. Cada línea y cada curva en el sombrero lleva la historia del pueblo Zenú, quienes lo han fabricado por siglos con destreza inigualable.',
        demoVideo: 'https://www.youtube.com/watch?v=pPdYef2xalE&ab_channel=To%C3%B1oA3Tabacos'
    },
    {
        id: 93,
        optionId: 2,
        image: 'https://i.ibb.co/Z1W08tMk/sombrero-vueltiao-quinciano-tricolor.png',
        name: 'Sombrero Vueltiao Tricolor',
        rating: 4,
        description: 'Sombrero Vueltiao 100% Hecha a Mano',
        normalPrice: 350000,
        discountedPrice: 280000,
        specifications: [
            { feature: "Tamaño", value: "Adulto" },
            { feature: "Color", value: "Tricolor" },
            { feature: "Material", value: "Paja" }
        ],
        discount: 20,
        history: 'El sombrero Vueltiao tricolor combina colores vibrantes que representan la diversidad cultural de Colombia. Inspirado en los colores de la bandera nacional, este sombrero celebra la unidad y la multiculturalidad del país. Es usado tanto en actos culturales como políticos y se ha convertido en un emblema de orgullo patrio. Cada pieza es una muestra de artesanía minuciosa que requiere semanas de trabajo.',
        demoVideo: 'https://www.youtube.com/watch?v=pPdYef2xalE&ab_channel=To%C3%B1oA3Tabacos'
    },
    {
        id: 94,
        optionId: 2,
        image: 'https://i.ibb.co/MxfyrgTK/Sombrero-wayuu-5-jpg.png',
        name: 'Sombrero Wayuu',
        rating: 4,
        description: 'Sombrero Wayuu 100% Hecha a Mano',
        normalPrice: 50000,
        discountedPrice: 30000,
        specifications: [
            { feature: "Tamaño", value: "Adulto" },
            { feature: "Color", value: "Original" },
            { feature: "Material", value: "Paja" }
        ],
        discount: 40,
        history: 'El sombrero Wayuu es una obra maestra de la artesanía indígena. Cada sombrero es tejido con paciencia y dedicación, reflejando la herencia cultural de los Wayuu. Utilizado como protección contra el sol, también representa el estatus y el conocimiento de quien lo lleva. Estos sombreros son una fusión entre funcionalidad y simbolismo, confeccionados con materiales naturales recolectados en la región.',
        demoVideo: 'https://www.youtube.com/watch?v=vWVS8iM-8wU&ab_channel=SaidaLuisaGuerraVel%C3%A1squez'
    },
    {
        id: 95,
        optionId: 3,
        image: 'https://i.ibb.co/gL8HbnSJ/HAMACA-WAYUU-KENASU-AZUL-FLORES-PRINCIPAL.png',
        name: 'Chinchorro Wayuu',
        rating: 4,
        description: 'Chinchorro Wayuu 100% Hecha a Mano',
        normalPrice: 550000,
        discountedPrice: 300000,
        specifications: [
            { feature: "Tamaño", value: "Adulto" },
            { feature: "Color", value: "Multiple" },
            { feature: "Material", value: "Algodon" }
        ],
        discount: 45,
        history: 'El chinchorro Wayuu es una pieza tradicional utilizada para descansar. Su diseño colorido y tejido resistente lo convierten en un símbolo de comodidad y cultura. En la cultura Wayuu, el chinchorro es más que una hamaca: es un espacio sagrado de sueño, conversación y conexión familiar. Su elaboración puede durar meses y requiere el conocimiento ancestral que solo poseen los miembros más experimentados de la comunidad.',
        demoVideo: 'https://www.youtube.com/watch?v=xBgNXl9JyQA&ab_channel=viajesytravesiascolombia'
    },
    {
        id: 96,
        optionId: 3,
        image: 'https://i.ibb.co/LDrKpjVb/3-6e08b1b5-6e49-4fe9-a488-2fb83d7f73b6.png',
        name: 'Hamaca Tradicional Colombiana',
        rating: 4,
        description: 'Hamaca',
        normalPrice: 150000,
        discountedPrice: 99000,
        specifications: [
            { feature: "Tamaño", value: "Adulto" },
            { feature: "Color", value: "Multiple" },
            { feature: "Material", value: "Algodon" }
        ],
        discount: 34,
        history: 'La hamaca tradicional colombiana es un símbolo de relajación y cultura. Tejida a mano, es perfecta para disfrutar de momentos de descanso. Utilizada en regiones cálidas, ha sido parte esencial de la vida cotidiana campesina, brindando sombra y frescura. Además, representa un momento de pausa en el ritmo de la vida rural y se ha convertido en un emblema del descanso tropical latinoamericano.',
        demoVideo: 'https://www.youtube.com/watch?v=havf7S0G4Ok&ab_channel=NoticiasCaracol'
    },
    {
        id: 97,
        optionId: 1,
        image: 'https://i.ibb.co/SZzn4YK/Whats-App-Image-2023-09-25-at-12-40-32-PM-430x430-1.png',
        name: 'Mochila Arhuaca',
        rating: 4,
        description: 'Mochila Arhuaca 100% Hecha a Mano Original',
        normalPrice: 500000,
        discountedPrice: 350000,
        specifications: [
            { feature: "Tamaño", value: "Grande" },
            { feature: "Color", value: "Original" },
            { feature: "Material", value: "Lana de Oveja" }
        ],
        discount: 30,
        history: 'La mochila Arhuaca es una pieza emblemática de los indígenas Arhuacos de la Sierra Nevada de Santa Marta. Hecha con lana virgen y tejida por mujeres de la comunidad, cada símbolo en la mochila tiene un significado espiritual y cosmológico. Representa la visión del mundo Arhuaco, donde todo está conectado: el hombre, la naturaleza y el universo. Más que un accesorio, es una declaración de identidad y resistencia cultural.',
        demoVideo: 'https://www.youtube.com/watch?v=guQLLWNd2M8&ab_channel=LosOficios%2Cunviajeporlossaberesancestrales'
    },
    {
    id: 98,
    optionId: 1,
    image: 'https://i.ibb.co/CpDMdV0j/02-03-005-B-vista1-4.png',
    name: 'Sombrero Aguadeño en palma de iraca',
    rating: 4,
    description: 'Sombrero Aguadeño en palma de iraca 100% Hecha a Mano',
    normalPrice: 200000,
    discountedPrice: 187000,
    specifications: [
        { feature: "Tamaño", value: "Grande" },
        { feature: "Color", value: "Original" },
        { feature: "Material", value: "Palma de iraca" }
    ],
    discount: 7,
    history: 'El sombrero Aguadeño es una pieza artesanal originaria de Aguadas, Colombia, reconocida por su exquisita elaboración en palma de iraca, una fibra vegetal resistente y flexible. Esta prenda tradicional refleja siglos de tradición artesanal transmitida de generación en generación por comunidades indígenas y campesinas. Cada sombrero es tejido a mano con gran dedicación, lo que garantiza su durabilidad y la calidad en cada detalle. Más allá de ser un accesorio funcional para proteger del sol, el sombrero Aguadeño simboliza la identidad cultural y el patrimonio artesanal de la región. Su diseño único y distintivo lo convierte en un objeto de apreciación tanto local como internacional, siendo utilizado en festividades, eventos culturales y como símbolo de orgullo regional. La producción de estos sombreros también contribuye a la economía local, apoyando a artesanos que mantienen viva esta tradición milenaria.',
    demoVideo: 'https://www.youtube.com/watch?v=_Pdm9IRcEFI&ab_channel=ExperienciasEquinas'
}
];

module.exports = products_plp;
