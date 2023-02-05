import React, { useRef } from 'react';
import styled from 'styled-components';

const colorsSection = [
  'yellowgreen',
  'crimson',
  'orange',
  'lightblue',
  'yellow',
  'salmon',
  'firebrick',
  'blue',
  'pink',
];

const Fixed_Position = styled.div`
  background-color: rgb(59, 230, 173);
  color: rgb(251, 249, 252);
  padding: 10px;
  margin: 20px;

  //-- flex conf --
  display: flex;
  flex-direction: column;
  /* gap: 10px; */
  justify-content: center;
  align-items: center;
  //-- flex conf --
  filter: url(#f);

  width: 1000px;
  height: 100vh;
  overflow: auto;

  /* clip-path: polygon(0 10%, 100% 10%, 100% 90%, 0 90%); */
`;

const MainBody_flex = styled.div`
  //-- basic conf --
  background-color: rgb(226, 0, 0);
  color: rgb(251, 249, 252);
  padding: 10px;
  margin: 0;
  //-- basic conf --

  //-- flex conf --
  display: flex;
  flex-direction: column;
  /* gap: 10px; */
  justify-content: center;
  align-items: center;
  //-- flex conf --
`;

const About = () => {
  const mainRef = useRef();

  React.useEffect(() => {
    console.log('width', window.innerWidth);
    console.log('height', window.innerHeight);
  }, []);

  return (
    <>
      <Fixed_Position>
        <MainBody_flex ref={mainRef}>
          {Array(9)
            .fill(9)
            .map((num, i) => (
              <SectionDetail key={i} indexkey={i} />
            ))}
        </MainBody_flex>
      </Fixed_Position>
    </>
  );
};

const Section = styled.section`
  background-color: ${(props) => props.background};
  font-size: 32px;
  line-height: 40px;
  color: rgb(251, 249, 252);
  width: 100%;
  height: 100vh;
  /* padding: 20px; */
  /* perspective: 7.5rem; */
  transform-style: preserve-3d;

  //-- flex conf --
  display: flex;
  flex-direction: column;
  /* gap: 10px; */
  /* justify-content: center; */
  /* align-items: center; */
  //-- flex conf --
`;

const InsideSection = styled.div`
  background-color: rgb(34, 38, 90);
  color: rgb(189, 191, 207);
  margin: 10px;
  padding: 10px;
  /* height: 400px; */
`;

const SectionDetail = ({ indexkey }) => {
  const insideSectionRef = useRef();
  const sectionRef = useRef();

  return (
    <Section ref={sectionRef} background={colorsSection[indexkey]}>
      <InsideSection ref={insideSectionRef}>
        <img
          style={{ width: '500px', height: '300px' }}
          src="src/images/tiger.jpg"
          alt="displacement-map"
        />
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam modi
        fuga placeat fugit illum! Deleniti nisi minima rerum beatae distinctio
        incidunt atque sed, hic culpa ipsa magnam recusandae totam dignissimos
        saepe itaque sunt nihil repellat veniam tempore natus. Excepturi beatae
        quidem voluptas molestiae blanditiis voluptatum, voluptate consequuntur
        numquam pariatur harum doloribus vero soluta tenetur. Eius ea sequi
        pariatur quasi architecto! Maxime, incidunt! Nam velit possimus pariatur
        quaerat expedita corrupti explicabo quisquam vel aspernatur quis.
        Asperiores non quibusdam quidem distinctio ad saepe enim nostrum error
        laborum impedit aspernatur, commodi quos? Accusantium quod officia sequi
        ipsam dolore debitis nihil asperiores officiis qui.
      </InsideSection>
    </Section>
  );
};

export default About;
