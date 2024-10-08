'use client';

import Link from 'next/link';
import { AppShell, Burger, Button, Group, NavLink, Skeleton, Text } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';

interface ShellProps {
  children: React.ReactNode;
}
export function Shell({ children }: ShellProps) {
  const [opened, { toggle }] = useDisclosure();

  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{ width: 300, breakpoint: 'sm', collapsed: { mobile: !opened } }}
      padding="md"
    >
      <AppShell.Header>
        <Group h="100%" px="md">
          <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
          <Text>My app analytics</Text>
        </Group>
      </AppShell.Header>
      <AppShell.Navbar p="md">
        <NavLink component={Link} href="/" label="Overview" active />
      </AppShell.Navbar>
      <AppShell.Main>{children}</AppShell.Main>
    </AppShell>
  );
}
