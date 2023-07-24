1 //Validar nombre
/**
 * Verificar que lo que se está introduciendo es un String
 * Verificar que todo lo q hay en el String son solo letras (ni números. ni carácteres especiales)
 */

/**
 * Función para validar un texto y que no sea vacio
 * @param {string} nombre 
 * @return {boolean} boolean true or false 
 * 
 */
function validarNombre(nombre) {
    const name = nombre.trim();
    // console.log("sin limpiar: ", nombre, " y limpio: ", name)
    const pattern = /^[a-zA-ZáéíóúüñÁÉÍÓÚÑ]+(?:[\s][a-zA-ZáéíóúüñÁÉÍÓÚÑ]+)*$/;
    // if(!pattern.test(input.value)){ 
    if (typeof name !== 'string' || name === "" || !pattern.test(name)) {
        console.log("No es nombre")

        return false
    } else {
        return true
    }

}

console.log(validarNombre("   MAria Jose   "))
console.log(validarNombre("       "))
console.log(validarNombre("   M3ra   i9olp  "))

2 //Validar email
/**
 * Localizar que el @ esté bien colocado (nombreusuario@servidor)
 * Que termine en "." + extensión del servidor (buscar listado)
 * ¿? Como se gestiona ¿? con Verificación por correo ¿? listado de servidores ¿?
 * Devolver Verdadero o falso
 */

/**
 * Función para validar un email, que no sea vacio y cumpla el patrón de un email.
 * @param {string} email 
 * @return {boolean} boolean true or false 
 * 
 */
function validarEmail(email) {
    const mail = email.trim();
    // console.log("sin limpiar: ", nombre, " y limpio: ", mail)
    const pattern = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
    // if(!pattern.test(input.value)){ 
    if (typeof mail !== 'string' || mail === "" || !pattern.test(mail)) {
        console.log("No es un email")

        return false
    } else {
        return true
    }

}

console.log(validarEmail("   yahoo@yahoo.es  "))
console.log(validarEmail("   333$mail.com    "))
console.log(validarEmail("   M3ra@   i9olp  "))


3 //Validar URL
/**
* Función para validar un url, que no sea vacio y cumpla el patrón de un url.
* @param {string} url 
* @return {boolean} boolean true or false 
* 
*/
function validarUrl(url) {
    const urlCheck = url.toString().trim();
    // console.log("sin limpiar: ", nombre, " y limpio: ", mail)
    const pattern = /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})$/;
    // console.log("resultado patron:", !pattern.test(urlCheck))
    // console.log("resultado vacio:", urlCheck === "")
    // console.log("resultado no string:", typeof urlCheck !== 'string')
    if (typeof urlCheck !== 'string' || urlCheck === "" || !pattern.test(urlCheck)) {
        console.log(urlCheck, " =} No es una URL")
        return false
    } else {
        console.log(urlCheck, " =} Es una url.")
        return true
    }

}

console.log(validarUrl(444))
console.log(validarUrl("http://www.w3school.com"))
console.log(validarUrl("   M3ra@   i9olp  "))

4 //Validar fecha de control
function verFormato(atributoFormato){
    console.log("funciona")
    console.log( document.querySelector(atributoFormato).value)
}
5 //Validar el tiempo en formato de hora
6 //Validar fecha y hora de nacimiento
7 //Validar mes
8 //Validar semana
9 //Validar un número entre los límites puestos
10 //Validar rango de número entre 0 y 10
11 //Validar número de teléfono
/**
 * Verificar que son numeros
 * Limitar la entrada de números a 9
 *
 */
12 //Validar termino de búsqueda
13 //Validar color