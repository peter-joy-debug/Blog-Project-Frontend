"use client";
import { Menu, Group, Center, Burger, Container, Button, UnstyledButton, Avatar, Text, rem, useMantineTheme } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import cx from 'clsx';
import { useState } from 'react';
import {Languages} from './Languages';
import {GlobalUser} from './GlobalUser';
import {ThemeColorScheme} from './ThemeColorScheme';
import { IconChevronDown, IconMoon} from '@tabler/icons-react';
import { useLanguage } from './LanguageContext';
import {navbar_links} from '../../utils/Lang';
import classes from './Navbar.module.css';
import Link from 'next/link';



export function TopNavbar() {
  const [opened, { toggle }] = useDisclosure(false);
  const [userMenuOpened, setUserMenuOpened] = useState(false);
  const theme = useMantineTheme();
  const { currentLanguage, changeLanguage } = useLanguage();

  const handleLanguageChange = (language) => {
    changeLanguage(language);
  };

  const items = navbar_links.map((link) => {
    const menuItems = link.links?.map((item) => (
      <Menu.Item key={item.link}>{item[`label_${currentLanguage}`]}</Menu.Item>
    ));

    if (menuItems) {
      return (
        <Menu key={link.link} trigger="hover" transitionProps={{ exitDuration: 0 }} withinPortal>
          <Menu.Target>
          <Link href={link.link} className={classes.link}>
          <span className={classes.linkLabel}>{link[`label_${currentLanguage}`]}</span>
          <IconChevronDown size="0.9rem" stroke={1.5} />
          </Link>
          </Menu.Target>
          <Menu.Dropdown>{menuItems}</Menu.Dropdown>
        </Menu>
      );
    }

    return (
    <Link href={link.link} className={classes.link} key={link.link}>
      {link[`label_${currentLanguage}`]}
    </Link>
      // <a
      //   key={link.link}
      //   href={link.link}
      //   className={classes.link}
      //   onClick={(event) => event.preventDefault()}
      // >
      //   {link[`label_${currentLanguage}`]}
      // </a>
    );
  });

  return (
    <header className={classes.header}>
      <Container size="xl" fluid>
        <div className={classes.inner}>
          {/* <MantineLogo size={28} /> */}
          <h3>Ubutumwa</h3>
          <Group gap={5} visibleFrom="sm">
            {items}
          </Group>
          <Group gap={35} visibleFrom="sm">
            <Group gap={5} visibleFrom="sm">
            <Languages/>
            <ThemeColorScheme/>
            </Group>
            <GlobalUser/>
          </Group>
          <Burger opened={opened} onClick={toggle} size="sm" hiddenFrom="sm" />
        </div>
      </Container>
    </header>
  );
}