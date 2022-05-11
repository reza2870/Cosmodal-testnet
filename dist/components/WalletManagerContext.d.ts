import WalletConnect from "@walletconnect/client";
import React, { FunctionComponent, ReactNode } from "react";
import { ModalClassNames } from ".";
export interface WalletInfo {
    id: string;
    name: string;
    description: string;
    logoImgUrl: string;
    getWallet: (connector?: WalletConnect) => Promise<any>;
}
export declare const WalletManagerContext: React.Context<{
    getWallet: () => Promise<any>;
    clearLastUsedWallet: () => void;
    setDefaultConnectionType: (type: string | undefined) => void;
    connectionType?: string | undefined;
} | null>;
export declare const WalletManagerProvider: FunctionComponent<{
    walletInfoList: WalletInfo[];
    children: ReactNode;
    classNames?: ModalClassNames;
}>;
export declare const useWalletManager: () => {
    getWallet: () => Promise<any>;
    clearLastUsedWallet: () => void;
    setDefaultConnectionType: (type: string | undefined) => void;
    connectionType?: string | undefined;
};
//# sourceMappingURL=WalletManagerContext.d.ts.map