"use client";
import React, { useEffect } from "react";
import { useAuth } from "@/firebase/auth";
import { useRouter } from "next/navigation";
import Loader from "@/components/Loader";
import Dashboard from "@/components/dashboard";
import Footer from "@/components/Footer";
import Image from "next/image";

const Home = () => {
  const router = useRouter();
  const { isLoading, authUser, signout } = useAuth();
  const scheduleCall = () => {
    if (!isLoading && !authUser) {
      router.push("/login");
    } else router.push("/View");
  };
  // useEffect(() => {
  //   if (!isLoading && !authUser) {
  //     router.push("/login");
  //   }
  // }, [authUser, isLoading]);      // uncomment for auth home page.....
  // return !authUser ? (
  //   <Loader />
  // ) :
  return (
    <div style={{ backgroundImage: 'url("/bg-abstract.jpg")' }}>
      {/* <Dashboard isHome={true}></Dashboard> */}
      {/* <h1>hellos {authUser.email}</h1>
      <button onClick={signout}>logout</button> */}
      <div>
        {/* Section 1: Logo + Background Image + Tagline */}
        {/* <div className="min-h-screen bg-blue-500 flex items-center justify-center text-white"> */}
        <div
          style={{ backgroundImage: 'url("/bg-image-1.jpg")' }}
          className="bg-cover bg-center"
        >
          <Dashboard isHome={true} bgColour={true}></Dashboard>
          <div className="min-h-screen bg-cover bg-center flex items-center justify-center text-black">
            <div className="container mb-16 flex-row mx-auto items-center text-center">
              <img
                src="/logo2-removebg-preview.png"
                alt="Zenexa Logo"
                className="h-24 w-auto mx-auto"
              />

              <h1 className="text-6xl font-bold mt-4">ZenexA</h1>
              <p className="text-lg mt-2">
                Bringing mental wellness to your fingertips
              </p>
            </div>
          </div>
        </div>

        {/* Section 2: About Us */}
        <div className="min-h-screen flex items-center justify-center text-white mt-4">
          <div className="container relative mx-auto text-center">
            {/* animation*/}
            {/* <div class="absolute top-0 left-96 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
            <div class="absolute top-0 right-96 w-72 h-72 bg-green-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
            <div class="absolute -bottom-8 right-96 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
            <div class="absolute -bottom-8 left-96 w-72 h-72 bg-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
            animation */}
            <h2 className="text-2xl md:text-3xl lg:text-3xl font-bold mb-8 md:mb-16 mt-0">
              About Us
            </h2>
            {/* <p className="text-lg">
               At Zenexa, we believe that mental health is the most important
              aspect of a person's well-being. We are on a mission to combat the
              loneliness epidemic through therapy and make the world a better
              place. 
            </p> */}
            <div className="flex flex-col lg:flex-row">
              <div className="p-4 order-2 lg:order-1 mb-8 lg:mb-0 lg:mr-10">
                <Image
                  src="/bg-image-2.1.jpg"
                  alt="effects of therapy"
                  width={1900}
                  height={200}
                  className="rounded-lg w-full h-full"
                />
              </div>
              <div className="ml-10">
                <p className="text-base md:text-lg lg:text-lg text-left mb-4 lg:mb-8">
                  Welcome to Zenexa, where we bridge the gap between traditional
                  therapy and cutting-edge technology. In a world grappling with
                  rising mental health challenges, our expert psychologists
                  offer transformative sessions, while our AI chatbot provides a
                  digital companion for moments of need.{" "}
                </p>
                <br />
                <p className="text-base md:text-lg lg:text-lg text-left mb-4 lg:mb-8">
                  We're not just a mental health brand; we're architects of
                  hope, crafting a new narrative for well-being in the face of
                  increasing loneliness, burnouts, and unhappiness. Join us on
                  this journey to rediscover joy, one conversation at a time.{" "}
                </p>
                <br />
                <p className="text-base md:text-lg lg:text-lg text-left mb-4 lg:mb-8">
                  Zenexa – where understanding and innovation converge for your
                  peace of mind.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Section 3: Features - Therapy Chatbot */}
        {/* <div className="min-h-screen bg-blue-500 flex items-center justify-center text-white"> */}
        <div
          className="min-h-screen bg-cover bg-center flex mt-4 items-center justify-center text-black"
          style={{ backgroundImage: 'url("/bg-2.3.jpg")', opacity: 1 }}
        >
          <div className="container mx-auto text-center font-extrabold">
            <h2 className="text-2xl md:text-3xl lg:text-3xl  font-bold mb-4">
              Our Features
            </h2>
            <p className="text-lg">
              Explore the benefits of our therapy chatbot that provides
              personalized support and guidance, making your mental health
              journey even more accessible and convenient.
            </p>
            <div className="container mx-auto text-left mt-6">
              <h3 className="text-lg md:text-xl lg:text-xl font-bold mb-2">
                Zenexa's Core Features:
              </h3>

              <ul className="list-disc pl-6">
                <li className="mb-2">
                  <strong className="text-base md:text-lg lg:text-xl">
                    Personalized Therapy Sessions:
                  </strong>{" "}
                  Embark on a journey of self-discovery with our skilled
                  psychologists. Our tailored sessions delve deep into your
                  unique experiences, addressing not only mental health issues
                  but also the pervasive challenges of loneliness. Gain profound
                  insights and coping strategies for a fulfilling life.
                </li>

                <li className="mb-2">
                  <strong className="text-base md:text-lg lg:text-xl">
                    AI Companion for Support:
                  </strong>{" "}
                  Experience a constant source of support with our AI chatbot.
                  Available round the clock, it provides more than just a
                  listening ear—it offers insights and coping mechanisms,
                  ensuring you're never alone in navigating the complexities of
                  mental health challenges and loneliness.
                </li>

                <li className="mb-2">
                  <strong className="text-base md:text-lg lg:text-xl">
                    B2B Mental Health Services:
                  </strong>{" "}
                  Prioritize the well-being of your workforce with our
                  specialized B2B services. We understand the intricacies of
                  workplace dynamics and tailor our programs to create a
                  mentally resilient environment, fostering productivity,
                  satisfaction, and overall success.
                </li>

                <li className="mb-2">
                  <strong className="text-base md:text-lg lg:text-xl">
                    Innovative Well-Being Solutions:
                  </strong>{" "}
                  Explore the intersection of tradition and technology in our
                  approach to mental health. Our innovative solutions blend
                  ancient wisdom with modern techniques, providing a fresh
                  outlook on life. Address burnouts, mental health issues,
                  loneliness, and unhappiness through a tech-driven strategy
                  that adapts to your unique needs. Zenexa – where innovation
                  meets understanding for a healthier, happier you.
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Section 4: Book a Session */}
        <div className="min-h-screen  mt-4 flex items-center justify-center text-white">
          <div className="container mx-auto text-center">
            <h2 className="text-2xl md:text-3xl lg:text-3xl font-bold mb-4">
              Book a Session
            </h2>
            <p className="text-base md:text-lg lg:text-lg">
              Ready to take the next step towards a healthier mind? Book a
              session with our experienced therapists and start your journey
              towards mental well-being.
            </p>
            <div className="container mx-auto text-left mt-8">
              <h3 className="text-xl md:text-2xl lg:text-2xl font-bold mb-4">
                Schedule a Call with Zenexa:
              </h3>

              <p className="mb-4 text-sm md:text-base lg:text-base">
                When the weight of the world feels like too much to bear,
                remember that seeking help is an act of courage, not weakness.
                Our trained therapists at Zenexa are here to be your guides,
                compassionate listeners, and allies on your journey toward
                healing. In moments of darkness and uncertainty, it's okay to
                reach out; it's okay to admit that you need support.
              </p>

              <p className="mb-4 text-sm md:text-base lg:text-base">
                Depression and other mental illnesses are battles that require
                warriors, and we're here to stand by your side. Our therapists
                bring a wealth of experience, empathy, and innovative approaches
                to the table. They're not just listeners; they're architects of
                resilience, helping you build a fortress of strength against the
                storms within.
              </p>

              <p className="mb-4 text-sm md:text-base lg:text-base">
                So, when the shadows of despair loom large, when the weight of
                sadness becomes too much to bear alone, don't hesitate to
                schedule a call with us. Together, we'll navigate the labyrinth
                of emotions, find the light within, and sculpt a path toward a
                brighter, more fulfilling tomorrow. Your well-being is not just
                a priority; it's our purpose. Let's face the journey ahead, hand
                in hand.
              </p>
            </div>
            <div>
              <button
                onClick={scheduleCall}
                className="bg-blue-500 hover:bg-green-600 text-white px-4 py-2 rounded"
              >
                Get Help
              </button>
            </div>
          </div>
        </div>

        {/* Section 5: B2B Services */}
        {/* <div className="min-h-screen bg-blue-500 flex items-center justify-center text-white"> */}
        <div
          className="min-h-screen border bg-cover bg-center mt-4 flex items-center justify-center text-black"
          style={{ backgroundImage: 'url("/bg-image-3.1.jpgh")' }}
        >
          <div className="container mx-auto text-center">
            <h2 className="p-4 text-2xl md:text-3xl lg:text-3xl font-bold mb-4">
              B2B Services
            </h2>
            <p className="text-base md:text-lg lg:text-lg">
              Elevate your company's productivity and foster employee happiness
              with our specialized therapy and performance coaching services
              designed for businesses.
            </p>
            <div className="container mx-auto text-left mt-8">
              <h3 className="text-xl md:text-2xl lg:text-2xl font-bold mb-4">
                Unlock Potential with Zenexa's B2B Services:
              </h3>

              <p className="mb-4 text-sm md:text-base lg:text-base">
                In the realm of corporate well-being, Zenexa offers more than
                just therapy for your workforce. We bring an added bonus –
                performance coaching and morale-boosting sessions that empower
                your team to thrive. It's not just about mental health; it's
                about unlocking the full potential of your workforce.
              </p>

              <p className="mb-4 text-sm md:text-base lg:text-base">
                Studies affirm the transformative impact: a positive and
                stress-free workforce engaged in regular therapy sessions is
                more productive and experiences reduced turnover. Imagine a
                workplace where employees not only love what they do but also
                find contentment in their roles.
              </p>

              <p className="mb-4 text-sm md:text-base lg:text-base">
                This investment in therapy isn't just an expense; it's a
                strategic move that yields exponential results in profits and
                productivity. A content and resilient workforce becomes a magnet
                for talent, turning your company into an employer of choice.
              </p>

              <p className="mb-4 text-sm md:text-base lg:text-base">
                At Zenexa, we're not just reshaping the narrative of corporate
                success; we're redefining it. Let's build a workplace where
                well-being is not a checkbox but the cornerstone of a thriving,
                profitable future. Contact us to unlock the potential of your
                team and embark on a journey towards a brighter, more prosperous
                tomorrow.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
