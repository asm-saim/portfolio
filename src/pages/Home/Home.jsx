import Banner from "../../components/Banner/Banner";
import ContactCTA from "../../components/ContactCTA/ContactCTA";
import FeaturedWork from "../../components/FeaturedWork/FeaturedWork";
import PageMeta from "../../components/PageMeta/PageMeta";
import States from "../../components/States/States";
import TechnicalSkills from "../../components/TechnicalSkills/TechnicalSkills";

const Home = () => {
  return (
    <div>
      <PageMeta
        title="A S M Saim | Full-Stack Developer"
        description="A S M Saim is a full-stack developer in Dhaka, Bangladesh, building fast, accessible web applications with React, Next.js, Node.js, and MongoDB."
      />

      <Banner />
      <States />
      <FeaturedWork />
      <TechnicalSkills />
      <ContactCTA className="mx-auto max-w-6xl px-4 pb-20 pt-4 sm:px-6" />
    </div>
  );
};

export default Home;
