import * as React from 'react';

interface Props {
  children: React.ReactNode;
}

interface State {
  hasError: boolean;
}

export class ErrorBoundary extends React.Component<Props, State> {
  public state: State = {
    hasError: false,
  };

  public static getDerivedStateFromError(_: Error): State {
    return { hasError: true };
  }

  public componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('Error from ErrorBoundary', error, errorInfo);
  }

  public render() {
    if (this.state.hasError)
      return (
        <div>
          <p>Something went wrong.</p>
          <p>See error on console.</p>
        </div>
      );
    return this.props.children;
  }
}
