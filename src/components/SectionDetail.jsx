import React, { useEffect } from 'react';
import { useRef } from 'react';
import styled from 'styled-components';
import useLerp from './useLerp';
import { useIsScrolling } from './useIsScrolling';
import { useStateValue } from '../StateProvider';
import UseInertia from './useInertia';
import useDeltaY from './useDeltaY';

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

const Section = styled.section`
  /* position: sticky; */
  /* top: 0; */
  background-color: ${(props) => props.background};
  font-size: 32px;
  line-height: 40px;
  color: rgb(251, 249, 252);
  width: 100%;
  height: 100%;
`;

const InsideSection = styled.div`
  background-color: rgb(34, 38, 90);
  color: rgb(189, 191, 207);
  padding: 10px;
  position: absolute;
  left: 0;
`;

const SectionDetail = ({ indexkey, aboutRef }) => {
  const insideSectionRef = useRef();
  const sectionRef = useRef();

  // const currentY = useLerp();
  const currentY = UseInertia(aboutRef);
  // const [currentY, scrollValue] = useIsScrolling();
  const deltaY = useDeltaY(sectionRef.current);
  const [state, dispatch] = useStateValue();

  React.useEffect(() => {
    sectionRef.current.style.transform = `translateY(${-currentY}px)`;
    // console.log('currentY * 1000', currentY * 1000);
  }, [currentY]);

  React.useEffect(() => {
    dispatch({
      type: 'GET_DELTAY',
      value: deltaY,
    });
  }, [deltaY]);

  return (
    <Section ref={sectionRef} background={colorsSection[indexkey]}>
      <InsideSection ref={insideSectionRef}>
        <img src='src/images/css.jpg' alt='displacement-map' />
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

export default SectionDetail;
