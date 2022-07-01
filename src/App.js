import Pages from "./pages/Pages";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="font-Josefin container">
      <BrowserRouter>
        <Pages />
        
      </BrowserRouter>
      <div className=" absolute bottom-2 right-1/2 transform translate-x-1/2">Developed By <a className=" text-secondary hover:underline" href="https://github.com/RifatdaM">Rakibul Hasan</a> </div>
    </div>
  );
}

export default App;
