var localStorage = window.localStorage;

localStorage.clear();


///-----------------------------------------------USUARIOS
var usuarios = [
    {
        nombre: "John",
        apellido: "Doe",
        correo: "johndoe@example.com",
        contrasenia: "password"
    },
    {
        nombre: "Jane",
        apellido: "Smith",
        correo: "janesmith@example.com",
        contrasenia: "123456"
    },
    {
        nombre: "Michael",
        apellido: "Johnson",
        correo: "michaeljohnson@example.com",
        contrasenia: "qwerty"
    },
    {
        nombre: "Emily",
        apellido: "Davis",
        correo: "emilydavis@example.com",
        contrasenia: "letmein"
    },
    {
        nombre: "Daniel",
        apellido: "Wilson",
        correo: "danielwilson@example.com",
        contrasenia: "welcome"
    },
    {
        nombre: "Olivia",
        apellido: "Anderson",
        correo: "oliviaanderson@example.com",
        contrasenia: "password123"
    }
];


///-----------------------------------------------CATEGORIAS
var categorias = [
    {
        nombreCategoria: "Desayunos",
        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
        color: "#F2CA52",
        icono: "fa-solid fa-egg fa-lg",
        productos: [
            {
                nombreProducto: "Desayuno Casero",
                imagen: "img/categories/breakfast/IMG-001.png",
                descripcion: "Huevos revueltos acompañados de frijoles, plátano frito, aguacate, mantequilla y tortillas o pan.",
                precio: 60.00
            },
        ]
    },
    {
        nombreCategoria: "Almuerzos",
        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
        color: "#9BC1E6",
        icono: "fa-solid fa-drumstick-bite fa-lg",
        productos: [
            {
                nombreProducto: "Chuleta con Tajadas",
                imagen: "img/categories/launch/IMG-001.jpg",
                descripcion: "Deliciosa chuleta de cerdo con tajadas, aderezo y chismol.",
                precio: 75.00
            }
        ]
    },
    {
        nombreCategoria: "Cenas",
        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
        color: "#9481C3",
        icono: "fa-solid fa-bowl-rice fa-lg",
        productos: [
            {
                nombreProducto: "Cena Típica",
                imagen: "img/categories/dinner/IMG-001.jpg",
                descripcion: "Incluye frijoles fritos, huevo picado, aguacate, platano fritos, queso y embutido.",
                precio: 70.00
            },
        ]
    },
    {
        nombreCategoria: "Pupusas",
        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
        color: "#D98E6E",
        icono: "fa-solid fa-circle fa-lg",
        productos: [
            {
                nombreProducto: "Pupusa de Quesillo",
                imagen: "img/categories/pupusas/IMG-001.jpg",
                descripcion: "Deliciosas pupusas de quesillo.",
                precio: 30.00
            },
            {
                nombreProducto: "Pupusa de Chicharron",
                imagen: "img/categories/pupusas/IMG-005.jpg",
                descripcion: "Deliciosas pupusas de chicharron.",
                precio: 30.00
            },
            {
                nombreProducto: "Pupusa de Loroco",
                imagen: "img/categories/pupusas/IMG-003.jpg",
                descripcion: "Deliciosas pupusas de loroco.",
                precio: 30.00
            }
        ]
    },
    {
        nombreCategoria: "Carne Asada",
        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
        color: "#F2AEAE",
        icono: "fa-solid fa-cheese fa-lg",
        productos: [
            {
                nombreProducto: "Carne asada sencilla de cerdo",
                imagen: "img/categories/carne_asada/IMG-007.jpg",
                descripcion: "Carne asada de cerdo con frijoles, queso, platano frito, chismol y tortillas.",
                precio: 80.00
            },
            {
                nombreProducto: "Carne asada doble de cerdo",
                imagen: "img/categories/carne_asada/IMG-002.jpg",
                descripcion: "Carne asada de cerdo con frijoles, queso, platano frito, chismol y tortillas.",
                precio: 120.00
            },
            {
                nombreProducto: "Chorizos",
                imagen: "img/categories/carne_asada/IMG-004.jpg",
                descripcion: "Delicioso chorizo asado.",
                precio: 20.00
            },

        ]
    },
    {
        nombreCategoria: "Sopas",
        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
        color: "#CFB8F0",
        icono: "fa-solid fa-bowl-food fa-lg",
        productos: [
            {
                nombreProducto: "Sopa de Mondongo",
                imagen: "img/categories/soup/IMG-004.jpg",
                descripcion: "Sopa de mondogo con verduras y arroz.",
                precio: 65.00
            },
            {
                nombreProducto: "Sopa de Res",
                imagen: "img/categories/soup/IMG-003.jpg",
                descripcion: "Sopa de carne de res, verduras y arroz",
                precio: 65.00
            },
            {
                nombreProducto: "Sopa de Frijoles",
                imagen: "img/categories/soup/IMG-005.jpg",
                descripcion: "Sopa de frijoles, costilla de cerdo, verduras y arroz.",
                precio: 65.00
            },
            {
                nombreProducto: "Sopa de Albondigas",
                imagen: "img/categories/soup/IMG-001.jpg",
                descripcion: "Sopa de albondigas de carne de res, verduras y arroz.",
                precio: 65.00
            }
        ]
    },
    {
        nombreCategoria: "Golosinas",
        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
        color: "#F2ACAC",
        icono: "fa-solid fa-bowl-food fa-lg",
        productos: [
            {
                nombreProducto: "Pastelitos",
                imagen: "img/categories/golosinas/IMG-004.jpg",
                descripcion: "Pastelitos rellenos de carne o papa con ensalada y salsa.",
                precio: 20.00
            },
            {
                nombreProducto: "Enchiladas",
                imagen: "img/categories/golosinas/IMG-001.jpg",
                descripcion: "Enchiladas con carne, ensalada, queso y salsa.",
                precio: 25.00
            },
            {
                nombreProducto: "Tajadas",
                imagen: "img/categories/golosinas/IMG-002.jpeg",
                descripcion: "Tajadas de minimo verde con carne, chismol y salsa.",
                precio: 40.00
            },
            {
                nombreProducto: "Tacos",
                imagen: "img/categories/golosinas/IMG-003.jpg",
                descripcion: "Deliciosos tacos con encurtido y salsa. Orden de 2.",
                precio: 40.00
            }
        ]
    },
    {
        nombreCategoria: "Bebidas",
        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
        color: "#60CFAF",
        icono: "fa-solid fa-beer-mug-empty fa-lg",
        productos: [
            {
                nombreProducto: "Coca Cola 1.5lt",
                imagen: "img/categories/drinks/IMG-002.png",
                descripcion: "Gaseosa Coca Cola original 1.5 lt",
                precio: 33.00
            },
            {
                nombreProducto: "Coca Cola 500ml",
                imagen: "img/categories/drinks/IMG-001.png",
                descripcion: "Gaseosa Coca Cola regular 500ml",
                precio: 18.00
            },
            {
                nombreProducto: "Coca Cola 355ml",
                imagen: "img/categories/drinks/IMG-003.png",
                descripcion: "Gaseosa Coca Cola Lata 355ml",
                precio: 16.00
            },
            {
                nombreProducto: "Fresco Natural",
                imagen: "img/categories/drinks/IMG-004.jpg",
                descripcion: "Refrescante bebida 100% natural.",
                precio: 16.00
            },
            {
                nombreProducto: "Cafe",
                imagen: "img/categories/drinks/IMG-005.avif",
                descripcion: "Delicioso café caliente de grano de alta calidad 100% hondureño, recién molido",
                precio: 7.99
            }
        ]
    }
];

var ordenes = [
    {
        "nombre": " ",
        "pedido": [

        ],
        "subtotal": 0,
        "isv": 0,
        "total": 0,
}
];


if (localStorage.getItem('usuarios') == null) {
    localStorage.setItem('usuarios', JSON.stringify(usuarios));
} else {
    usuarios = JSON.parse(localStorage.getItem('usuarios'));
}

if (localStorage.getItem('categorias') == null) {
    localStorage.setItem('categorias', JSON.stringify(categorias));
} else {
    categorias = JSON.parse(localStorage.getItem('categorias'));
}

if (localStorage.getItem('ordenes') == null) {
    localStorage.setItem('ordenes', JSON.stringify(ordenes));
} else {
    ordenes = JSON.parse(localStorage.getItem('ordenes'));
}
