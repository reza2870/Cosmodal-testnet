import React, { FunctionComponent, ReactNode } from "react";
import { ModalClassNames } from ".";
import { Wallet, WalletClient } from "./common";
export declare const WalletManagerContext: React.Context<{
    getWalletClient: () => Promise<WalletClient | undefined>;
    setDefaultWalletId: (id: string | undefined) => void;
    connectedWalletId?: string | undefined;
} | null>;
export declare enum Event {
    ModalClose = "modal_close",
    QrModalClose = "qr_modal_close",
    WalletSelected = "wallet_selected"
}
interface WalletManagerProviderProps {
    wallets: Wallet[];
    children: ReactNode;
    classNames?: ModalClassNames;
    closeIcon?: ReactNode;
    defaultWalletId?: string | undefined;
}
export declare const WalletManagerProvider: FunctionComponent<WalletManagerProviderProps>;
export declare const useWalletManager: () => {
    getWalletClient: () => Promise<WalletClient | undefined>;
    setDefaultWalletId: (id: string | undefined) => void;
    connectedWalletId?: string | undefined;
};
export {};
//# sourceMappingURL=WalletManagerContext.d.ts.map