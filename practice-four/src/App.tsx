import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { ChakraProvider } from '@/providers';
import { ErrorBoundary, Layout } from '@/components';

import { Home } from '@/pages';

const queryClient = new QueryClient({
  defaultOptions: {
    mutations: {
      throwOnError: true,
    },
    queries: {
      throwOnError: true,
    },
  },
});

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ChakraProvider>
      <ErrorBoundary>
        <Layout>
          <Home />
        </Layout>
      </ErrorBoundary>
    </ChakraProvider>
  </QueryClientProvider>
);

export default App;
