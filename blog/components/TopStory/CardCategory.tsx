"use client";
import { IconEye, IconMessageCircle } from '@tabler/icons-react';
import { Card, Text, Group, Center, rem, useMantineTheme, Button } from '@mantine/core';
import classes from './CardCategory.module.css';

export function CardCategory({link, category, site_name, cover_img}) {
  const theme = useMantineTheme();

  return (
    <Card
      p="lg"
      shadow="lg"
      className={classes.card}
      radius="md"
      component="a"
      href="#"
      // target="_blank"
    >
      <div
        className={classes.image}
        style={{
          backgroundImage:
            `url(${cover_img})`,
        }}
      />
      <div className={classes.overlay} />

      <div className={classes.content}>
        <div>
          <Text size="lg" className={classes.title} fw={500}>
            {category}
          </Text>

          <Group justify="space-between" gap="xs">
            <Text size="sm" className={classes.author}>
              {site_name}
            </Text>

            <Group gap="lg">
              <Center>
              <Button variant="outline" size="md" radius="md" color="white">Visit page</Button>
              </Center>
            </Group>
          </Group>
        </div>
      </div>
    </Card>
  );
}