// objeto_envio.ts

// Logística y rastreo de paquetes

const envio: {
    guia: string;
    pesoKg: number;
    destino: {
        ciudad: string;
        cp: string;
    };
    entregado: boolean;
} = {
    guia: "MX778899",
    pesoKg: 3.2,
    destino: {ciudad: "Guadalajara", cp: "44100"},
    entregado: false,
};

// Marca como entregado y muestra el estado
envio.entregado = true;
console.log(`Guía ${envio.guia}, entregado: ${envio.entregado}`);
