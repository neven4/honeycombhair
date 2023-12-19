import { Skeleton } from "@mantine/core";

type Props = {
  size: number;
};

export function HairstylesSkeleton({ size }: Props) {
  return (
    <>
      {Array.from(Array(size)).map(() => {
        return (
          <div>
            <Skeleton height={50} circle mb="xl" />
            <Skeleton height={8} radius="xl" />
            <Skeleton height={8} mt={6} radius="xl" />
            <Skeleton height={8} mt={6} width="70%" radius="xl" />
          </div>
        );
      })}
    </>
  );
}
