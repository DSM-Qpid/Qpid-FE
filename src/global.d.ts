    declare global {
        interface Window {
            webview: {
                write: () => void;
                token: () => string;
                patch: any;
            }
        }
    }
    export {}