import '../styles/globals.css'
import {AppProps} from 'next/app'
import Navigation from "/components/Navigation";
import Footer from "../components/Footer/Footer";
function MyApp({Component, pageProps}) {
   return <>
           <Navigation/>
           <Component {...pageProps} />
           <Footer/>
   </>
}
export default MyApp