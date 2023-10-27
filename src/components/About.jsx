import React, { useRef } from 'react';
import styled from 'styled-components';
import SectionDetail from './SectionDetail';
import { useIsScrolling } from './useIsScrolling';
import { useStateValue } from '../StateProvider';
import useLerp from './useLerp';

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
  // const mainRef = useRef();
  const fixed_positionRef = useRef();
  // ------------------------------ reducer ------------------------------- //
  const [states, dispatch] = useStateValue();
  // ------------------------------ reducer ------------------------------- //
  //

  // React.useEffect(() => {
  // console.log('width', window.innerWidth);
  // console.log('height', window.innerHeight);
  // }, []);

  const [isScrolling, scrollValue] = useIsScrolling(fixed_positionRef.current);

  React.useEffect(() => {
    // console.log('scrollValue', scrollValue);

    if (!isScrolling) {
      // console.log('no scrolling anymore !!!');
      dispatch({
        type: 'GET_SCROLLMODE',
        value: isScrolling,
      });
    } else {
      dispatch({
        type: 'GET_SCROLLMODE',
        value: isScrolling,
      });
    }
  }, [scrollValue, isScrolling]);

  return (
    <>
      <Fixed_Position ref={fixed_positionRef}>
        {/* <MainBody_flex ref={mainRef}> */}
        {Array(100)
          .fill(100)
          .map((num, i) => (
            <SectionDetail key={i} indexkey={i} />
          ))}
        {/* </MainBody_flex> */}
      </Fixed_Position>
    </>
  );
};

export default About;
