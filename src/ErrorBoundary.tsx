import { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
    children?: ReactNode;
}

interface State {
    hasError: boolean;
}

class ErrorBoundary extends Component<Props, State> {
    public state: State = {
        hasError: false
    };

    public static getDerivedStateFromError(_: Error): State {
        return { hasError: true };
    }

    public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        console.error("Uncaught error:", error, errorInfo);
    }

    public render() {
        if (this.state.hasError) {
            return (
                <div className="min-h-screen flex items-center justify-center bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-100 p-6">
                    <div className="text-center p-8 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl shadow-lg">
                        <h1 className="text-2xl font-bold mb-3">Something went wrong</h1>
                        <p className="text-slate-500 dark:text-slate-400 mb-6">An unexpected error occurred.</p>
                        <button
                            type="button"
                            onClick={() => window.location.reload()}
                            className="px-4 py-2 bg-primary hover:bg-primary-hover text-white rounded-lg transition-colors font-semibold uppercase text-xs tracking-wider"
                        >
                            Reload Page
                        </button>
                    </div>
                </div>
            );
        }
        return this.props.children;
    }
}

export default ErrorBoundary;
