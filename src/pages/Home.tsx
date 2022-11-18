import React from "react";
import Landing from "../components/home/Landing";
import Services from "../components/home/Services";
import PageModule from "../modules/PageModule";

const Home = () => {
  return (
    <PageModule
      title="Ērtākais mājaslapu izstrādes risinājums"
      description="Ātrākais un ērtākais mājaslapu un e-veikalu izveides risinājums"
    >
      <Landing />

      <Services />
    </PageModule>
  );
};

export default Home;
