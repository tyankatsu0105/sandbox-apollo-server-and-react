import * as React from 'react';

export const usePage = () => {
  React.useEffect(() => {
    alert('aaa');
  }, []);

  throw new Error('aaaaaaaaaaa');
};
