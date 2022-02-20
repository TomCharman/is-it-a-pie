import React, { ReactNode } from 'react';

interface RowProps {
  children?: ReactNode,
  classes?: string | null,
}

function Row({ children = null, classes = null }: RowProps) {
  const className = `row ${classes}`;

  return (
    <div className={className}>
      {children}
    </div>
  );
}

Row.defaultProps = {
  children: null,
  classes: '',
};

export default Row;
