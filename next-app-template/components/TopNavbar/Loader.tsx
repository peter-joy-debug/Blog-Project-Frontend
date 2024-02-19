import { Loader, Center, Container, Text } from '@mantine/core';

export function Loaders() {
  return( 
  <Container style={{padding:'20%'}}>
  <Center>
  <Text >
    Ubutumwa
  </Text>
  &nbsp;&nbsp;&nbsp;
  <Loader color="blue" size="lg" type="bars" />
  <br/> &nbsp;&nbsp;&nbsp;
    </Center>
  </Container>
  );
}