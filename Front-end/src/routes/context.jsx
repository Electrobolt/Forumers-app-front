import { useState, useContext, createContext } from 'react';

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openSidebar = () => {
    setIsSidebarOpen(true);
  };
  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <AppContext.Provider
      value={{
        isSidebarOpen,
        isModalOpen,
        openModal,
        closeModal,
        openSidebar,
        closeSidebar,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  const myContext = useContext(AppContext);
  if(!myContext){
    throw new Error("Context unavailable!");
  }
  return myContext;
};

export { AppContext, AppProvider };
