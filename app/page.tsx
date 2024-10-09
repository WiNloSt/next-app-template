'use client';

import { Title } from '@mantine/core';
import { Analytics } from '@/components/Analytics';
import { Shell } from '@/components/Shell';

export default function HomePage() {
  return (
    <>
      <Shell>
        <Title order={1}>Overview</Title>
        <Analytics />
      </Shell>
    </>
  );
}
