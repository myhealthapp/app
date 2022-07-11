import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

interface Props {
  color?: string;
  width?: number;
  height?: number;
}

function SvgComponent(props: Props) {
  const { color, width, height } = props;
  return (
    <Svg
      width={width ? width : 16}
      height={height ? height : 16}
      viewBox="0 0 16 16"
      fill="none"
      {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13.69 2.884c0 2.017-4.143 2.884-6.345 2.884C3.905 5.768 1 4.448 1 2.884 1 1.321 3.906 0 7.345 0c3.44 0 6.345 1.32 6.345 2.884zM7.345.545a.795.795 0 00-.263.325c-2.003.065-3.486.851-3.486 1.87 0 1.373 2.307 1.874 3.74 1.874 0 0 2.893 0 3.658-1.407.383-.706-.254-1.471-.928-1.926a6.589 6.589 0 00-2.07-.86.782.782 0 00-.651.124zM6.81 4.017l.184-2.566c-1.678.08-2.822.719-2.822 1.289 0 .545 1.049 1.162 2.638 1.277zm2.184-2.659A7.8 7.8 0 007.853.981a.213.213 0 00-.26.192v.005l-.207 2.86c.499 0 .996-.056 1.481-.169l.127-2.51zm-.496 1.526a.288.288 0 11-.576 0v-.288a.288.288 0 01.576 0v.288zm1.974.076c.198-.417-.346-.942-.729-1.201-.06-.04-.122-.08-.186-.118l-.103 2.05c.54-.201.884-.448 1.018-.731zM8.053 14.006a.673.673 0 00-.535-.116c-.672.1-1.301-.354-1.417-1.024a.675.675 0 00-.813-.585 1.24 1.24 0 01-.855-.182c-.26.183-.514.361-.763.534a.577.577 0 00-.03.923l2.897 2.317c.205.164.494.17.705.014.424-.317.841-.64 1.252-.973a1.57 1.57 0 01-.163-.437.673.673 0 00-.278-.471zm-1.348.883a.288.288 0 01-.406.045L4.857 13.78a.288.288 0 11.36-.45l1.443 1.153a.288.288 0 01.045.406zm7.05-13.52a3.707 3.707 0 00-.871-.584c.759.504 1.396 1.223 1.383 2.13a2.195 2.195 0 01-.6 1.401c-1.477 2.038-5.397 5.055-8.68 7.391.086.008.173.008.26-.001.67-.104 1.3.35 1.414 1.019a.683.683 0 00.815.59c.671-.1 1.3.353 1.415 1.021.016.068.036.135.06.2.427-.354.846-.714 1.25-1.08l-1.313-1.124a.288.288 0 11.375-.438l1.362 1.165c.406-.379.801-.762 1.18-1.15l-1.187-1.02a.288.288 0 11.375-.437l1.211 1.038a32.433 32.433 0 00.985-1.085l.122-.14-.86-.983a.288.288 0 11.434-.38l.805.92c.34-.403.65-.83.928-1.277l-.574-.807a.288.288 0 01.47-.335l.41.577a4.42 4.42 0 00.408-1.312c.23-1.71-.168-4.012-1.576-5.299zM3.596 8.364v1.442A7.015 7.015 0 012.443 9.3V7.498a.288.288 0 00-.577 0v1.423C1.317 8.493 1 8.005 1 7.498V4.29c1.058 1.22 3.47 2.055 6.345 2.055a11.847 11.847 0 004.439-.786 59.38 59.38 0 01-5.593 4.562V8.652a.288.288 0 10-.577 0v1.613c-.486-.063-.968-.159-1.442-.286V8.364a.288.288 0 00-.576 0z"
        fill={color ? color : '#00C48C'}
      />
    </Svg>
  );
}

const SvgTapeMeasure = React.memo(SvgComponent);
export default SvgTapeMeasure;
