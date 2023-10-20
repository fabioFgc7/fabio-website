import React, {
  createContext,
  useState,
  useEffect,
  ReactNode,
  useContext,
} from "react";
interface Props {
  mode: boolean;
  cambiarModoOscuro: () => void;
}
export const Context = createContext<Props | undefined>(undefined);
export const useTheme = () => {
  const context = useContext(Context);
  if (!context) {
    throw new Error("useTheme debe ser utilizado dentro de un ThemeProvider");
  }
  return context;
};
export const DarkContext: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [mode, setMode] = useState<boolean>(() => {
    const storedMode = localStorage.getItem("mode");
    return storedMode === "dark";
  });
  const cambiarModoOscuro = () => {
    const newMode = !mode;
    setMode(newMode);
    localStorage.setItem("mode", newMode ? "dark" : "light");
  };

  useEffect(() => {
    document.body.classList.toggle("dark", mode);
    document.body.classList.toggle("light", !mode);
  }, [mode]);
  return (
    <Context.Provider
      value={{ mode: mode, cambiarModoOscuro: cambiarModoOscuro }}>
      {children}
    </Context.Provider>
  );
};
