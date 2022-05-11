import { FunctionComponent, ReactElement } from "react";
export interface BaseModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
    title?: ReactElement | string;
    maxWidth?: string;
}
export declare const BaseModal: FunctionComponent<BaseModalProps>;
//# sourceMappingURL=BaseModal.d.ts.map