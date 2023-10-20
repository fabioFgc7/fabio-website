import { createContext, useState, ReactNode, useContext } from "react";
import { Project } from "../../types";
interface Props {
  openModal: (item: Project[]) => void;
  elementsProject: Project[];
}
export const Context = createContext<Props | undefined>(undefined);
export const useModal = () => {
  const context = useContext(Context);
  if (!context) {
    throw new Error("useModal debe ser utilizado dentro de un ThemeProvider");
  }
  return context;
};
export const ModalContext: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [elementsProject, setElementsProject] = useState<Project[]>([]);

  const openModal = (item: Project[]) => {
    setElementsProject([...item]);
  };

  return (
    <Context.Provider
      value={{
        elementsProject: elementsProject,

        openModal: openModal,
      }}>
      {children}
    </Context.Provider>
  );
};
