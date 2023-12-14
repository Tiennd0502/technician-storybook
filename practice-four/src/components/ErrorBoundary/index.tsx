import { Component, ReactNode } from 'react';
import { Button, Text, VStack } from '@chakra-ui/react';

interface State {
  hasError: boolean;
  error: Error | null;
}

interface ErrorBoundaryProps {
  children: ReactNode;
}

class ErrorBoundary extends Component<ErrorBoundaryProps, State> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): State {
    return {
      hasError: true,
      error: error,
    };
  }

  componentDidCatch(error: Error) {
    this.setState({
      error,
    });
  }

  render() {
    if (this.state.hasError) {
      return (
        <VStack minH='50vh' spacing='20px'>
          <Text size='lg'>An error has been occurred!! </Text>
          <Text as='sub' style={{ whiteSpace: 'pre-wrap', color: 'red' }}>
            {this.state.error?.message || (this.state.error as unknown as string)}
          </Text>
          <Button onClick={() => this.setState({ hasError: false })}>Try again?</Button>
        </VStack>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
