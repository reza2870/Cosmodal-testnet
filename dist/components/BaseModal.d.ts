import { FunctionComponent, ReactElement, ReactNode } from "react";
export interface ModalClassNames {
    modalContent?: string;
    modalOverlay?: string;
    modalHeader?: string;
    modalSubheader?: string;
    modalCloseButton?: string;
    walletList?: string;
    wallet?: string;
    walletImage?: string;
    walletInfo?: string;
    walletName?: string;
    walletDescription?: string;
    textContent?: string;
}
export interface BaseModalProps {
    isOpen: boolean;
    onClose?: () => void;
    title?: ReactElement | string;
    maxWidth?: string;
    classNames?: ModalClassNames;
    closeIcon?: ReactNode;
}
export declare const BaseModal: FunctionComponent<BaseModalProps>;
export declare const ModalSubheader: import("styled-components").StyledComponent<"div", any, {}, never>;
//# sourceMappingURL=BaseModal.d.ts.map