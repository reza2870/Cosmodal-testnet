import { IClientMeta } from "@walletconnect/types";
import React, { FunctionComponent, ReactNode } from "react";
import { ModalClassNames } from ".";
import { Wallet, WalletClient } from "./common";
interface ConnectedWallet {
    wallet: Wallet;
    client: WalletClient;
}
export declare const WalletManagerContext: React.Context<{
    connect: () => void;
    disconnect: () => Promise<void>;
    connectedWallet?: ConnectedWallet | undefined;
    connectionError?: unknown;
    isMobileWeb: boolean;
} | null>;
export declare enum Event {
    WalletSelected = "wallet_selected"
}
interface WalletManagerProviderProps {
    wallets: Wallet[];
    enableKeplr: (wallet: Wallet, walletClient: WalletClient) => Promise<void> | void;
    children: ReactNode;
    classNames?: ModalClassNames;
    closeIcon?: ReactNode;
    preselectedWalletId?: string | undefined;
    clientMeta?: IClientMeta;
    attemptAutoConnect?: boolean;
    renderLoader?: () => ReactNode;
}
export declare const WalletManagerProvider: FunctionComponent<WalletManagerProviderProps>;
export declare const useWalletManager: () => {
    connect: () => void;
    disconnect: () => Promise<void>;
    connectedWallet?: ConnectedWallet | undefined;
    connectionError?: unknown;
    isMobileWeb: boolean;
};
export {};
//# sourceMappingURL=WalletManagerContext.d.ts.map