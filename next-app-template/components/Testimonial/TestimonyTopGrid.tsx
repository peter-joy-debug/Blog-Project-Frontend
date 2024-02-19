"use client";
import { Grid, Paper, Skeleton, Container, Text } from '@mantine/core';
import {TestmonyTopCard} from './TestmonyTopCard';

const child = <Skeleton height={140} radius="md" animate={false} />;

export function TestmonyTopGrid() {
  return (
    <>
    <Container size="lg" style={{marginTop:'-1%', marginBottom:'2%'}}>
    <Paper shadow="xl" pt="md" radius="lg" style={{padding:'20px'}}>
      <Text fw={300} size="md" style={{backgroundColor:'rgba(0,200,0,0.08)', padding:'1%', width:'25%', borderRadius:'40px', marginBottom:'5px'}}>Top Stories</Text>
      <Grid>
        <Grid.Col span={{ base: 12, xs: 4 }}><TestmonyTopCard/></Grid.Col>
        <Grid.Col span={{ base: 12, xs: 4 }}><TestmonyTopCard/></Grid.Col>
        <Grid.Col span={{ base: 12, xs: 4 }}><TestmonyTopCard/></Grid.Col>
      </Grid>
    </Paper>
    </Container>
    </>
  );
}