import { Keplr } from "@keplr-wallet/types";
import WalletConnect from "@walletconnect/client";
import React, { FunctionComponent, ReactNode } from "react";
import { KeplrWalletConnectV1 } from "../providers";
import { ModalClassNames } from ".";
export declare type WalletClient = Keplr | KeplrWalletConnectV1;
export interface WalletInfo {
    id: string;
    name: string;
    description: string;
    logoImgUrl: string;
    getWallet: (connector?: WalletConnect) => Promise<WalletClient | undefined>;
    isWalletConnect: boolean;
}
export declare const WalletManagerContext: React.Context<{
    getWallet: () => Promise<WalletClient | undefined>;
    clearLastUsedWallet: () => void;
    setDefaultConnectionType: (type: string | undefined) => void;
    connectionType?: string | undefined;
} | null>;
export declare enum Event {
    ModalClose = "modal_close",
    QrModalClose = "qr_modal_close"
}
interface WalletManagerProviderProps {
    walletInfoList: WalletInfo[];
    children: ReactNode;
    classNames?: ModalClassNames;
    closeIcon?: ReactNode;
}
export declare const WalletManagerProvider: FunctionComponent<WalletManagerProviderProps>;
export declare const useWalletManager: () => {
    getWallet: () => Promise<WalletClient | undefined>;
    clearLastUsedWallet: () => void;
    setDefaultConnectionType: (type: string | undefined) => void;
    connectionType?: string | undefined;
};
export {};
//# sourceMappingURL=WalletManagerContext.d.ts.map