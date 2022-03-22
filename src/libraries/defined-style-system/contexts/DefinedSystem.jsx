import React, { useMemo } from 'react';

export const DefinedSystemContext = React.createContext();

export const DefinedSystemProvider = ({ theme, systems, children }) => {
  const value = useMemo(
    () => ({
      theme,
      systems
    }),
    [theme, systems]
  );

  return <DefinedSystemContext.Provider value={value}>{children}</DefinedSystemContext.Provider>;
};
