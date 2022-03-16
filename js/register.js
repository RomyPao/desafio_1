const enviar = document.getElementById("enviar");

enviar.addEventListener("click", validar);

function valida_dni() {
    if (this.dni.value.length > 8) {
        this.dni.value = this.dni.value.slice(0, 8);
    }
}

function valida_fecha() {
    var hoy = new Date(new Date().toDateString());
    var fechaFormulario = new Date(this.fechaCumpleanio.value);

    if (hoy.getTime() > fechaFormulario.getTime()) {
        fechaError.classList.add("disable");
        this.fechaCumpleanio.classList.add("valido");
        fechaError.setAttribute("aria-hidden", true);
        fechaError.setAttribute("aria-invalid", false);
    }
    else {
        fechaError.classList.add("visible");
        this.fechaCumpleanio.classList.add("invalido");
        fechaError.setAttribute("aria-hidden", false);
        fechaError.setAttribute("aria-invalid", true);
    }
}

function valida_email() {
    var expr = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

    if (!expr.test(this.email.value)) {                                                            //COMPRUEBA MAIL
        const emailValidError = document.getElementById("emailValidError");
        emailValidError.classList.add("visible");
        this.email.classList.add("invalido");
        emailValidError.setAttribute("aria-hidden", false);
        emailValidError.setAttribute("aria-invalid", true);
    }
}
function validar(e) {
    e.preventDefault();

    var campoNombre = document.getElementById("nombre");
    var campoApellido = document.getElementById("apellido");
    var campoDni = document.getElementById("dni");
    var campoNacionalidad = document.getElementById("nacionalidad");
    var campoFechaCumpleanio = document.getElementById("fechaCumpleanio");

    var campoNomApe = document.getElementById("firstLastName");
    var campoDomicilio = document.getElementById("address");
    var campoCiudad = document.getElementById("city");
    var campoPais = document.getElementById("country");
    var campoEmail = document.getElementById("email");
    var campoTelefono = document.getElementById("phone");

    var isChecked = document.getElementById('check');

    if ((campoNombre.value == "") || (campoApellido.value == "") || (campoDni.value == "") ||
        (campoNacionalidad.value == "") || (campoFechaCumpleanio.value == "") || (campoNomApe.value == "") ||
        (campoDomicilio.value == "") || (campoCiudad.value == "") || (campoPais.value == "") ||
        (campoEmail.value == "") || (campoTelefono.value == "" || isChecked.checked == false)
    ) {
        if (!campoNombre.value) {
            const nombreError = document.getElementById("nombreError");
            nombreError.classList.add("visible");
            campoNombre.classList.add("invalido");
            nombreError.setAttribute("aria-hidden", false);
            nombreError.setAttribute("aria-invalid", true);
        }

        if (!campoApellido.value) {
            const apellidoError = document.getElementById("apellidoError");
            apellidoError.classList.add("visible");
            campoApellido.classList.add("invalido");
            apellidoError.setAttribute("aria-hidden", false);
            apellidoError.setAttribute("aria-invalid", true);
        }

        if (!campoDni.value) {
            const dniError = document.getElementById("dniError");
            dniError.classList.add("visible");
            campoDni.classList.add("invalido");
            dniError.setAttribute("aria-hidden", false);
            dniError.setAttribute("aria-invalid", true);
        }

        if (!campoNacionalidad.value) {
            const nacionalidadError = document.getElementById("nacionalidadError");
            nacionalidadError.classList.add("visible");
            campoNacionalidad.classList.add("invalido");
            nacionalidadError.setAttribute("aria-hidden", false);
            nacionalidadError.setAttribute("aria-invalid", true);
        }

        if (!campoFechaCumpleanio.value) {
            const fechaCumpleanioError = document.getElementById("fechaCumpleanioError");
            fechaCumpleanioError.classList.add("visible");
            campoFechaCumpleanio.classList.add("invalido");
            fechaCumpleanioError.setAttribute("aria-hidden", false);
            fechaCumpleanioError.setAttribute("aria-invalid", true);
        }

        if (!campoNomApe.value) {
            const firstLastNameError = document.getElementById("firstLastNameError");
            firstLastNameError.classList.add("visible");
            campoNomApe.classList.add("invalido");
            firstLastNameError.setAttribute("aria-hidden", false);
            firstLastNameError.setAttribute("aria-invalid", true);
        }

        if (!campoDomicilio.value) {
            const addressError = document.getElementById("addressError");
            addressError.classList.add("visible");
            campoDomicilio.classList.add("invalido");
            addressError.setAttribute("aria-hidden", false);
            addressError.setAttribute("aria-invalid", true);
        }

        if (!campoCiudad.value) {
            const cityError = document.getElementById("cityError");
            cityError.classList.add("visible");
            campoCiudad.classList.add("invalido");
            cityError.setAttribute("aria-hidden", false);
            cityError.setAttribute("aria-invalid", true);
        }

        if (!campoPais.value) {
            const countryError = document.getElementById("countryError");
            countryError.classList.add("visible");
            campoPais.classList.add("invalido");
            countryError.setAttribute("aria-hidden", false);
            countryError.setAttribute("aria-invalid", true);
        }

        if (!campoEmail.value) {
            const emailError = document.getElementById("emailError");
            emailError.classList.add("visible");
            campoEmail.classList.add("invalido");
            emailError.setAttribute("aria-hidden", false);
            emailError.setAttribute("aria-invalid", true);
        }

        if (!campoTelefono.value) {
            const phoneError = document.getElementById("phoneError");
            phoneError.classList.add("visible");
            campoTelefono.classList.add("invalido");
            phoneError.setAttribute("aria-hidden", false);
            phoneError.setAttribute("aria-invalid", true);
        }

        if (isChecked.value) {
            alert('Debe seleccionar la casilla.')
        }
        alert('Debe completar todos los campos requeridos')
    } else {
        alert('Los datos fueron enviados, muchas gracias!!')

        window.location.href = "index.html";
    }
}