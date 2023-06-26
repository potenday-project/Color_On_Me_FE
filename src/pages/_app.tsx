import type { AppProps } from "next/app";
import { RecoilRoot } from "recoil";
import { cache } from "@emotion/css";
import { CacheProvider } from "@emotion/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import GlobalStyle from "@/styles/GlobalStyle";

declare global {
  interface Window {
    naver: any;
  }
}

export const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <QueryClientProvider client={queryClient}>
        <CacheProvider value={cache}>
          <GlobalStyle />
          <Component {...pageProps} />
          <ReactQueryDevtools initialIsOpen={false} />
        </CacheProvider>
      </QueryClientProvider>
    </RecoilRoot>
  );
}
