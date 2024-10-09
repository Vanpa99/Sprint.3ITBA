import "./Global.css";
import Sidebar from "./Sidebar";
import Header from "./Header";
import Footer from "./Footer";

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <Header></Header>
        <Sidebar></Sidebar>
        {children}
        <Footer></Footer>
        
      </body>
    </html>
  );
}
