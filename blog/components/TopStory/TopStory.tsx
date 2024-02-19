"use client";
import { Grid, Skeleton, Container, Text, rem } from '@mantine/core';
import {CardCategory} from './CardCategory';
import {category} from '../../utils/Data';
const child = <Skeleton height={140} radius="md" animate={false} />;
import { useLanguage } from '../TopNavbar/LanguageContext';

export function TopStory() {
  const { currentLanguage, changeLanguage } = useLanguage();

  const handleLanguageChange = (language) => {
    changeLanguage(language);
  };
  return (
    <Container size="xl">
      <Text 
      size="xl" 
      fw={200}
      style={{    
        borderRadius:'20px',
        lineHeight: 1.2,
        fontSize: rem(25),
        color:'black',
        }}>
        Our content
      </Text>
      <br></br>
      <Grid>
      {category.map((item) => (
        <Grid.Col span={{ base: 12, xs: 3 }} key={item.id}><CardCategory link={item.link}  category={item[`label1_${currentLanguage}`]} site_name={item.site_name} cover_img={item.cover_img}/></Grid.Col>
      ))}
      </Grid>
    </Container>
  );
}