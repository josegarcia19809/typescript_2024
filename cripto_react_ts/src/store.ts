import {create} from "zustand";
import {fetchCurrentCryptoPrice, getCryptos} from "./services/CryptoService.ts";
import {Cryptocurrency, CryptoPrice, Pair} from "./types";
import {devtools} from 'zustand/middleware';

type CryptoStore = {
    cryptoscurrencies: Cryptocurrency[]
    result: CryptoPrice
    loading: boolean
    fetchCryptos: () => Promise<void>
    fetchData: (pair: Pair) => Promise<void>
}


export const useCryptoStore = create<CryptoStore>()(devtools((set) => ({
    cryptoscurrencies: [],
    result: {
        IMAGEURL: '',
        PRICE: '',
        HIGHDAY: '',
        LOWDAY: '',
        CHANGEPCT24HOUR: '',
        LASTUPDATE: '',
    },
    loading: false,
    fetchCryptos: async () => {
        const cryptocurrencies = await getCryptos();
        set(() => ({
            cryptoscurrencies: cryptocurrencies,
        }))
    },
    fetchData: async (pair) => {
        set(() => ({
            loading: true,
        }))
        const result = await fetchCurrentCryptoPrice(pair);
        set(() => ({
            result,
            loading: false,
        }))
    }
})));