import React, { useEffect, useState } from 'react';

type Props = React.PropsWithChildren<{
  onOutsideClick: () => void;
}>;

export const OutsideClick = ({ children, onOutsideClick }: Props) => {
  const [ref, setRef] = useState<HTMLDivElement>();

  useEffect(() => {
    const handleClick = (ev: any) => {
      if (ref && !ref.contains(ev.target as Node)) {
        onOutsideClick();
      }
    };
    window.addEventListener('click', handleClick);

    return () => {
      window.removeEventListener('click', handleClick);
    };
  }, [ref, onOutsideClick]);

  return (
    <div ref={el => setRef(el || undefined)}>
      {children}
    </div>
  );
};
