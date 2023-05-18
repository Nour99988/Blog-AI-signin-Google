// import "@styles/general.css";

import Nav from "@components/Nav";
import Provider from "@components/Provider";

export const metadata = {
  title: "my App",
  description: "bla bla bla ",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <Provider>
          <Nav />
          <main>{children}</main>
        </Provider>
      </body>
    </html>
  );
};

export default RootLayout;
