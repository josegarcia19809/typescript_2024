import {genericFunctionArrow} from "./utils";
import {Villain, Hero} from ".";

const deadpool={
    name: 'Deadpool',
    realName: 'Wade Winston Wilson',
    dangerLevel: 130
}

console.log(genericFunctionArrow<Villain>(deadpool).name);
console.log(genericFunctionArrow<Villain>(deadpool).dangerLevel);

/*
El código import {Villain, Hero} from "."; indica que el archivo actual está importando
las definiciones de Villain y Hero desde el módulo raíz ("."). Este módulo raíz puede
ser un archivo llamado index.ts o index.js ubicado en la misma carpeta que este archivo,
ya que por convención, TypeScript y JavaScript consideran index como el archivo principal si
no se especifica un nombre concreto.

Ubicación del archivo index.ts o index.js
El archivo index.ts/index.js debe estar en la misma carpeta.
Este archivo probablemente actúa como un punto central de exportación, lo que facilita la
agrupación y reutilización de las definiciones (Villain, Hero, etc.) en otros módulos.
 */