import ContactMe from "./contact-me";
import Grid from "./grid";
import GridItem from "./grid/item";
import TechStack from "./tech-stack";

const About = () => {
  return (
    <div id="about" className="mt-24">
      <Grid cols={1} gap={6}>
        <Grid cols={12} gap={6} className="lg:grid-cols-12">
          <GridItem className="md:col-span-6">
            <TechStack />
          </GridItem>
          <GridItem className="md:col-span-3">2</GridItem>
          <GridItem className="md:col-span-3">3</GridItem>
        </Grid>
        <Grid cols={1} gap={6} className="md:grid-cols-3">
          <GridItem className="md:col-span-1 !p-0">
            <ContactMe />
          </GridItem>
          <GridItem className="md:col-span-1">5</GridItem>
          <GridItem className="md:col-span-1">6</GridItem>
        </Grid>
      </Grid>
    </div>
  );
};

export default About;
