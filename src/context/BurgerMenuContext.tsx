import React, { createContext, useState } from "react";

export interface BurgerMenuContextProps {
  isModalOpen: boolean;
  setIsModalOpen: (value: boolean) => void;
}

export const burgerMenuContext = createContext<BurgerMenuContextProps>({
  isModalOpen: false,
  setIsModalOpen: () => false,
});

export default function BurgerMenuContext({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const contextValue: BurgerMenuContextProps = {
    isModalOpen,
    setIsModalOpen,
  };
  return (
    <burgerMenuContext.Provider value={contextValue}>
      {children}
    </burgerMenuContext.Provider>
  );
}
