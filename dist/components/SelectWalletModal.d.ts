import { FunctionComponent } from "react";
import { BaseModalProps } from "./BaseModal";
export interface Wallet {
    id: string;
    name: string;
    description: string;
    logoImgUrl: string;
}
export declare const SelectWalletModal: FunctionComponent<BaseModalProps & {
    wallets: Wallet[];
    selectWallet: (walletId: string) => void;
}>;
//# sourceMappingURL=SelectWalletModal.d.ts.map