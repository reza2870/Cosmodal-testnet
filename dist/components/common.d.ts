import { Keplr } from "@keplr-wallet/types";
import WalletConnect from "@walletconnect/client";
import { KeplrWalletConnectV1 } from "../providers";
export declare type WalletClient = Keplr | KeplrWalletConnectV1;
export interface Wallet {
    id: string;
    name: string;
    description: string;
    logoImgUrl: string;
    getClient: (connector?: WalletConnect) => Promise<WalletClient | undefined>;
    isWalletConnect: boolean;
}
//# sourceMappingURL=common.d.ts.map