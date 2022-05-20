import { IClientMeta } from "@walletconnect/types";
import React, { FunctionComponent, ReactNode } from "react";
import { ModalClassNames } from ".";
import { Wallet, WalletClient } from "./common";
interface ConnectedWallet {
    wallet: Wallet;
    client: WalletClient;
}
interface WalletManagerContextInfo {
    connect: () => void;
    disconnect: () => Promise<void>;
    connectedWallet?: ConnectedWallet;
    connectionError?: unknown;
    isMobileWeb: boolean;
}
export declare const WalletManagerContext: React.Context<WalletManagerContextInfo | null>;
export declare enum Event {
    WalletSelected = "wallet_selected"
}
interface WalletManagerProviderProps {
    wallets: Wallet[];
    enableWallet: (wallet: Wallet, walletClient: WalletClient) => Promise<void> | void;
    classNames?: ModalClassNames;
    closeIcon?: ReactNode;
    preselectedWalletId?: string | undefined;
    walletConnectClientMeta?: IClientMeta;
    attemptAutoConnect?: boolean;
    renderLoader?: () => ReactNode;
}
export declare const WalletManagerProvider: FunctionComponent<WalletManagerProviderProps>;
export declare const useWalletManager: () => WalletManagerContextInfo;
export {};
//# sourceMappingURL=WalletManagerContext.d.ts.map