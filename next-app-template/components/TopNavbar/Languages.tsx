"use client";
import React from 'react';
import { Menu, ActionIcon, Tooltip, rem } from '@mantine/core';
import { IconLanguageKatakana } from '@tabler/icons-react';
import { useLanguage } from './LanguageContext';

export function Languages() {
  const { currentLanguage, changeLanguage } = useLanguage();

  const handleLanguageChange = (language) => {
    changeLanguage(language);
  };

  return (
    <Menu shadow="md" width={200}>
      <Menu.Target>
        <Tooltip label="Languages">
          <ActionIcon variant="filled" size="md" aria-label="Settings" color="grey">
            <IconLanguageKatakana style={{ width: '95%', height: '95%' }} />
          </ActionIcon>
        </Tooltip>
      </Menu.Target>

      <Menu.Dropdown>
        <Menu.Label>Current Languages</Menu.Label>
        {['en', 'fr', 'kiny'].map((languageCode) => (
          <Menu.Item
            key={languageCode}
            leftSection={<IconLanguageKatakana style={{ width: rem(14), height: rem(14) }} />}
            onClick={() => handleLanguageChange(languageCode)}
          >
            {languageCode === currentLanguage ? (
              <strong>{languageCode}</strong>
            ) : (
              languageCode
            )}
          </Menu.Item>
        ))}

        <Menu.Divider />

        <Menu.Label>Upcoming Languages</Menu.Label>
        {['es', 'sw'].map((languageCode) => (
          <Menu.Item
            key={languageCode}
            leftSection={<IconLanguageKatakana style={{ width: rem(14), height: rem(14) }} />}
            disabled
          >
            {languageCode}
          </Menu.Item>
        ))}
      </Menu.Dropdown>
    </Menu>
  );
}
