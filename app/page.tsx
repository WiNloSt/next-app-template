import dynamic from 'next/dynamic';
import { Title } from '@mantine/core';
import { Shell } from '@/components/Shell';

const DynamicAnalytics = dynamic(() => import('@/components/Analytics'), {
  ssr: false,
});

export default function HomePage() {
  return (
    <>
      <Shell>
        <Title order={1}>Overview</Title>
        <DynamicAnalytics />
      </Shell>
    </>
  );
}
