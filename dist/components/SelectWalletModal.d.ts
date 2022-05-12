import { FunctionComponent } from "react";
import { BaseModalProps } from "./BaseModal";
import { Wallet } from "./common";
export declare const SelectWalletModal: FunctionComponent<BaseModalProps & {
    wallets: Wallet[];
    selectWallet: (wallet: Wallet) => void;
}>;
declare const Wallet: import("styled-components").StyledComponent<"div", any, {}, never>;
export {};
//# sourceMappingURL=SelectWalletModal.d.ts.map