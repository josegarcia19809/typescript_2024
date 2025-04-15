import {create} from "zustand";
import {getCryptos} from "./services/CryptoService.ts";
import {Cryptocurrency} from "./types";
import {devtools} from 'zustand/middleware';

type CryptoStore = {
    cryptoscurrencies: Cryptocurrency[]
    fetchCryptos: () => Promise<void>
}


export const useCryptoStore = create<CryptoStore>()(devtools((set) => ({
    cryptoscurrencies: [],
    fetchCryptos: async () => {
        const cryptocurrencies = await getCryptos();
        set(() => ({
            cryptoscurrencies: cryptocurrencies,
        }))
    }
})));