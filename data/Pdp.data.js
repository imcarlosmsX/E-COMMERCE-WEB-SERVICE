const products = [
    {
        id: 1,
        optionId: 1,
        image: "https://web-fe-html-css-prj2-apollo.onrender.com/assets/producto-1-DKITcPuI.png",
        name: "Computador Portátil HP 14\" Pulgadas Ep1001la",
        rating: 4,
        description: "Computador portátil elegante y potente con un procesador Intel Core Ultra 5, ideal para tareas de oficina y entretenimiento. Viene con 8GB de RAM y un disco SSD de 512 GB, proporcionando un rendimiento fluido y rápido arranque. Su diseño en plata lo hace atractivo y funcional.",
        normalPrice: "$3.619.000",
        discountedPrice: "$3.119.900",
        specifications: [
            { feature: "Processor", value: "Intel Core Ultra 5" },
            { feature: "RAM", value: "8GB" },
            { feature: "Storage", value: "512GB SSD" }
        ]
    },
    {
        id: 2,
        optionId: 1,
        image: "https://web-fe-html-css-prj2-apollo.onrender.com/assets/laptod-1-yFLC8ct0.png",
        name: "Computador Portátil LENOVO 15,6\" Pulgadas IdeaPad Slim 3",
        rating: 3,
        description: "Portátil táctil que combina potencia y portabilidad. Equipado con un procesador Intel Core i5, 8GB de RAM y un disco SSD de 512GB, es ideal para trabajar y jugar. Su pantalla de 15.6 pulgadas ofrece una experiencia visual envolvente.",
        normalPrice: "$3.599.000",
        discountedPrice: "$2.999.999",
        specifications: [
            { feature: "Processor", value: "Intel Core i5" },
            { feature: "RAM", value: "8GB" },
            { feature: "Storage", value: "512GB SSD" }
        ]
    },
    {
        id: 3,
        optionId: 1,
        image: "https://web-fe-html-css-prj2-apollo.onrender.com/assets/laptod-2-CQ0lBLGR.png",
        name: "Computador Portátil ASUS Vivobook 16\" Pulgadas X1605ZA",
        rating: 2,
        description: "Un computador portátil con un rendimiento sólido, ideal para tareas diarias. Viene con un procesador Intel Core i5, 16GB de RAM y un disco SSD de 512 GB. Su diseño en negro lo hace versátil y moderno.",
        normalPrice: "$3.599.000",
        discountedPrice: "$2.650.900",
        specifications: [
            { feature: "Processor", value: "Intel Core i5" },
            { feature: "RAM", value: "16GB" },
            { feature: "Storage", value: "512GB SSD" }
        ]
    },
    {
        id: 4,
        optionId: 1,
        image: "https://web-fe-html-css-prj2-apollo.onrender.com/assets/laptod-3-d1tm84sb.png",
        name: "Computador Portátil LENOVO IdeaPad Slim 5 14\" Pulgadas 14IAH8",
        rating: 4,
        description: "Un diseño delgado y ligero, equipado con un procesador Intel Core i5, 16GB de RAM y un disco SSD de 512GB. Perfecto para estudiantes y profesionales en movimiento.",
        normalPrice: "$3.599.000",
        discountedPrice: "$2.250.980",
        specifications: [
            { feature: "Processor", value: "Intel Core i5" },
            { feature: "RAM", value: "16GB" },
            { feature: "Storage", value: "512GB SSD" }
        ]
    },
    {
        id: 5,
        optionId: 1,
        image: "https://web-fe-html-css-prj2-apollo.onrender.com/assets/laptod-4-D2_uzNaR.png",
        name: "MacBook Air de 13\" Pulgadas MGN63LA/A",
        rating: 1,
        description: "Laptop con chip M1 que ofrece un rendimiento excepcional. Tiene 8GB de RAM y un disco de estado sólido de 256GB. Su color gris espacial la hace elegante y sofisticada.",
        normalPrice: "$6.659.000",
        discountedPrice: "$5.999.999",
        specifications: [
            { feature: "Processor", value: "M1" },
            { feature: "RAM", value: "8GB" },
            { feature: "Storage", value: "256GB SSD" }
        ]
    },
    {
        id: 6,
        optionId: 1,
        image: "https://web-fe-html-css-prj2-apollo.onrender.com/assets/laptod-5-8fVgUoa3.png",
        name: "Computador Portátil ASUS Vivobook Go 15.6\" Pulgadas E1504FA",
        rating: 5,
        description: "Potente portátil que cuenta con un procesador AMD Ryzen 5, 8GB de RAM y un disco SSD de 1TB. Ideal para multitasking y tareas exigentes.",
        normalPrice: "$3.299.000",
        discountedPrice: "$2.790.000",
        specifications: [
            { feature: "Processor", value: "AMD Ryzen 5" },
            { feature: "RAM", value: "8GB" },
            { feature: "Storage", value: "1TB SSD" }
        ]
    },
    {
        id: 7,
        optionId: 1,
        image: "https://web-fe-html-css-prj2-apollo.onrender.com/assets/laptod-6-D0nAg1W1.png",
        name: "Computador Portátil ASUS Vivobook Go 15.6\" Pulgadas E1504GA",
        rating: 5,
        description: "Portátil accesible con un rendimiento sólido, equipado con un procesador Intel Core i3, 8GB de RAM y un disco SSD de 512 GB. Ideal para tareas diarias.",
        normalPrice: "$1.200.000",
        discountedPrice: "$989.900",
        specifications: [
            { feature: "Processor", value: "Intel Core i3" },
            { feature: "RAM", value: "8GB" },
            { feature: "Storage", value: "512GB SSD" }
        ]
    },
    {
        id: 8,
        optionId: 1,
        image: "https://web-fe-html-css-prj2-apollo.onrender.com/assets/laptod-7-4D_ZgCMz.png",
        name: "Computador Portátil ACER ASPIRE GO 15.6\" Pulgadas 370J",
        rating: 3,
        description: "Computador portátil con un diseño atractivo. Equipado con un procesador Intel Core i3, 16GB de RAM y un disco SSD de 1TB, ideal para el uso diario.",
        normalPrice: "$3.249.000",
        discountedPrice: "$3.090.000",
        specifications: [
            { feature: "Processor", value: "Intel Core i3" },
            { feature: "RAM", value: "16GB" },
            { feature: "Storage", value: "1TB SSD" }
        ]
    },
    {
        id: 9,
        optionId: 1,
        image: "https://web-fe-html-css-prj2-apollo.onrender.com/assets/laptod-8-CchZZ8Xo.png",
        name: "Computador Portátil ACER ASPIRE 5 15.6\" Pulgadas 54XV",
        rating: 2,
        description: "Portátil con un equilibrio entre rendimiento y diseño. Viene con un procesador Intel Core i5, 16GB de RAM y un disco SSD de 512GB, ideal para tareas de oficina.",
        normalPrice: "$3.949.000",
        discountedPrice: "$3.540.000",
        specifications: [
            { feature: "Processor", value: "Intel Core i5" },
            { feature: "RAM", value: "16GB" },
            { feature: "Storage", value: "512GB SSD" }
        ]
    },
    {
        id: 10,
        optionId: 1,
        image: "https://web-fe-html-css-prj2-apollo.onrender.com/assets/laptod-9-CDVqSJG_.png",
        name: "Computador Portátil HP 14\" Pulgadas EP0027la",
        rating: 4,
        description: "Laptop con un diseño elegante y especificaciones sólidas. Equipado con un procesador Intel Core i3, 8GB de RAM y un disco SSD de 512 GB, perfecto para el uso diario.",
        normalPrice: "$2.899.000",
        discountedPrice: "$2.500.000",
        specifications: [
            { feature: "Processor", value: "Intel Core i3" },
            { feature: "RAM", value: "8GB" },
            { feature: "Storage", value: "512GB SSD" }
        ]
    },
    {
        id: 11,
        optionId: 1,
        image: "https://web-fe-html-css-prj2-apollo.onrender.com/assets/laptod-10-VtEQoriJ.png",
        name: "Computador Portátil DELL Inspiron 15 3000 15.6\" Pulgadas",
        rating: 2,
        description: "Computador portátil versátil con un diseño atractivo. Equipado con un procesador Intel Core i3, 8GB de RAM y un disco SSD de 256GB, ideal para tareas básicas.",
        normalPrice: "$2.199.000",
        discountedPrice: "$1.800.000",
        specifications: [
            { feature: "Processor", value: "Intel Core i3" },
            { feature: "RAM", value: "8GB" },
            { feature: "Storage", value: "256GB SSD" }
        ]
    },
    {
        id: 12,
        optionId: 2,
        image: "https://web-fe-html-css-prj2-apollo.onrender.com/assets/tv-1-BgLoTeyp.png",
        name: "TV LG 65\" Pulgadas",
        rating: 4,
        description: "165 Cm 65UT7300 4K-UHD LED Smart TV",
        normalPrice: "$4.199.900",
        discountedPrice: "$2.399.900",
        specifications: [
            { feature: "Size", value: "65 inches" },
            { feature: "Resolution", value: "4K UHD" },
            { feature: "Type", value: "LED Smart TV" }
        ]
    },
    {
        id: 13,
        optionId: 2,
        image: "https://web-fe-html-css-prj2-apollo.onrender.com/assets/tv-2-CCV3mFoe.png",
        name: "TV SAMSUNG 75 Pulgadas",
        rating: 5,
        description: "190,5 cm DU8000 4K UHD LED Smart TV",
        normalPrice: "$6.199.900",
        discountedPrice: "$3.699.900",
        specifications: [
            { feature: "Size", value: "75 inches" },
            { feature: "Resolution", value: "4K UHD" },
            { feature: "Type", value: "LED Smart TV" }
        ]
    },    
    {
        id: 14,
        optionId: 2,
        image: "https://web-fe-html-css-prj2-apollo.onrender.com/assets/tv-3-DLFp497n.png",
        name: "TV KALLEY 50\" Pulgadas",
        rating: 4,
        description: "127 cm GTV50UHDQV2 4K-UHD QLED Smart TV Google",
        normalPrice: "$2.849.900",
        discountedPrice: "$1.299.900",
        specifications: [
            { feature: "Size", value: "50 inches" },
            { feature: "Resolution", value: "4K UHD" },
            { feature: "Type", value: "QLED Smart TV" }
        ]
    },
    {
        id: 15,
        optionId: 2,
        image: "https://web-fe-html-css-prj2-apollo.onrender.com/assets/tv-4-Ci_b1yrF.png",
        name: "TV SAMSUNG 60\" Pulgadas",
        rating: 3,
        description: "152.4 cm 60DU7000 4K-UHD LED Smart TV",
        normalPrice: "$3.599.900",
        discountedPrice: "$2.099.900",
        specifications: [
            { feature: "Size", value: "60 inches" },
            { feature: "Resolution", value: "4K UHD" },
            { feature: "Type", value: "LED Smart TV" }
        ]
    },
    {
        id: 16,
        optionId: 2,
        image: "https://web-fe-html-css-prj2-apollo.onrender.com/assets/tv-5-Creaqtra.png",
        name: "TV LG 50\" Pulgadas",
        rating: 3,
        description: "126 Cm 50UR7410PSA 4K-UHD LED Smart TV",
        normalPrice: "$2.899.900",
        discountedPrice: "$1.599.900",
        specifications: [
            { feature: "Size", value: "50 inches" },
            { feature: "Resolution", value: "4K UHD" },
            { feature: "Type", value: "LED Smart TV" }
        ]
    },
    {
        id: 17,
        optionId: 3,
        image: "https://web-fe-html-css-prj2-apollo.onrender.com/assets/audio-1-elfPztA1.png",
        name: "Minicomponente LG XBOOM RNC9",
        rating: 5,
        description: "1800 Watts Negro Torre de Sonido",
        normalPrice: "$2.799.900",
        discountedPrice: "$1.299.900",
        specifications: [
            { feature: "Power", value: "1800 Watts" },
            { feature: "Color", value: "Negro" },
            { feature: "Type", value: "Torre de Sonido" }
        ]
    },
    {
        id: 18,
        optionId: 3,
        image: "https://web-fe-html-css-prj2-apollo.onrender.com/assets/audio-2-By9Vc90Q.png",
        name: "Parlante BOSE",
        rating: 4,
        description: "S1 PRO+ Negro",
        normalPrice: "$3.499.900",
        discountedPrice: "$3.299.900",
        specifications: [
            { feature: "Model", value: "S1 PRO+" },
            { feature: "Color", value: "Negro" }
        ]
    },
    {
        id: 19,
        optionId: 3,
        image: "https://web-fe-html-css-prj2-apollo.onrender.com/assets/audio-3-CxGvR-KC.png",
        name: "Minicomponente SONY MHC-V73D",
        rating: 3,
        description: "550 Watts Negro Torre de Sonido",
        normalPrice: "$3.599.900",
        discountedPrice: "$1.999.900",
        specifications: [
            { feature: "Power", value: "550 Watts" },
            { feature: "Color", value: "Negro" },
            { feature: "Type", value: "Torre de Sonido" }
        ]
    },
    {
        id: 20,
        optionId: 3,
        image: "https://web-fe-html-css-prj2-apollo.onrender.com/assets/audio-4-r8XPTzx8.png",
        name: "Minicomponente PANASONIC UA90",
        rating: 4,
        description: "2000 Watts Negro Torre de Sonido",
        normalPrice: "$3.599.900",
        discountedPrice: "$1.999.900",
        specifications: [
            { feature: "Power", value: "2000 Watts" },
            { feature: "Color", value: "Negro" },
            { feature: "Type", value: "Torre de Sonido" }
        ]
    },
    {
        id: 21,
        optionId: 3,
        image: "https://web-fe-html-css-prj2-apollo.onrender.com/assets/audio-5-CyOtRCq7.png",
        name: "Minicomponente LG XBOOM RNC5",
        rating: 4,
        description: "500 Watts Negro Torre de Sonido",
        normalPrice: "$3.599.900",
        discountedPrice: "$1.999.900",
        specifications: [
            { feature: "Power", value: "500 Watts" },
            { feature: "Color", value: "Negro" },
            { feature: "Type", value: "Torre de Sonido" }
        ]
    },
    {
        id: 22,
        optionId: 4,
        image: "https://web-fe-html-css-prj2-apollo.onrender.com/assets/video-1-CVOVkfwv.png",
        name: "Videoproyector Portátil EPSON EpiqVision FH02",
        rating: 5,
        description: "FHD con Android TV Blanco",
        normalPrice: "$4.099.000",
        discountedPrice: "$2.899.000",
        specifications: [
            { feature: "Resolution", value: "FHD" },
            { feature: "Color", value: "Blanco" },
            { feature: "Features", value: "Android TV" }
        ]
    },
    {
        id: 23,
        optionId: 4,
        image: "https://web-fe-html-css-prj2-apollo.onrender.com/assets/video-2-CSzYBVeC.png",
        name: "Videoproyector Portátil EPSON PowerLite E20",
        rating: 4,
        description: "SVGA Blanco",
        normalPrice: "$3.199.000",
        discountedPrice: "$2.399.000",
        specifications: [
            { feature: "Resolution", value: "SVGA" },
            { feature: "Color", value: "Blanco" }
        ]
    },
    {
        id: 24,
        optionId: 4,
        image: "https://web-fe-html-css-prj2-apollo.onrender.com/assets/video-3-gH8USlut.png",
        name: "Videoproyector Portátil EPSON W01",
        rating: 5,
        description: "WXGA Blanco",
        normalPrice: "$3.369.000",
        discountedPrice: "$1.999.000",
        specifications: [
            { feature: "Resolution", value: "WXGA" },
            { feature: "Color", value: "Blanco" }
        ]
    },
    {
        id: 25,
        optionId: 4,
        image: "https://web-fe-html-css-prj2-apollo.onrender.com/assets/video-4-DEQtAHMn.png",
        name: "Proyector ACER X1128H",
        rating: 3,
        description: "Negro",
        normalPrice: "$2.399.000",
        discountedPrice: "$1.799.000",
        specifications: [
            { feature: "Color", value: "Negro" }
        ]
    },
    {
        id: 26,
        optionId: 4,
        image: "https://web-fe-html-css-prj2-apollo.onrender.com/assets/video-5-DZWpPbbd.png",
        name: "Videoproyector VTA - 70346",
        rating: 4,
        description: "4K LED con Android Tv Blanco|Negro",
        normalPrice: "$1.990.900",
        discountedPrice: "$1.499.900",
        specifications: [
            { feature: "Resolution", value: "4K" },
            { feature: "Type", value: "LED" },
            { feature: "Color", value: "Blanco|Negro" },
            { feature: "Features", value: "Android TV" }
        ]
    },
    {
        id: 27,
        optionId: 5,
        image: "https://web-fe-html-css-prj2-apollo.onrender.com/assets/impre-1-CTBYk-fc.png",
        name: "Impresora Multifuncional EPSON Ecotank L3210 Hg",
        rating: 5,
        description: "Negro",
        normalPrice: "$1.149.000",
        discountedPrice: "$759.000",
        specifications: [
            { feature: "Type", value: "Multifuncional" },
            { feature: "Color", value: "Negro" }
        ]
    },
    {
        id: 28,
        optionId: 5,
        image: "https://web-fe-html-css-prj2-apollo.onrender.com/assets/impre-2-DLXPDcRX.png",
        name: "Impresora Multifuncional HP Smart Tank 580",
        rating: 4,
        description: "Negro",
        normalPrice: "$1.099.000",
        discountedPrice: "$699.000",
        specifications: [
            { feature: "Type", value: "Multifuncional" },
            { feature: "Color", value: "Negro" }
        ]
    },
    {
        id: 29,
        optionId: 5,
        image: "https://web-fe-html-css-prj2-apollo.onrender.com/assets/impre-3-dC2mN81x.png",
        name: "Impresora Multifuncional CANON G3110",
        rating: 4,
        description: "Negro",
        normalPrice: "$879.000",
        discountedPrice: "$629.000",
        specifications: [
            { feature: "Type", value: "Multifuncional" },
            { feature: "Color", value: "Negro" }
        ]
    },
    {
        id: 30,
        optionId: 5,
        image: "https://web-fe-html-css-prj2-apollo.onrender.com/assets/impre-4-EZppik2u.png",
        name: "Impresora Multifuncional EPSON L1250",
        rating: 3,
        description: "Negro",
        normalPrice: "$949.000",
        discountedPrice: "$619.000",
        specifications: [
            { feature: "Type", value: "Multifuncional" },
            { feature: "Color", value: "Negro" }
        ]
    },
    {
        id: 31,
        optionId: 5,
        image: "https://web-fe-html-css-prj2-apollo.onrender.com/assets/impre-5-CJyE8Dee.png",
        name: "Impresora Multifuncional EPSON Ecotank L5590 WiFi Hg-Of",
        rating: 5,
        description: "Negro",
        normalPrice: "$2.019.000",
        discountedPrice: "$1.269.000",
        specifications: [
            { feature: "Type", value: "Multifuncional" },
            { feature: "Connectivity", value: "WiFi" },
            { feature: "Color", value: "Negro" }
        ]
    },
    {
        id: 32,
        optionId: 6,
        image: "https://web-fe-html-css-prj2-apollo.onrender.com/assets/cam-1-DG8of3O1.png",
        name: "Cámara de Acción GOPRO Hero 10",
        rating: 4,
        description: "Black RT",
        normalPrice: "$1.750.000",
        discountedPrice: "$1.199.900",
        specifications: [
            { feature: "Type", value: "Cámara de Acción" },
            { feature: "Resolution", value: "4K" }
        ]
    },
    {
        id: 33,
        optionId: 6,
        image: "https://web-fe-html-css-prj2-apollo.onrender.com/assets/cam-2-BXlqpw5q.png",
        name: "Cámara Sony Zv-E10L",
        rating: 5,
        description: "Bq E38",
        normalPrice: "$4.469.900",
        discountedPrice: "$3.209.900",
        specifications: [
            { feature: "Type", value: "Cámara Sin Espejo" },
            { feature: "Resolution", value: "4K" }
        ]
    },
    {
        id: 34,
        optionId: 6,
        image: "https://web-fe-html-css-prj2-apollo.onrender.com/assets/cam-3-IsKR41ul.png",
        name: "Dron DJI",
        rating: 3,
        description: "Neo Combo",
        normalPrice: "$2.400.900",
        discountedPrice: "$1.729.900",
        specifications: [
            { feature: "Type", value: "Dron" },
            { feature: "Camera", value: "1080p" }
        ]
    },
    {
        id: 35,
        optionId: 6,
        image: "https://web-fe-html-css-prj2-apollo.onrender.com/assets/cam-4-UEGQD8Jv.png",
        name: "Drone DJI Mini 3",
        rating: 4,
        description: "Combo con Control Remoto",
        normalPrice: "$4.400.900",
        discountedPrice: "$3.759.900",
        specifications: [
            { feature: "Type", value: "Dron" },
            { feature: "Camera", value: "4K" }
        ]
    },
    {
        id: 36,
        optionId: 6,
        image: "https://web-fe-html-css-prj2-apollo.onrender.com/assets/cam-5-CXF1D8NY.png",
        name: "Cámara fotográfica SONY Profesional Alpha",
        rating: 5,
        description: "ILCE-7M3K Negro",
        normalPrice: "$11.329.900",
        discountedPrice: "$7.799.900",
        specifications: [
            { feature: "Type", value: "Cámara DSLR" },
            { feature: "Resolution", value: "24.2 MP" }
        ]
    },
    {
        id: 37,
        optionId: 7,
        image: "https://web-fe-html-css-prj2-apollo.onrender.com/assets/clim-1-CMhLWplJ.png",
        name: "Aire Acondicionado MABE 12000",
        rating: 4,
        description: "BTU Tipo Split Inverter 110V Blanco",
        normalPrice: "$2.483.900",
        discountedPrice: "$1.599.900",
        specifications: [
            { feature: "Type", value: "Aire Acondicionado Split" },
            { feature: "BTU", value: "12000" },
            { feature: "Voltage", value: "110V" }
        ]
    },
    {
        id: 38,
        optionId: 7,
        image: "https://web-fe-html-css-prj2-apollo.onrender.com/assets/clim-2-_j8Vn7hC.png",
        name: "Aire acondicionado SAMSUNG 18.000 Btu Tipo Split inverter WindFree",
        rating: 5,
        description: "220V Blanco AR18CVFCMWK/CB",
        normalPrice: "$3.729.900",
        discountedPrice: "$2.199.900",
        specifications: [
            { feature: "Type", value: "Aire Acondicionado Split" },
            { feature: "BTU", value: "18000" },
            { feature: "Voltage", value: "220V" }
        ]
    },
    {
        id: 39,
        optionId: 7,
        image: "https://web-fe-html-css-prj2-apollo.onrender.com/assets/clim-1-CMhLWplJ.png",
        name: "Aire Acondicionado MABE 12000 BTU Tipo Split Inverter",
        rating: 5,
        description: "220V Blanco",
        normalPrice: "$2.483.900",
        discountedPrice: "$1.599.900",
        specifications: [
            { feature: "Type", value: "Aire Acondicionado Split" },
            { feature: "BTU", value: "12000" },
            { feature: "Voltage", value: "220V" }
        ]
    },
    {
        id: 40,
        optionId: 7,
        image: "https://web-fe-html-css-prj2-apollo.onrender.com/assets/clim-4-BlZw8c3s.png",
        name: "Ventilador SAMURAI Tropical Plus Pedestal",
        rating: 5,
        description: "3 velocidades 70 Watts Negro",
        normalPrice: "$2.483.900",
        discountedPrice: "$1.599.900",
        specifications: [
            { feature: "Type", value: "Ventilador" },
            { feature: "Power", value: "70 Watts" }
        ]
    },
    {
        id: 41,
        optionId: 7,
        image: "https://web-fe-html-css-prj2-apollo.onrender.com/assets/clim-5-0zSu2tY1.png",
        name: "Aire Acondicionado ELECTROLUX 12.000 BTU Portatil Convencional",
        rating: 2,
        description: "110v Blanco SP12F",
        normalPrice: "$2.199.900",
        discountedPrice: "$1.799.900",
        specifications: [
            { feature: "Type", value: "Aire Acondicionado Portátil" },
            { feature: "BTU", value: "12000" },
            { feature: "Voltage", value: "110V" }
        ]
    },
    {
        id: 42,
        optionId: 8,
        image: "https://web-fe-html-css-prj2-apollo.onrender.com/assets/refri-1-DHWOhpu3.png",
        name: "Nevera Mabe No Frost Congelador Superior",
        rating: 4,
        description: "297 Litros RMA313FXCC Negra",
        normalPrice: "$2.621.900",
        discountedPrice: "$1.879.900",
        specifications: [
            { feature: "Type", value: "No Frost" },
            { feature: "Capacity", value: "297 Litros" },
            { feature: "Color", value: "Negro" }
        ]
    },
    {
        id: 43,
        optionId: 8,
        image: "https://web-fe-html-css-prj2-apollo.onrender.com/assets/refri-2-CMSySsNd.png",
        name: "Nevera No Frost CHALLENGER",
        rating: 3,
        description: "231 Litros CR249 Titanium",
        normalPrice: "$1.619.900",
        discountedPrice: "$1.529.900",
        specifications: [
            { feature: "Type", value: "No Frost" },
            { feature: "Capacity", value: "231 Litros" },
            { feature: "Color", value: "Titanium" }
        ]
    },
    {
        id: 44,
        optionId: 8,
        image: "https://web-fe-html-css-prj2-apollo.onrender.com/assets/refri-3-Ckq4MOFD.png",
        name: "Nevera HACEB No Frost Congelador Superior",
        rating: 4,
        description: "379 Litros N404 Titanio",
        normalPrice: "$2.779.900",
        discountedPrice: "$1.999.900",
        specifications: [
            { feature: "Type", value: "No Frost" },
            { feature: "Capacity", value: "379 Litros" },
            { feature: "Color", value: "Titanio" }
        ]
    },
    {
        id: 45,
        optionId: 8,
        image: "https://web-fe-html-css-prj2-apollo.onrender.com/assets/refri-4-ted34FJO.png",
        name: "Nevera HACEB No Frost",
        rating: 5,
        description: "220 Litros CR249 Titanium",
        normalPrice: "$1.929.900",
        discountedPrice: "$1.529.900",
        specifications: [
            { feature: "Type", value: "No Frost" },
            { feature: "Capacity", value: "220 Litros" },
            { feature: "Color", value: "Titanium" }
        ]
    },
    {
        id: 46,
        optionId: 8,
        image: "https://web-fe-html-css-prj2-apollo.onrender.com/assets/refri-5-oeWj2fGe.png",
        name: "Nevera Mabe No Frost",
        rating: 4,
        description: "406 Litros RMS510IBMR1 INOX",
        normalPrice: "$3.239.900",
        discountedPrice: "$2.299.900",
        specifications: [
            { feature: "Type", value: "No Frost" },
            { feature: "Capacity", value: "406 Litros" },
            { feature: "Color", value: "INOX" }
        ]
    },
    {
        id: 47,
        optionId: 9,
        image: "https://web-fe-html-css-prj2-apollo.onrender.com/assets/lav-1-C_vEala4.png",
        name: "Lavadora WHIRLPOOL Carga Superior",
        rating: 5,
        description: "20 Kilos WW20LTAHLA Gris",
        normalPrice: "$2.859.900",
        discountedPrice: "$1.949.900",
        specifications: [
            { feature: "Type", value: "Carga Superior" },
            { feature: "Capacity", value: "20 Kilos" },
            { feature: "Color", value: "Gris" }
        ]
    },
    {
        id: 48,
        optionId: 9,
        image: "https://web-fe-html-css-prj2-apollo.onrender.com/assets/lav-2-DJTFXrqn.png",
        name: "Lavadora SAMSUNG Carga Superior",
        rating: 4,
        description: "19 kilos WA19CG6441BD Gris",
        normalPrice: "$2.019.900",
        discountedPrice: "$1.999.900",
        specifications: [
            { feature: "Type", value: "Carga Superior" },
            { feature: "Capacity", value: "19 Kilos" },
            { feature: "Color", value: "Gris" }
        ]
    },
    {
        id: 49,
        optionId: 9,
        image: "https://web-fe-html-css-prj2-apollo.onrender.com/assets/lav-3-D5PC_o7R.png",
        name: "Lavadora WHIRLPOOL Carga Superior",
        rating: 4,
        description: "20 Kilos WW20NTAHLA Gris",
        normalPrice: "$2.889.900",
        discountedPrice: "$1.949.900",
        specifications: [
            { feature: "Type", value: "Carga Superior" },
            { feature: "Capacity", value: "20 Kilos" },
            { feature: "Color", value: "Gris" }
        ]
    },
    {
        id: 50,
        optionId: 9,
        image: "https://web-fe-html-css-prj2-apollo.onrender.com/assets/lav-4-7htkE522.png",
        name: "Lavadora ELECTROLUX Carga Superior",
        rating: 3,
        description: "22 Kilos LS22I Gris",
        normalPrice: "$3.549.900",
        discountedPrice: "$1.999.900",
        specifications: [
            { feature: "Type", value: "Carga Superior" },
            { feature: "Capacity", value: "22 Kilos" },
            { feature: "Color", value: "Gris" }
        ]
    },
    {
        id: 51,
        optionId: 9,
        image: "https://web-fe-html-css-prj2-apollo.onrender.com/assets/lav-5--gpUz4vF.png",
        name: "Lavadora HACEB Carga Superior",
        rating: 5,
        description: "16 Kilos ZOÜ D Negro",
        normalPrice: "$2.379.900",
        discountedPrice: "$1.737.300",
        specifications: [
            { feature: "Type", value: "Carga Superior" },
            { feature: "Capacity", value: "16 Kilos" },
            { feature: "Color", value: "Negro" }
        ]
    },
    {
        id: 52,
        optionId: 10,
        image: "https://web-fe-html-css-prj2-apollo.onrender.com/assets/cel-1-3pUWOIZd.png",
        name: "iPhone 16 Pro",
        rating: 0,
        description: "128 GB Titanio Negro",
        normalPrice: "",
        discountedPrice: "$5.799.010",
        specifications: [
            { feature: "Storage", value: "128 GB" },
            { feature: "Color", value: "Titanio Negro" }
        ]
    },
    {
        id: 53,
        optionId: 10,
        image: "https://web-fe-html-css-prj2-apollo.onrender.com/assets/cel-2-E5PTNf0j.png",
        name: "Celular OPPO Reno 12 + Reloj",
        rating: 3,
        description: "512GB 5G Gris",
        normalPrice: "$3.599.900",
        discountedPrice: "$2.749.900",
        specifications: [
            { feature: "Storage", value: "512 GB" },
            { feature: "Connectivity", value: "5G" },
            { feature: "Color", value: "Gris" }
        ]
    },
    {
        id: 54,
        optionId: 10,
        image: "https://web-fe-html-css-prj2-apollo.onrender.com/assets/cel-3-Dkd0kICY.png",
        name: "Celular SAMSUNG Galaxy Z Flip6 + Cover",
        rating: 5,
        description: "256GB 5G Plateado",
        normalPrice: "",
        discountedPrice: "$5.999.990",
        specifications: [
            { feature: "Storage", value: "256 GB" },
            { feature: "Connectivity", value: "5G" },
            { feature: "Color", value: "Plateado" }
        ]
    },
    {
        id: 55,
        optionId: 10,
        image: "https://web-fe-html-css-prj2-apollo.onrender.com/assets/cel-4-BKaGHvo3.png",
        name: "iPhone 13",
        rating: 3,
        description: "128GB Azul Medianoche",
        normalPrice: "",
        discountedPrice: "$2.869.010",
        specifications: [
            { feature: "Storage", value: "128 GB" },
            { feature: "Color", value: "Azul Medianoche" }
        ]
    },
    {
        id: 56,
        optionId: 10,
        image: "https://web-fe-html-css-prj2-apollo.onrender.com/assets/cel-5-9DkIZIie.png",
        name: "Celular MOTOROLA G54",
        rating: 4,
        description: "128GB Azul Medianoche",
        normalPrice: "$1.799.900",
        discountedPrice: "$729.900",
        specifications: [
            { feature: "Storage", value: "128 GB" },
            { feature: "Color", value: "Azul Medianoche" }
        ]
    },
    {
        id: 57,
        optionId: 11,
        image: "https://web-fe-html-css-prj2-apollo.onrender.com/assets/tab-1-COXT3hxH.png",
        name: "Tablet LENOVO 11\" Pulgadas Tab M11",
        rating: 5,
        description: "128GB - WiFi - Color Gris",
        normalPrice: "$1.399.000",
        discountedPrice: "$799.000",
        specifications: [
            { feature: "Storage", value: "128 GB" },
            { feature: "Connectivity", value: "WiFi" },
            { feature: "Color", value: "Gris" }
        ]
    },
    {
        id: 58,
        optionId: 11,
        image: "https://web-fe-html-css-prj2-apollo.onrender.com/assets/tab-2-FGIxahac.png",
        name: "Tablet SAMSUNG 11\" Pulgadas A9 Plus",
        rating: 4,
        description: "128GB WiFi Color Gris",
        normalPrice: "$1.299.900",
        discountedPrice: "$719.900",
        specifications: [
            { feature: "Storage", value: "128 GB" },
            { feature: "Connectivity", value: "WiFi" },
            { feature: "Color", value: "Gris" }
        ]
    },
    {
        id: 59,
        optionId: 11,
        image: "https://web-fe-html-css-prj2-apollo.onrender.com/assets/tab-3-1Xa_52hE.png",
        name: "Tablet SAMSUNG 10.4\" Pulgadas S6 Lite",
        rating: 5,
        description: "128GB WiFi Color Gris",
        normalPrice: "$2.099.990",
        discountedPrice: "$1.034.900",
        specifications: [
            { feature: "Storage", value: "128 GB" },
            { feature: "Connectivity", value: "WiFi" },
            { feature: "Color", value: "Gris" }
        ]
    },
    {
        id: 60,
        optionId: 11,
        image: "https://web-fe-html-css-prj2-apollo.onrender.com/assets/tab-4-CkgFo6kS.png",
        name: "Tablet LENOVO 12,7\" Pulgadas",
        rating: 5,
        description: "P12 - TB370FU - 256GB - WiFi - Color Gris",
        normalPrice: "$2.699.000",
        discountedPrice: "$1.999.000",
        specifications: [
            { feature: "Storage", value: "256 GB" },
            { feature: "Connectivity", value: "WiFi" },
            { feature: "Color", value: "Gris" }
        ]
    },
    {
        id: 61,
        optionId: 11,
        image: "https://web-fe-html-css-prj2-apollo.onrender.com/assets/tab-5-tUmKzq_C.png",
        name: "Tablet SAMSUNG 10.4\" Pulgadas A7",
        rating: 4,
        description: "64GB WiFi Color Gris",
        normalPrice: "$1.199.900",
        discountedPrice: "$599.000",
        specifications: [
            { feature: "Storage", value: "64 GB" },
            { feature: "Connectivity", value: "WiFi" },
            { feature: "Color", value: "Gris" }
        ]
    },
    {
        id: 62,
        optionId: 12,
        image: "https://web-fe-html-css-prj2-apollo.onrender.com/assets/rel-1-DKjGtuHe.png",
        name: "Apple Watch SE GPS de 44 mm Caja de Aluminio en Azul Medianoche",
        rating: 2,
        description: "Correa Deportiva Azul Medianoche Talla S|M",
        normalPrice: "",
        discountedPrice: "$1.559.010",
        specifications: [
            { feature: "Size", value: "44 mm" },
            { feature: "Color", value: "Azul Medianoche" },
            { feature: "Band", value: "Correa Deportiva S|M" }
        ]
    },
    {
        id: 63,
        optionId: 12,
        image: "https://web-fe-html-css-prj2-apollo.onrender.com/assets/rel-2-C7XjEiz0.png",
        name: "Reloj REDMI Watch 3",
        rating: 4,
        description: "47 mm Active Gris",
        normalPrice: "$229.900",
        discountedPrice: "$149.900",
        specifications: [
            { feature: "Size", value: "47 mm" },
            { feature: "Color", value: "Gris" },
            { feature: "Model", value: "Active" }
        ]
    },
    {
        id: 64,
        optionId: 12,
        image: "https://web-fe-html-css-prj2-apollo.onrender.com/assets/rel-3-BHy4boj7.png",
        name: "Reloj REDMI Watch 4",
        rating: 3,
        description: "47.5 mm Negro",
        normalPrice: "$429.900",
        discountedPrice: "$349.900",
        specifications: [
            { feature: "Size", value: "47.5 mm" },
            { feature: "Color", value: "Negro" }
        ]
    },
    {
        id: 65,
        optionId: 12,
        image: "https://web-fe-html-css-prj2-apollo.onrender.com/assets/rel-4-CbBr1PQu.png",
        name: "Reloj HUAWEI GT4",
        rating: 5,
        description: "46 mm Negro",
        normalPrice: "",
        discountedPrice: "$799.900",
        specifications: [
            { feature: "Size", value: "46 mm" },
            { feature: "Color", value: "Negro" }
        ]
    },
    {
        id: 66,
        optionId: 12,
        image: "https://web-fe-html-css-prj2-apollo.onrender.com/assets/rel-5-ChaxHAuJ.png",
        name: "Apple Watch Series 9 GPS de 41 mm Caja de Aluminio en Rosa",
        rating: 5,
        description: "Correa Deportiva Rosa Claro Talla S|M",
        normalPrice: "$2.259.010",
        discountedPrice: "$1.899.010",
        specifications: [
            { feature: "Size", value: "41 mm" },
            { feature: "Color", value: "Rosa" },
            { feature: "Band", value: "Correa Deportiva S|M" }
        ]
    },
    {
        id: 67,
        optionId: 13,
        image: "https://web-fe-html-css-prj2-apollo.onrender.com/assets/sala-1-jVzdigK2.png",
        name: "Sofá Esquinero TUKASA",
        rating: 3,
        description: "Pekín Velvet Gris",
        normalPrice: "$1.399.900",
        discountedPrice: "$1.149.900",
        specifications: [
            { feature: "Material", value: "Velvet" },
            { feature: "Color", value: "Gris" },
            { feature: "Type", value: "Esquinero" }
        ]
    },
    {
        id: 68,
        optionId: 13,
        image: "https://web-fe-html-css-prj2-apollo.onrender.com/assets/sala-2-BQQcS1Qj.png",
        name: "Sofá Cama TUKASA",
        rating: 4,
        description: "Veracruz Gris",
        normalPrice: "$1.759.900",
        discountedPrice: "$1.399.900",
        specifications: [
            { feature: "Type", value: "Sofá Cama" },
            { feature: "Color", value: "Gris" }
        ]
    },
    {
        id: 69,
        optionId: 13,
        image: "https://web-fe-html-css-prj2-apollo.onrender.com/assets/sala-3-Cl_H9tiK.png",
        name: "Mesa de Centro MADERKIT",
        rating: 2,
        description: "Lubeck Niebla",
        normalPrice: "",
        discountedPrice: "$279.900",
        specifications: [
            { feature: "Type", value: "Mesa de Centro" },
            { feature: "Color", value: "Lubeck Niebla" }
        ]
    },
    {
        id: 70,
        optionId: 13,
        image: "https://web-fe-html-css-prj2-apollo.onrender.com/assets/sala-4-B-F-qF_a.png",
        name: "Silla de Oficina TUKASA",
        rating: 4,
        description: "6310 Negra",
        normalPrice: "$399.900",
        discountedPrice: "$329.900",
        specifications: [
            { feature: "Type", value: "Silla de Oficina" },
            { feature: "Color", value: "Negro" }
        ]
    },
    {
        id: 71,
        optionId: 13,
        image: "https://web-fe-html-css-prj2-apollo.onrender.com/assets/sala-5-DcJdctoM.png",
        name: "Biblioteca PRACTIMAC Vera",
        rating: 2,
        description: "59,9 Cm Rovere",
        normalPrice: "$459.900",
        discountedPrice: "$369.900",
        specifications: [
            { feature: "Type", value: "Biblioteca" },
            { feature: "Width", value: "59.9 cm" },
            { feature: "Color", value: "Rovere" }
        ]
    },
    {
        id: 72,
        optionId: 14,
        image: "https://web-fe-html-css-prj2-apollo.onrender.com/assets/come-1-BSf5QZ8O.png",
        name: "Mesa de comedor RIMAX",
        rating: 3,
        description: "Shia Mocca",
        normalPrice: "$284.900",
        discountedPrice: "$229.900",
        specifications: [
            { feature: "Type", value: "Mesa de Comedor" },
            { feature: "Color", value: "Mocca" }
        ]
    },
    {
        id: 73,
        optionId: 14,
        image: "https://web-fe-html-css-prj2-apollo.onrender.com/assets/come-2-DOrigOkn.png",
        name: "Combo Comedor Redondo",
        rating: 5,
        description: "DKO Amaretto + 4 Sillas Negra",
        normalPrice: "$1.159.900",
        discountedPrice: "$929.900",
        specifications: [
            { feature: "Type", value: "Comedor Redondo" },
            { feature: "Chairs", value: "4" },
            { feature: "Color", value: "Amaretto" }
        ]
    },
    {
        id: 74,
        optionId: 14,
        image: "https://web-fe-html-css-prj2-apollo.onrender.com/assets/come-3-Dl-_Z8Dz.png",
        name: "Set x 2 Mesas DKO",
        rating: 4,
        description: "Triangulares Shine Amaretto",
        normalPrice: "$499.900",
        discountedPrice: "$348.900",
        specifications: [
            { feature: "Type", value: "Mesas Triangulares" },
            { feature: "Color", value: "Shine Amaretto" }
        ]
    },
    {
        id: 75,
        optionId: 14,
        image: "https://web-fe-html-css-prj2-apollo.onrender.com/assets/come-4-BOFvelfp.png",
        name: "Mesa de Centro DKO",
        rating: 3,
        description: "Color Amaretto",
        normalPrice: "$269.900",
        discountedPrice: "$202.900",
        specifications: [
            { feature: "Type", value: "Mesa de Centro" },
            { feature: "Color", value: "Amaretto" }
        ]
    },
    {
        id: 76,
        optionId: 14,
        image: "https://web-fe-html-css-prj2-apollo.onrender.com/assets/come-5-ZeYifkZO.png",
        name: "Mesa de Centro NAO DKO",
        rating: 4,
        description: "DESIGN Blanca - 40 x 60 x 60 cm",
        normalPrice: "$209.900",
        discountedPrice: "$169.900",
        specifications: [
            { feature: "Type", value: "Mesa de Centro" },
            { feature: "Dimensions", value: "40 x 60 x 60 cm" },
            { feature: "Color", value: "Blanca" }
        ]
    },
    {
        id: 77,
        optionId: 15,
        image: "https://web-fe-html-css-prj2-apollo.onrender.com/assets/coci-1-nZrAOld6.png",
        name: "Batería de Cocina 8 Piezas + 2 Sartenes UNIVERSAL Antiadherente",
        rating: 4,
        description: "Tapa de Vidrio",
        normalPrice: "$237.100",
        discountedPrice: "$213.390",
        specifications: [
            { feature: "Type", value: "Batería de Cocina" },
            { feature: "Pieces", value: "8 Piezas + 2 Sartenes" },
            { feature: "Material", value: "Antiadherente" },
            { feature: "Lid", value: "Tapa de Vidrio" }
        ]
    },
    {
        id: 78,
        optionId: 15,
        image: "https://web-fe-html-css-prj2-apollo.onrender.com/assets/coci-2-Crd0dbH2.png",
        name: "Batería / Juego de Ollas 7 Piezas IMUSA Antiadherente",
        rating: 4,
        description: "Olla a Presión 4 Litros",
        normalPrice: "$422.000",
        discountedPrice: "$253.200",
        specifications: [
            { feature: "Type", value: "Batería de Ollas" },
            { feature: "Pieces", value: "7 Piezas" },
            { feature: "Material", value: "Antiadherente" },
            { feature: "PressureCooker", value: "Olla a Presión 4 Litros" }
        ]
    },
    {
        id: 79,
        optionId: 15,
        image: "https://web-fe-html-css-prj2-apollo.onrender.com/assets/coci-3-DwlmUQVC.png",
        name: "Olla a Presión IMUSA 7 Litros SecuryPlus",
        rating: 5,
        description: "Cierre Interno",
        normalPrice: "$159.900",
        discountedPrice: "$109.900",
        specifications: [
            { feature: "Type", value: "Olla a Presión" },
            { feature: "Capacity", value: "7 Litros" },
            { feature: "Closure", value: "Cierre Interno" }
        ]
    },
    {
        id: 80,
        optionId: 15,
        image: "https://web-fe-html-css-prj2-apollo.onrender.com/assets/coci-4-DrKNcmvx.png",
        name: "Olla a Presión UNIVERSAL",
        rating: 3,
        description: "6 Litros Acero Inoxidable",
        normalPrice: "",
        discountedPrice: "$399.900",
        specifications: [
            { feature: "Type", value: "Olla a Presión" },
            { feature: "Capacity", value: "6 Litros" },
            { feature: "Material", value: "Acero Inoxidable" }
        ]
    },
    {
        id: 81,
        optionId: 15,
        image: "https://web-fe-html-css-prj2-apollo.onrender.com/assets/coci-5-rMKZfsB9.png",
        name: "Sartén 30 cm IMUSA Natural Stone",
        rating: 4,
        description: "Tapa de Vidrio",
        normalPrice: "$159.900",
        discountedPrice: "$109.900",
        specifications: [
            { feature: "Type", value: "Sartén" },
            { feature: "Diameter", value: "30 cm" },
            { feature: "Material", value: "Natural Stone" },
            { feature: "Lid", value: "Tapa de Vidrio" }
        ]
    },
    {
        id: 82,
        optionId: 16,
        image: "https://web-fe-html-css-prj2-apollo.onrender.com/assets/ba-1-C2gytb-3.png",
        name: "Toalla de Cuerpo CANNON Sasha",
        rating: 4,
        description: "70 x 140 cm / 500 grms Blanca",
        normalPrice: "",
        discountedPrice: "$59.900",
        specifications: [
            { feature: "Type", value: "Toalla de Cuerpo" },
            { feature: "Size", value: "70 x 140 cm" },
            { feature: "Weight", value: "500 grms" },
            { feature: "Color", value: "Blanca" }
        ]
    },
    {
        id: 83,
        optionId: 16,
        image: "https://web-fe-html-css-prj2-apollo.onrender.com/assets/ba-2-CKCbRxex.png",
        name: "Bata de Baño Mujer FATELARES Verano",
        rating: 5,
        description: "320 grms Blanca",
        normalPrice: "",
        discountedPrice: "$88.900",
        specifications: [
            { feature: "Type", value: "Bata de Baño" },
            { feature: "Gender", value: "Mujer" },
            { feature: "Weight", value: "320 grms" },
            { feature: "Color", value: "Blanca" }
        ]
    },
    {
        id: 84,
        optionId: 16,
        image: "https://web-fe-html-css-prj2-apollo.onrender.com/assets/ba-3-F869r5iv.png",
        name: "Espejo Rectangular FREE HOME",
        rating: 4,
        description: "Con Joyero de Bambú",
        normalPrice: "",
        discountedPrice: "$49.900",
        specifications: [
            { feature: "Type", value: "Espejo Rectangular" },
            { feature: "Material", value: "Bambú" },
            { feature: "Feature", value: "Con Joyero" }
        ]
    },
    {
        id: 85,
        optionId: 16,
        image: "https://web-fe-html-css-prj2-apollo.onrender.com/assets/ba-4--kU5h-38.png",
        name: "Dispensador de jabón URUYEN",
        rating: 3,
        description: "Legacy Blanco",
        normalPrice: "",
        discountedPrice: "$34.900",
        specifications: [
            { feature: "Type", value: "Dispensador de jabón" },
            { feature: "Color", value: "Blanco" }
        ]
    },
    {
        id: 86,
        optionId: 16,
        image: "https://web-fe-html-css-prj2-apollo.onrender.com/assets/ba-5-DMBg-Hw5.png",
        name: "Recipiente para Almacenar Jabón SANREMO",
        rating: 0,
        description: "Con Rollo Quita Pelusas",
        normalPrice: "",
        discountedPrice: "$31.900",
        specifications: [
            { feature: "Type", value: "Recipiente para Jabón" },
            { feature: "Feature", value: "Con Rollo Quita Pelusas" }
        ]
    }    
];
module.exports = products;
