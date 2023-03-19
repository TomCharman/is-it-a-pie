import clsx from 'clsx';
import { ReactNode } from 'react';

interface RowProps {
  children?: ReactNode,
  className?: string,
}

function Row({ children = null, className = undefined }: RowProps) {
  return (
    <div className={clsx('row', className)}>
      {children}
    </div>
  );
}

export default Row;
