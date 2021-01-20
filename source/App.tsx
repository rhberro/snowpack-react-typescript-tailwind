import * as React from 'react';

import { Avatar } from 'components/Avatar';
import { Button } from 'components/Button';

export const App = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <Avatar />
      <Button>View on GitHub</Button>
      <Button>View on Bitbucket</Button>
    </div>
  );
}
