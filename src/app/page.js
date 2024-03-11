import Automate from "@/Components/Automate";
import Banner from "@/Components/Banner/Banner";
import Complete from "@/Components/Complete";
import Faq from "@/Components/Faq";
import Footer from "@/Components/Footer";
import Grow from "@/Components/Grow";
import Making from "@/Components/Making/Making";
import Manage from "@/Components/Manage";
import Navbar from "@/Components/Navbar/Navbar";
import Reviews from "@/Components/Reviews/Reviews";
import Services from "@/Components/Services";
import Simplify from "@/Components/Simplify";
import Valuable from "@/Components/Valuable";
import Why from "@/Components/Why";

export default function Home() {
  return (
    <main className="">
      <Navbar/>
      <Banner/>
      <Reviews/>
      <Making/>
      <Complete/>
      <Simplify/>
      <Grow/>
      <Valuable/>
      <Automate/>
      <Services/>
      <Why/>
      <Faq/>
      <Manage/>
      <Footer/>
    </main>
  );
}
 