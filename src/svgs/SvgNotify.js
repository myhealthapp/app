import * as React from 'react';
import Svg, { Path, Image, G } from 'react-native-svg';

function SvgComponent(props) {
  return (
    <Svg width={30} height={30} viewBox="0 0 86 69" {...props}>
      <G
        id="Page-1"
        stroke="none"
        stroke-width="1"
        fill="none"
        fill-rule="evenodd">
        <G id="Screen-04" transform="translate(-110.000000, -2013.000000)">
          <Image
            id="announcement"
            transform="translate(151.500000, 2048.500000) rotate(18.000000) translate(-151.500000, -2048.500000) "
            x="109"
            y="2010"
            width="85"
            height="77"
            href="data:image/png;base64,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"></Image>
        </G>
      </G>
    </Svg>
  );
}

const SvgNotify = React.memo(SvgComponent);
export default SvgNotify;