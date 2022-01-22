import Aboutus from '../src/components/AboutUs/Aboutus'
import Navbar from "../src/components/navbar/Navbar";
import Head from "next/head";

export default function AboutUs() {
    return (
      <div >
        <Head>
          <title>Environment Awareness App</title>
          <meta name="description" content="" />
        </Head>
  
        <Navbar link1="/" link2="/" link3="" link4="/" action1="" action2="Home" buttonText1="SignUp" buttonText2="" />
        <Aboutus  />
      </div>
    );
  }