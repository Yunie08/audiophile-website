import React from "react";

import { ErrorContainer } from "./error-boundary.styles";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error) {
    // Vous pouvez aussi enregistrer l'erreur au sein d'un service de rapport.
    console.log("Error caught in ErrorBoundary", error);
  }

  render() {
    return this.state.hasError ? (
      <ErrorContainer>
        <h1>Something went wrong...</h1>
      </ErrorContainer>
    ) : (
      this.props.children
    );
  }
}

export default ErrorBoundary;
