import "@mantine/core/styles.css";

import { MantineProvider } from "@mantine/core";
import { Hairstyles } from "./pages/Hairstyles/Hairstyles";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <MantineProvider>
        <Hairstyles />
      </MantineProvider>
    </QueryClientProvider>
  );
}
