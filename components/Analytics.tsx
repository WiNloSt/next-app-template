'use client';

import { InteractiveQuestion, MetabaseProvider } from '@metabase/embedding-sdk-react';

const config = {
  metabaseInstanceUrl: 'http://localhost:3000', // Required: Your Metabase instance URL
  jwtProviderUri: '/api/sso/metabase', // Required: An endpoint in your app that returns signs the user in and delivers a token
};

export default function Analytics() {
  return (
    <MetabaseProvider config={config}>
      <InteractiveQuestion questionId={2249} />
    </MetabaseProvider>
  );
}
