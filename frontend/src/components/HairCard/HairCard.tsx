import { Badge, Card, Group, Image, Text } from "@mantine/core";

type Props = {
  imageUrl: string;
  title: string;
  price: number;
};

export function HairCard({ imageUrl, title, price }: Props) {
  return (
    <Card shadow="sm" padding="xl" radius="md" withBorder>
      <Card.Section>
        <Image src={imageUrl} h={160} alt={title} />
      </Card.Section>

      <Group justify="space-between" mt="md">
        <Text fw={500}>{title}</Text>
        <Badge color="cyan">Price: {price}$</Badge>
      </Group>
    </Card>
  );
}
