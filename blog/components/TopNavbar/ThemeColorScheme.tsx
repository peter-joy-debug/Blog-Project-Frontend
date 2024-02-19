"use client";

import { Menu, Button, Text, rem, ActionIcon, Tooltip,useMantineColorScheme } from '@mantine/core';
import {
  IconSettings,
  IconSearch,
  IconPhoto,
  IconMessageCircle,
  IconTrash,
  IconArrowsLeftRight,
  IconLanguage,
  IconLanguageKatakana,
  IconMoon

} from '@tabler/icons-react';

export function ThemeColorScheme() {
    const { setColorScheme } = useMantineColorScheme();
  return (
    <Menu shadow="md" width={200}>
      <Menu.Target>
        <Tooltip label="Color">
        <ActionIcon variant="outline" size="md" aria-label="Settings" color="grey">
        <IconMoon style={{ width: '95%', height: '95%' }} stroke={1.5} />
        </ActionIcon>
        </Tooltip>
      </Menu.Target>

      <Menu.Dropdown>
        <Menu.Label>Color Schemes</Menu.Label>
        <Menu.Item leftSection={<IconLanguageKatakana style={{ width: rem(14), height: rem(14) }} />} onClick={() => setColorScheme('light')}>
          Light
        </Menu.Item>
        <Menu.Item leftSection={<IconLanguageKatakana style={{ width: rem(14), height: rem(14) }} />} onClick={() => setColorScheme('dark')}>
          Dark
        </Menu.Item>
        <Menu.Item leftSection={<IconLanguageKatakana style={{ width: rem(14), height: rem(14) }} />} onClick={() => setColorScheme('auto')}>
          Auto
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
}