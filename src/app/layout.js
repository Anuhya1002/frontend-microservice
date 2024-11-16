import Header from "./Components/Header/index";
// import Footer from "./Components/Footer/index";

import "../../src/app/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";

export const metadata = {
  title: "Pavan Protfolio",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head></head>
      <body>
        <Header />
        {children}
        {/* <Footer /> */}
      </body>
    </html>
  );
}
