import { Keplr } from "@keplr-wallet/types";
import WalletConnect from "@walletconnect/client";
import { KeplrWalletConnectV1 } from "../providers";
export declare type WalletClient = Keplr | KeplrWalletConnectV1;
export interface Wallet {
    id: string;
    name: string;
    description: string;
    imageUrl: string;
    isWalletConnect: boolean;
    getClient: (walletConnect?: WalletConnect) => Promise<WalletClient | undefined>;
    onSelect?: () => Promise<void>;
}
//# sourceMappingURL=common.d.ts.map