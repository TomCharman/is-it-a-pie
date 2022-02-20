import React, { ReactNode } from 'react';

interface ColumnProps {
  children?: ReactNode,
  classes?: string,
  width?: number,
  widthClass?: string | null,
}

function Column({
  widthClass = null,
  classes = '',
  children = null,
  width = 1,
}: ColumnProps) {
  const className = widthClass
    ? `col-${widthClass} ${classes}`
    : `col ${classes}`;

  return (
    <div className={className} style={{ flex: width }}>
      {children}
    </div>
  );
}

Column.defaultProps = {
  children: null,
  classes: '',
  width: 1,
  widthClass: null,
} as Partial<ColumnProps>;

export default Column;
