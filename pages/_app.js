import { StateContext } from "../context/StateContext";

//statecontext provide data to all components inside it

import { Toaster } from "react-hot-toast";
import "../styles/globals.css";
import {Layout} from "../components/Index";
export default function App({ Component, pageProps }) {
  return (
    <StateContext>
      
    <Layout>
      <Toaster />
  <Component {...pageProps} />
    </Layout>

    </StateContext>
);
}
 