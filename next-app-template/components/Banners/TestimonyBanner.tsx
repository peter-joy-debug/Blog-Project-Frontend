import { Breadcrumbs, Anchor, Container, Center } from '@mantine/core';

const items = [
  { title: 'Home', href: '#' },
  { title: 'Testimonial', href: '#' },
].map((item, index) => (
  <Anchor href={item.href} key={index} style={{textDecoration:'none',color:'white'}} c="dark">
    {item.title}
  </Anchor>
));

export function TestimonialBanner() {
  return (
      <Container fluid style={{padding:'2%', backgroundColor:'rgba(0,0,0,0.00)', marginTop:'-8%'}}>
      <Center>
      <Breadcrumbs separator="→" separatorMargin="md" mt="xs">
        {items}
      </Breadcrumbs>
      </Center>
      </Container>
  );
}