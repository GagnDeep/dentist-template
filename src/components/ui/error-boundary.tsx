"use client";

import React, { Component, type ErrorInfo, type ReactNode } from "react";
import { Button } from "@/components/ui/button";

interface Props {
  children?: ReactNode;
}

interface State {
  hasError: boolean;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
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
        <div className="flex flex-col items-center justify-center p-8 bg-muted/20 rounded-lg border border-destructive/20 text-center">
          <h2 className="text-xl font-bold text-destructive mb-2">Something went wrong.</h2>
          <p className="text-muted-foreground mb-4">We apologize for the inconvenience.</p>
          <Button onClick={() => this.setState({ hasError: false })} variant="outline">
            Try again
          </Button>
        </div>
      );
    }

    return this.props.children;
  }
}
