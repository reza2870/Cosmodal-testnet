import { FunctionComponent, ReactElement } from "react";
export interface ModalClassNames {
    modalContent?: string;
    modalOverlay?: string;
    modalHeader?: string;
    modalCloseButton?: string;
    walletList?: string;
    wallet?: string;
    walletIconImg?: string;
    walletInfo?: string;
    walletName?: string;
    walletDescription?: string;
}
export interface BaseModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
    title?: ReactElement | string;
    maxWidth?: string;
    classNames?: ModalClassNames;
}
export declare const BaseModal: FunctionComponent<BaseModalProps>;
//# sourceMappingURL=BaseModal.d.ts.map