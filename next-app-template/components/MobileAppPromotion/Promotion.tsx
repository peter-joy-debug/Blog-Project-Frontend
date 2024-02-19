"use client";
import { SimpleGrid, Skeleton, Container, Stack, useMantineTheme, px, Text, Grid,rem,Overlay,Title,Button, Image,Group} from '@mantine/core';
import { IconBrandAndroid, IconDownload, IconBrandApple } from '@tabler/icons-react';

export function Promotion() {
  const theme = useMantineTheme();
  return (
    <>
    <br/><br/><br/><br/><br/><br/><br/>
    <Container my="lg" style={{backgroundColor: '#006fd8', padding:'12px 0px 12px 0px'}} size="xl" fluid size="xl">
    <Container my="lg" style={{}} size="xl">
    <br></br>
      <div style={{marginTop:'-100px',marginLeft:'0px'}}>
      <Text size="xs" 
        style={{    
        fontFamily: `Greycliff CF, ${theme.fontFamily}`,
        borderRadius:'20px',
        color: theme.white,
        lineHeight: 1.2,
        fontSize: rem(25),
        backgroundColor:theme.white,
        width:'100%',
        // boxShadow: '1px 2px 17px rgba(0,0,0,0.7)',
        padding:'20px 20px',

        color:'black',
        marginTop: theme.spacing.xs,}}
        size="xl" fw={200}
        >
            Get our app
            <br></br>
      </Text>

      <br></br>
      </div>

<div >

      <Container  size="lg" >

        <Grid>
        <Grid.Col span={{ base: 12, xs: 6 }} style={{marginBottom:'150px'}}>
        <Text  size="md" mt="xl" pt="xs" >
          Get fully functional accessible Mobile app applications faster than ever – Join
          more than 20 Million users on Both Android and App Store!
        </Text>
        <Group gap="xs" style={{marginBottom:'10px'}}>

          <Button variant="default" color="light" size="lg" radius="md" mt="xl" style={{boxShadow: '1px 2px 17px rgba(0,0,0,0.7)'}}>
          Android<IconBrandAndroid size={25} />
          </Button>

          <Button variant="default" color="light" size="lg" radius="md" mt="xl">
            Apple <IconBrandApple size={25} />
          </Button>
        </Group>

        </Grid.Col>
        <Grid.Col span={{ base: 12, xs: 6 }} >
        <Image
          radius="xl"
          h={510}
          style={{marginTop:'-150px'}}
        //   w="auto"
        //   fit="contain"
        //   src="https://assets.materialup.com/uploads/d5921479-9abb-4d78-993a-308f2a29d73a/preview.gif"
        //   src="https://cdn.dribbble.com/users/10672487/screenshots/17709090/media/6701b4accbfbcde7485cbbcb6ed2272c.jpg"
        //   src="https://d28pk2nlhhgcne.cloudfront.net/assets/app/uploads/sites/3/2020/12/mobile-app-hero2x-en-1830x854.png"
          src="https://timedoor.net/wp-content/uploads/2022/09/Mobile-Apps-Development-2.png"
        />
        </Grid.Col>
      </Grid>
      </Container>
    </div>

    </Container>
    </Container>
    </>
  );
}