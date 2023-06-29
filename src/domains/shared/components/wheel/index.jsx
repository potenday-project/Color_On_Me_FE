import styled from "@emotion/styled";

const Palette = styled.div`
  height: 100%;
  width: 100%;
  position: relative;
  display: inline-block;
  overflow: hidden;
`;

const Common = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border: ${({ lineWeight }) => `${lineWeight * 10}px solid var(--c, red)`};
  border-radius: 50%;
  clip-path: polygon(
    ${({ clipDegree }) => `50% 50%,
    50% 0%,
     ${50 + 50 * clipDegree}% 0% ,50% 50%`}
  );
`;

const Color = styled(Common)`
  transform: rotate(${({ degree }) => `${degree}deg`});
  --c: ${({ color }) => color};
`;

function getTanFromDegrees(degrees) {
  return Math.tan((degrees * Math.PI) / 180);
}

export default function Wheel({ colors, lineWeight = 2 }) {
  const tan = getTanFromDegrees(360 / colors.length);
  const xposition = Math.round(tan * 1000) / 1000;

  return (
    <>
      <Palette>
        {colors.map((color, index) => {
          return (
            <Color
              lineWeight={lineWeight}
              clipDegree={xposition}
              key={color}
              color={color}
              degree={(360 / colors.length) * index}
            ></Color>
          );
        })}
      </Palette>
    </>
  );
}
