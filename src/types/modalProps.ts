export interface FormInModalProps {
    online?: boolean;
    className?: string;
    title?: string;
    notificationHandler: (_submitFn: SubmitFnType) => Promise<void>;
}
export type SubmitFnType = () => Promise<void>;
