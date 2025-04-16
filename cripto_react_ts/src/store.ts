import {create} from "zustand";
import {fetchCurrentCryptoPrice, getCryptos} from "./services/CryptoService.ts";
import {Cryptocurrency, Pair} from "./types";
import {devtools} from 'zustand/middleware';

type CryptoStore = {
    cryptoscurrencies: Cryptocurrency[]
    fetchCryptos: () => Promise<void>
    fetchData: (pair: Pair) => Promise<void>
}


export const useCryptoStore = create<CryptoStore>()(devtools((set) => ({
    cryptoscurrencies: [],
    fetchCryptos: async () => {
        const cryptocurrencies = await getCryptos();
        set(() => ({
            cryptoscurrencies: cryptocurrencies,
        }))
    },
    fetchData: async (pair) => {
        await fetchCurrentCryptoPrice(pair);
    }
})));