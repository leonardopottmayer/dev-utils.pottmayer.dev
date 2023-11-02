import { BrowserRouter } from "react-router-dom";

const AppProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <div id="app__provider" className="app__provider">
      <BrowserRouter>{children}</BrowserRouter>
    </div>
  );
};

export default AppProvider;
