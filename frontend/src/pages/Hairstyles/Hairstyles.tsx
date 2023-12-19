import { Stack, SimpleGrid, Input, Pagination } from "@mantine/core";
import { HairCard } from "../../components/HairCard";
import { useHairStylesFilters } from "./useHairStylesFilters";
import { useQuery } from "react-query";
import { fetchHairstyles } from "../../api/fetchHairstyles";
import { useState } from "react";
import { HairstylesSkeleton } from "../../components/HairstylesSkeleton";

export function Hairstyles() {
  const { search, onSearchChange } = useHairStylesFilters();
  const [page, setPage] = useState(1);

  const { data, isLoading } = useQuery({
    queryKey: ["hairstyles", page, search],
    queryFn: ({ signal }) => fetchHairstyles({ page, search, signal }),
  });

  const onSearchInputChange = (value: string) => {
    onSearchChange(value);
    setPage(1);
  };

  return (
    <Stack p={20}>
      <Input
        size="md"
        placeholder="Search hairstyles..."
        onChange={(e) => onSearchInputChange(e.target.value)}
      />

      <SimpleGrid
        cols={{ base: 1, sm: 2, lg: 3 }}
        spacing={{ base: 10, sm: "xl" }}
        verticalSpacing={{ base: "md", sm: "xl" }}
      >
        {isLoading ? (
          <HairstylesSkeleton size={10} />
        ) : data?.data.length ? (
          data?.data.map((hairstyle) => {
            return (
              <HairCard
                key={hairstyle.id}
                title={hairstyle.name}
                price={hairstyle.price}
                imageUrl={`https://api.slingacademy.com/public/sample-photos/${hairstyle.id}.jpeg`}
              />
            );
          })
        ) : (
          "No hairstyles found"
        )}
      </SimpleGrid>

      <Stack align="center">
        <Pagination
          value={page}
          onChange={setPage}
          total={data?.pageCount || 1}
        />
      </Stack>
    </Stack>
  );
}
