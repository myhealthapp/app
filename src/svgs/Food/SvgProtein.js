import * as React from 'react';
import Svg, { Path, Image, G } from 'react-native-svg';

function SvgComponent(props) {
  return (
    <Svg width={30} height={30} viewBox="0 0 98 78" {...props}>
      <G
        id="Page-1"
        stroke="none"
        stroke-width="1"
        fill="none"
        fill-rule="evenodd">
        <G id="Screen-06" transform="translate(-372.000000, -1188.000000)">
          <Image
            id="protein"
            x="365"
            y="1171"
            width="112"
            height="112"
            href="data:image/png;base64,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"></Image>
        </G>
      </G>
    </Svg>
  );
}

const SvgProtein = React.memo(SvgComponent);
export default SvgProtein;