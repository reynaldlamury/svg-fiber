import React, { useRef } from 'react';
import styled from 'styled-components';
import SectionDetail from './SectionDetail';
import { useIsScrolling } from './useIsScrolling';
import { useStateValue } from '../StateProvider';
// import useLerp from './useLerp';

const Fixed_Position = styled.div`
  background-color: rgb(59, 230, 173);
  color: rgb(251, 249, 252);
  padding: 10px;
  position: absolute;
  left: 0;
  /* transform: translateX(-27px); */

  //-- flex conf --
  /* gap: 10px; */
  /* display: flex;
  flex-direction: column;
  justify-content: center; */
  /* align-items: center; */
  //-- flex conf --
  filter: url(#f);

  height: 100vh;
  width: 100%;
  overflow: auto;
  /* transform: translate3d(0, 0, 0); */

  /* clip-path: polygon(0 10%, 100% 10%, 100% 90%, 0 90%); */
`;

const About = () => {
  // const mainRef = useRef();
  const fixed_positionRef = useRef();
  // ------------------------------ reducer ------------------------------- //
  const [states, dispatch] = useStateValue();
  // ------------------------------ reducer ------------------------------- //
  //
  const [isScrolling, scrollValue] = useIsScrolling(fixed_positionRef.current);

  // React.useEffect(() => {
  // console.log('width', window.innerWidth);
  // console.log('height', window.innerHeight);
  // }, []);

  React.useEffect(() => {
    if (!isScrolling) {
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
  }, [isScrolling]);

  return (
    <>
      <Fixed_Position ref={fixed_positionRef}>
        {/* <MainBody_flex ref={mainRef}> */}
        {Array(10)
          .fill(10)
          .map((num, i) => (
            <SectionDetail
              aboutRef={fixed_positionRef.current}
              key={i}
              indexkey={i}
            />
          ))}
        {/* </MainBody_flex> */}
      </Fixed_Position>
    </>
  );
};

export default About;
