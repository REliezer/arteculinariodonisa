let clienteLogueado = [];
var conectado = false;
var localStorage = window.localStorage;
var ordenes = JSON.parse(localStorage.getItem('ordenes'));

function generarCategorias() {
    document.getElementById("categoriasProductos").style.display = 'inline-block';
    document.getElementById("accionesPagina").style.display = 'flex';
    document.getElementById("login").style.display = 'none';

    document.getElementById('categorias').innerHTML = '';
    categorias.forEach(function (cat, index) {
        document.getElementById('categorias').innerHTML +=
            `<div id="categoria-col" class="col-sm-6 col-md-4 col-lg-3 col-xl-3 my-1">
        <div class="card" style="background-color: ${cat.color}" onclick="mostrarEmpresa(${index});">
            <div class="icono text-center" >
                <i class="${cat.icono} fa-xl" style="color: #1a3151;"></i>
            </div>
            <div class="card-body" >
                <h2 class="card-title">${cat.nombreCategoria}</h2>
                <p class="card-text">${cat.productos.length} Opciones</p>
            </div>
        </div>
        </div>`;
    });
}

function login() {
    document.getElementById("categoriasProductos").style.display = 'none';
    document.getElementById("accionesPagina").style.display = 'none';
    document.getElementById("login").style.display = 'block';
    document.getElementById("inputEmail").value = "";
    document.getElementById("inputPass").value = "";
    document.getElementById("liveAlertPlaceholderLogin").innerHTML = '';
}

function logout() {
    localStorage.removeItem('ordenes');
    clienteLogueado = [];
    conectado = false;
    generarUsuarios();
}

function verificarLogin() {
    let user = document.getElementById('inputEmail').value;
    let pass = document.getElementById('inputPass').value;
    let usuarioEncontrado = false;

    if (!conectado) {
        for (const element of usuarios) {
            if ((element.correo === user) & (element.contrasenia === pass)) {
                clienteLogueado[0] = {
                    "nombre": element.nombre,
                    "apellido": element.apellido
                }
                console.log(clienteLogueado[0]);

                const orden = {
                    nombre: element.nombre + " " + element.apellido,
                    pedido: [

                    ],
                    subtotal: 0,
                    isv: 0,
                    total: 0,
                };

                console.log(orden);
                localStorage.setItem('ordenes', JSON.stringify([orden]));

                conectado = true;
                usuarioEncontrado = true;
                break;
            }
        }

        if (!usuarioEncontrado) {
            const alertPlaceholder = document.getElementById('liveAlertPlaceholderLogin')
            const appendAlert = (message, type) => {
                const wrapper = document.createElement('div')
                wrapper.innerHTML = [
                    `<div class="alert alert-${type} alert-dismissible" role="alert">`,
                    `   <div>${message}</div>`,
                    '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
                    '</div>'
                ].join('')

                alertPlaceholder.append(wrapper)
            };
            appendAlert('Correo electronico o contraseña incorrecta.', 'danger');
        }
    }


    generarCategorias();
    generarUsuarios();
}

function generarUsuarios() {
    var divUser = document.getElementById('divUser');

    if (!conectado) { //false
        divUser.innerHTML = '';
        var buttonLogin = document.createElement('button');
        buttonLogin.id = 'buttonLogin';
        buttonLogin.textContent = 'Iniciar Sesión';
        buttonLogin.className = 'usuarios template';

        var icono = document.createElement('i');
        icono.className = 'fas fa-sign-in-alt';
        icono.style.display = 'none';
        buttonLogin.appendChild(icono);

        divUser.onclick = function () {
            login();
        };

        divUser.appendChild(buttonLogin);

    } else { //true
        divUser.onclick = null;
        var existe = document.getElementById('usuarioActual');
        document.getElementById('buttonLogin').style.display = 'none';

        if (existe) {
            existe.innerHTML = '';
            var optionUsuario = document.createElement('option');
            optionUsuario.value = 'usuarioLogueado';
            optionUsuario.textContent = `${clienteLogueado[0].nombre} ${clienteLogueado[0].apellido}`;
            existe.appendChild(optionUsuario);

            var optionCerrarSesion = document.createElement('option');
            optionCerrarSesion.value = 'cerrarSesion';
            optionCerrarSesion.textContent = 'Cerrar Sesión';
            existe.appendChild(optionCerrarSesion);

            existe.onchange = function () {
                if (selectUsuario.value === 'cerrarSesion') {
                    logout();
                }
            };
        } else {
            var selectUsuario = document.createElement('select');
            selectUsuario.className = 'form-select usuarios template';
            selectUsuario.id = 'usuarioActual';

            var optionUsuario = document.createElement('option');
            optionUsuario.value = 'usuarioLogueado';
            optionUsuario.textContent = `${clienteLogueado[0].nombre} ${clienteLogueado[0].apellido}`;
            selectUsuario.appendChild(optionUsuario);

            var optionCerrarSesion = document.createElement('option');
            optionCerrarSesion.value = 'cerrarSesion';
            optionCerrarSesion.textContent = 'Cerrar Sesión';
            selectUsuario.appendChild(optionCerrarSesion);

            selectUsuario.onchange = function () {
                if (selectUsuario.value === 'cerrarSesion') {
                    logout();
                }
            };
            divUser.appendChild(selectUsuario);
        }


    }
    inicio();

}

function inicio() {
    if (!conectado) {
        document.getElementById('tituloBienvenidos').innerHTML =
            `<h2>¡Bienvenido!</h2>
        <p>¿Que necesitas?</p>`;
    } else {
        document.getElementById('tituloBienvenidos').innerHTML =
            `<h2>¡Hola ${clienteLogueado[0].nombre}!</h2>
        <p>¿Que necesitas?</p>`;
    }

}

function verOrden() {
    document.getElementById('modal-cuerpo').innerHTML = '';
    if (ordenes !== null && ordenes.length > 0 && ordenes[0] !== undefined && ordenes[0].pedido !== undefined) {
        if ((ordenes[0].pedido.length != null)) {
            for (const element of ordenes[0].pedido) {
                document.getElementById('modal-cuerpo').innerHTML +=
                    `<div class="row">
                        <div class="col-9 d-flex align-items-center">
                            <h5 class="nombre-orden">${element.nombreProducto}</h5>
                        </div>
                        <div class="col-3 d-flex justify-content-end">
                        <i class="fa-regular fa-trash-can" style="color: #ff0000;" onclick="eliminarPedido('${element.nombreProducto}')" ></i>
                        </div>
                    </div>
                <p class="descripcion-orden">${element.descripcion}</p>
                <p class="precio-orden"style="text-align: right;">Precio: Lps. ${element.precio}</p>
                <p class="cantidad-orden"style="text-align: right;">Cantidad: ${element.cantidad}</p>
                <hr>`;
            }
            document.getElementById('modal-cuerpo').innerHTML +=
                `<p class="descripcion-orden" style="text-align: right;">Subtotal: Lps. ${ordenes[0].subtotal.toFixed(2)}</p>
                <p class="descripcion-orden" style="text-align: right;">ISV: Lps. ${ordenes[0].isv.toFixed(2)}</p>
                <p class="descripcion-orden" style="text-align: right;">Total: Lps. ${ordenes[0].total.toFixed(2)}</p>
                <hr>`;
        } else {
            document.getElementById('modal-cuerpo').innerHTML +=
                `<h2 class="">No tienes ninguna orden.</h2>`;
        }
        
        if (!conectado) {
            document.getElementById('modalTitulo').innerHTML =
            `<h5>Estas son tus ordenes</h5>`;

            document.getElementById('modal-cuerpo').innerHTML +=
        `
            <div class="mb-2" style="display: flex; justify-content: center;" >
                <button type="button" class="btn btn-outline-primary btn-lg" id="btnLogin" onclick="login()">Iniciar Sesión</button>
            </div>
        
        <div class="row">
            <div class="col" style="display: flex, float:right" >
                <label class="form-label descripcion-producto">Ingresa tu nombre:</label>
            </div>
            <div class="col" style="display: flex, float:left">
                <input type="text" class="form-control form-control-sm pl-0" id="nombreUser" onkeyup="validarRelleno()">
            </div>
        </div>`;
        }else{
            document.getElementById('modalTitulo').innerHTML =
            `<h5>${clienteLogueado[0].nombre}, Estas son tus ordenes</h5>`;

            var button = document.getElementById('liveAlertBtn');
            button.disabled = false;
        }
    } else {
        console.error("Error: La variable 'ordenes' no está definida o está vacía.");
    }
}

function mostrarEmpresa(index) {
    $('#modalEmpresa').modal('show');

    document.getElementById('modal-producto-titulo').innerHTML = '';
    document.getElementById('productos-cat').innerHTML = '';


    document.getElementById('modal-producto-titulo').innerHTML +=
        `<h1 class="modal-title fs-5" id="modalEmpresaLabel">${categorias[index].nombreCategoria}</h1>`;

    for (let i = 0; i < categorias[index].productos.length; i++) {
        document.getElementById("productos-cat").innerHTML +=
            `<div class="col-sm-12 col-md-6 my-1">
        <div class="celda-empresas">
            <div class="encabezado" style="background-image: url(${categorias[index].productos[i].imagen}) ;"><h2>${categorias[index].productos[i].nombreProducto}</h2></div>
                <div class="cuerpo-producto">                    
                    <div class="descripcion-producto">${categorias[index].productos[i].descripcion}</div>                    
                    <p class="precio-producto">Lps. ${categorias[index].productos[i].precio.toFixed(2)}</p>
                    <div class="row mb-2">
                    <div class="col"><button class="btn btn-primary boton-pedir" type="button" onclick="mostrarPedir(${index}, ${i});">Pedir</button></div>
                    </div>
                    <hr>                
                </div>
            </div>
        </div>`;
    }
}

function mostrarPedir(index, i) {
    $('#modalPedir').modal('show');
    console.log("index: ", index);
    console.log("i: ", i);

    document.getElementById("modal-pedir").innerHTML = '';

    document.getElementById("modal-pedir").innerHTML +=
        `<h5 class="nombre-producto" id="producto-nombre">${categorias[index].productos[i].nombreProducto}</h5>
    <p class="descripcion-producto" id="producto-descripcion">${categorias[index].productos[i].descripcion}</p>
    <div class="row">
        <div class="col" style="display: flex, float:right" >
            <label class="form-label descripcion-producto">Cantidad a solicitar</label>
        </div>
        <div class="col" style="display: flex, float:left">
            <input type="text" class="form-control form-control-sm pl-0" id="producto-cantidad">
        </div>
    </div>
    <p class="precio-producto" id="producto-precio">Lps. ${categorias[index].productos[i].precio.toFixed(2)}</p>
    `;
}

function procesarOrden() {
    let precio = (document.getElementById('producto-precio').textContent).split(' ');
    let cantidad = parseInt(document.getElementById('producto-cantidad').value);

    const nuevaOrden = {
        nombreProducto: document.getElementById('producto-nombre').textContent,
        descripcion: document.getElementById('producto-descripcion').textContent,
        cantidad: cantidad,
        precio: precio[1]
    }

    console.log(nuevaOrden);
    ordenes[0].pedido.push(nuevaOrden);

    ordenes[0].subtotal = 0;
    ordenes[0].isv = 0;
    ordenes[0].total = 0;

    for (const element of ordenes[0].pedido) {
        ordenes[0].total += element.precio * element.cantidad;
    }

    ordenes[0].isv = ordenes[0].total * 0.15;
    ordenes[0].subtotal = ordenes[0].total - ordenes[0].isv;

    localStorage.setItem('ordenes', JSON.stringify(ordenes));

    console.log(ordenes);
    verOrden();

    $('#modalPedir').modal('hide');
}

function finalizarOrden() {
    ordenes[0].pedido = [];
    ordenes[0].subtotal = 0;
    ordenes[0].isv = 0;
    ordenes[0].total = 0;

    localStorage.setItem('ordenes', JSON.stringify(ordenes));


    $('#modalOrdenesUsuario').modal('hide');

    $('.modal-backdrop').remove();

    const alertPlaceholder = document.getElementById('liveAlertPlaceholder')
    const appendAlert = (message, type) => {
        const wrapper = document.createElement('div')
        wrapper.innerHTML = [
            `<div class="alert alert-${type} alert-dismissible" role="alert">`,
            `   <div>${message}</div>`,
            '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
            '</div>'
        ].join('')

        alertPlaceholder.append(wrapper)
    }
    appendAlert('Su pedido fue enviado', 'success');

    inicio();
    verOrden();

}

function eliminarPedido(nombreProducto) {

    var indicePedido = (ordenes[0].pedido).findIndex(function (element) {
        return element.nombreProducto === nombreProducto;
    })
    if (indicePedido !== -1) {
        console.log('Eliminar producto con el indice', indicePedido);
        ordenes[0].pedido.splice(indicePedido, 1);
    }
    localStorage.setItem('ordenes', JSON.stringify(ordenes));

    $('#modalOrdenesUsuario').modal('hide');

    $('.modal-backdrop').remove();

    inicio();
    verOrden();
}

function validarRelleno() {
    var input = document.getElementById('nombreUser');
    var boton = document.getElementById('liveAlertBtn');

    if (input.value.trim() !== '') { 
        boton.disabled = false;
    } else {
        boton.disabled = true;
    }
}

generarCategorias();
generarUsuarios();

