import Head from "next/head";
import Image from "next/image";
import Meta from "../components/Meta";
import Nav from "../components/Nav.js";
import Pricing from "../components/Pricing";
import Contact from "../components/Contact";
import Header from "../components/Header";
import Testimonial from "../components/Testimonial";
import Features from "../components/Features";
import Faq from "../components/Faq";
import Price1 from "../components/Price1";
import About from "../components/About";
import Tech from "../components/Tech";

export default function Home() {
  return (
    <>
      <Meta />
      <Nav />
      <Header />
      <Features />
      <About />
      <Testimonial />
      <Pricing />
      <Tech />
      <Faq />
      <Contact />
    </>
  );
}
