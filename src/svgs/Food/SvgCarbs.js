import * as React from 'react';
import Svg, { Path, Image, G } from 'react-native-svg';

function SvgComponent(props) {
  return (
    <Svg width={32} height={34} viewBox="0 0 32 86" {...props}>
      <G
        id="Page-1"
        stroke="none"
        stroke-width="1"
        fill="none"
        fill-rule="evenodd">
        <G id="Screen-06" transform="translate(-164.000000, -1184.000000)">
          <Image
            id="wheat"
            x="137"
            y="1184"
            width="86"
            height="86"
            href="data:image/png;base64,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"></Image>
        </G>
      </G>
    </Svg>
  );
}

const SvgCarbs = React.memo(SvgComponent);
export default SvgCarbs;