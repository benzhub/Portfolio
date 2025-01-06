import ContactMe from "./contact-me";
import Creation from "./creation";
import Discover from "./discover";
import Grid from "./grid";
import GridItem from "./grid/item";
import Passion from "./passionate";
import Programming from "./programming";
import TechStack from "./tech-stack";

const About = () => {
  return (
    <div id="about" className="mt-24">
      <Grid cols={1} gap={6}>
        <Grid cols={12} gap={6} className="lg:grid-cols-12">
          <GridItem className="lg:col-span-6">
            <TechStack />
          </GridItem>
          <GridItem className="lg:col-span-3">
            <Programming />
          </GridItem>
          <GridItem className="lg:col-span-3">
            <Passion />
          </GridItem>
        </Grid>
        <Grid cols={1} gap={6} className="lg:grid-cols-3">
          <GridItem className="lg:col-span-1 !p-0">
            <ContactMe />
          </GridItem>
          <GridItem className="lg:col-span-1 relative overflow-hidden">
            <Discover />
          </GridItem>
          <GridItem className="lg:col-span-1">
            <Creation />
          </GridItem>
        </Grid>
      </Grid>
    </div>
  );
};

export default About;
