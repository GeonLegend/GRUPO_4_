window.addEventListener("load", () => {
    const form = document.querySelector(".register-form");
    let errores = {};

    const name = document.getElementById("name");
    const surname = document.getElementById("surname");
    const radioButtons = document.querySelectorAll('input[name="gender"]');
    const uploadAvatar = document.getElementById("uploadAvatar");
    const email = document.getElementById("email");
    const contraseña = document.getElementById("contraseña");
    const confirmarContraseña = document.getElementById("confirmarContraseña");

    /* Funcion para validar si existe una clase borrarla y agregarle otra clase */
    function validfield(input, class1, class2){
        if(input.classList.contains(class1)){
            input.classList.remove(class1);
        }
        input.classList.add(class2);
    }

    name.addEventListener("input", () => {
        let namep = document.querySelector(".namep");
        if (name.value.length < 2) {
            errores.name = "El nombre debe tener almenos 2 caracterés";
            validfield(name, "valid-field", "invalid-field");
        } else if (name.value.length >= 2) {
            errores.name = "";
            validfield(name, "invalid-field", "valid-field");
        }
        namep.innerText = errores.name;
    });

    surname.addEventListener("input", () => {
        let surnamep = document.querySelector(".surnamep");
        if (surname.value.length < 2) {
            errores.surname = "El apellido debe tener almenos 2 caracterés";
            validfield(surname, "valid-field", "invalid-field");
        } else if (surname.value.length >= 2) {
            errores.surname = "";
            validfield(surname, "invalid-field", "valid-field");
        }
        surnamep.innerText = errores.surname;
    });

    radioButtons.forEach(radio => { radio.addEventListener("change", () => {
        errores.gender = ""
        document.querySelector(".genderp").innerText = errores.gender;
    })});

    uploadAvatar.addEventListener("change", () => {
        let avatarFilep = document.querySelector(".avatarFilep");
        let type = uploadAvatar.files[0].type;
        if (type == "image/jpg" || type == "image/jpeg" || type == "image/png" || type == "image/gif") {
            avatarFilep.innerText = uploadAvatar.files[0].name;
            delete errores.avatarFile;
        } else {
            errores.avatarFile = "Los formatos permitidos son: jpg, jpeg, png, gif";
            avatarFilep.innerText = errores.avatarFile;
        }
    });

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
        let passwordp = document.querySelector(".passwordp");
        const regexPassword = /^(?=(?:.*[A-Z]){2})(?=(?:.*[a-z]){2})(?=.*\d)(?=.*[@$!%*?&+=(){}[\]:;<>,./\\^_`|~-])[\w@$!%*?&+=(){}[\]:;<>,./\\^_`|~-]*$/;
        if (!regexPassword.test(contraseña.value)) {
            errores.password = "Debe tener mayúsculas, minúsculas, 1 número y 1 carácter especial";
            validfield(contraseña, "valid-field", "invalid-field");

        } else if (contraseña.value.length < 8) {
            errores.password = "De se ser por lo menos de 8 caracteres";
            validfield(contraseña, "valid-field", "invalid-field");
        } else {
            errores.password = "";
            validfield(contraseña, "invalid-field", "valid-field");
        }
        passwordp.innerText = errores.password;
    });

    confirmarContraseña.addEventListener("input", () => {
        let repasswordp = document.querySelector(".repasswordp");
        if (contraseña.value != confirmarContraseña.value) {
            errores.repassword = "Las contraseñas no coinciden";
            validfield(confirmarContraseña, "valid-field", "invalid-field");
        } else {
            errores.repassword = "";
            validfield(confirmarContraseña, "invalid-field", "valid-field");
        }
        repasswordp.innerText = errores.repassword;
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
        notEmpty("name", name, ".namep");
        notEmpty("surname", surname, ".surnamep");
        
        // Verificar si alguno de los radio buttons está marcado
        if(!Array.from(radioButtons).some(radio => radio.checked)){
            errores.gender = "Debes seleccionar algún género";
            document.querySelector(".genderp").innerText = errores.gender;
        }
        
        notEmpty("avatarFile", uploadAvatar, ".avatarFilep");
        notEmpty("email", email, ".emailp");
        notEmpty("password", contraseña, ".passwordp");
        notEmpty("repassword", confirmarContraseña, ".repasswordp");

        for (let error in errores) {
            if(errores[error] != ""){
                event.preventDefault();
            }
        };
    })
});