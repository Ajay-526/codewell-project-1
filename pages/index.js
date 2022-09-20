import { Box } from "@mui/system";
import Main from "../components/Main";
import MidContent from "../components/Section-2";
import TweetsCard from "../components/Section-3";
import PaymentCard from "../components/PaymentCard";
import Footer from "../components/Footer";
import Navbar from '../components/Navbar'
export default function Home() {
  return (
    <Box>
      <Navbar/>
      <Main />
      <MidContent />
      <TweetsCard/>
      <PaymentCard/>
      <Footer/>
    </Box>
  );
}
