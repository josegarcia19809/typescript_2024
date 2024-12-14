type StringOrNum = string | number;
let userID: StringOrNum = "abx"
console.log(userID);

/*
    El código declara un tipo personalizado StringOrNum, que puede ser de tipo string o number.
    Esto es posible gracias a la unión de tipos (|), una característica de TypeScript que
    permite especificar múltiples tipos para una variable.

    Explicación paso a paso:
    Definición del tipo personalizado:

    type StringOrNum = string | number;
    El tipo StringOrNum es un alias que significa "puede ser un string o un number".
    Declaración de la variable:

    let userID: StringOrNum = "abx";
    Aquí, userID es declarado con el tipo StringOrNum.
    Se le asigna el valor "abx", que es un string, por lo que es válido.
 */