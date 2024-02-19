"use client";
import {
    Badge,
    Group,
    Title,
    Text,
    Card,
    SimpleGrid,
    Container,
    rem,
    Center,
    useMantineTheme,
  } from '@mantine/core';
  import { IconGauge, IconUser, IconCookie } from '@tabler/icons-react';
  import classes from './Partners.module.css';
  
  const mockdata = [
    {
      title: 'Extreme performance',
      description:
        'Some content description ...',
      icon: IconGauge,
    },
    {
      title: 'Privacy focused',
      description:
        'Some content description....',
      icon: IconUser,
    },
    {
      title: 'No third parties',
      description:
        'They’re popular, but they’re rare. Trainers who show them off recklessly may be targeted by thieves',
      icon: IconCookie,
    },
    {
        title: 'No third parties',
        description:
          'Some content description...',
        icon: IconCookie,
      },
  ];
  
  export function Partners() {
    const theme = useMantineTheme();
    const features = mockdata.map((feature) => (
      <Card key={feature.title} shadow="md" radius="md" className={classes.card} padding="md">
        <Center>
        <feature.icon
          style={{ width: rem(50), height: rem(50) }}
          stroke={2}
          color={theme.colors.blue[6]}
        />
        </Center>
        <Center>
        <Text fz="md" fw={400} className={classes.cardTitle} mt="md">
          {feature.title}
        </Text>
        </Center>
        <Center>
        <Text fz="sm" c="dimmed" mt="sm">
          {feature.description}
        </Text>
        </Center>
      </Card>
    ));
  
    return (
      <Container size="xl" py="xl">
        <Group justify="left">
          {/* <Badge variant="filled" size="lg"> */}
          <Text 
            size="xl" 
            fw={200}
            style={{    
                borderRadius:'20px',
                lineHeight: 1.2,
                fontSize: rem(25),
                color:'black',
                }}>
                Our partners
            </Text>
          {/* </Badge> */}
        </Group>
  
        <Text c="dimmed" className={classes.description} ta="center" mt="md">
          Every once in a while, you’ll see a Golbat that’s missing some fangs. This happens when
          hunger drives it to try biting a Steel-type Pokémon.
        </Text> 
  
        <SimpleGrid cols={{ base: 1, md: 4 }} spacing="lg" mt={50}>
          {features}
        </SimpleGrid>
      </Container>
    );
  }