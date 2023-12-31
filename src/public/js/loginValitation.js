window.addEventListener("load", () => {
    const form = document.querySelector(".loginForm");
    let errores = {};

    const email = document.getElementById("email");
    const contraseña = document.getElementById("password");
    
    /* Funcion para validar si existe una clase borrarla y agregarle otra clase */
    function validfield(input, class1, class2){
        if(input.classList.contains(class1)){
            input.classList.remove(class1);
        }
        input.classList.add(class2);
    }

    email.addEventListener("input", () => {
        let emailp = document.querySelector(".emailp");
        const regexEmail = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!regexEmail.test(email.value)) {
            errores.email = "El email es inválido";
            validfield(email, "valid-field", "invalid-field");
        } else {
            errores.email = "";
            validfield(email, "invalid-field", "valid-field");
        }
        emailp.innerText = errores.email;
    });

    contraseña.addEventListener("input", () => {
        let passwordp = document.querySelector(".passwordp")
        if(contraseña.value){
            errores.password = "";
            validfield(contraseña, "invalid-field", "valid-field");
        }
        passwordp.innerText = errores.password;
    });

    /* Funcion para validar que el campo no este vacío */
    function notEmpty(nombre, campo1, campo2) {
        if (!campo1.value) {
            errores[nombre] = "Este campo no puede estar vacío";
            validfield(campo1, "valid-field", "invalid-field");
            document.querySelector(campo2).innerText = errores[nombre];
        }
    };

    form.addEventListener("submit", (event) => {
        notEmpty("email", email, ".emailp");
        notEmpty("password", contraseña, ".passwordp");

        for (let error in errores) {
            if(errores[error] != ""){
                event.preventDefault();
            }
        };
    })
})