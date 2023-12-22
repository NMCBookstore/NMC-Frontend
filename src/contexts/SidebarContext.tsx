import { FC, useState, createContext, ReactNode } from 'react';
type SidebarContext = {
  sidebarToggle: any;
  toggleSidebar: () => void;
  closeSidebar: () => void;
};

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const SidebarContext = createContext<SidebarContext>(
  {} as SidebarContext
);

export const SidebarProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [sidebarToggle, setSidebarToggle] = useState(false);
  const toggleSidebar = () => {
    setSidebarToggle(!sidebarToggle);
  };
  const closeSidebar = () => {
    setSidebarToggle(false);
  };

  return (
    <SidebarContext.Provider
      value={{ sidebarToggle, toggleSidebar, closeSidebar }}
    >
      {children}
    </SidebarContext.Provider>
  );
};
