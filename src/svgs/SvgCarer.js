import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function SvgComponent(props) {
  return (
    <Svg width={64} height={16} viewBox="0 0 64 16" fill="none" {...props}>
      <Path
        d="M2.302 13.698C.767 12.194 0 10.287 0 7.978c0-2.31.767-4.216 2.302-5.72C3.85.751 5.743 0 7.978 0c1.698 0 3.203.432 4.514 1.296 1.325.864 2.271 2.078 2.838 3.643h-3.777c-.7-1.37-1.892-2.056-3.575-2.056-1.416 0-2.57.47-3.464 1.408-.879.923-1.318 2.16-1.318 3.71 0 1.534.439 2.77 1.318 3.709.894.923 2.048 1.385 3.464 1.385 1.668 0 2.86-.685 3.575-2.056h3.777c-.566 1.565-1.512 2.779-2.838 3.643-1.311.849-2.816 1.273-4.514 1.273-2.25 0-4.142-.752-5.676-2.257zM25.934 12.313c.656-.655.983-1.55.983-2.682s-.327-2.018-.983-2.659c-.655-.655-1.422-.983-2.302-.983-.879 0-1.646.32-2.301.96-.64.641-.961 1.528-.961 2.66 0 1.132.328 2.026.983 2.682.656.655 1.415.983 2.28.983.879 0 1.646-.32 2.301-.961zm-7.106 1.9c-1.102-1.207-1.654-2.742-1.654-4.604s.552-3.382 1.654-4.559c1.102-1.191 2.503-1.787 4.201-1.787 1.698 0 2.995.7 3.888 2.1V3.441h3.129v12.38h-3.129v-2.078C25.98 15.248 24.675 16 23.007 16c-1.669 0-3.062-.596-4.179-1.788zM36.538 3.441v2.19c.834-1.579 2.041-2.368 3.62-2.368V6.48h-.782c-.938 0-1.646.238-2.123.715-.477.461-.715 1.266-.715 2.413v6.212h-3.15V3.441h3.15zM47.629 16c-1.803 0-3.27-.58-4.402-1.743-1.132-1.177-1.698-2.726-1.698-4.648 0-1.922.566-3.456 1.698-4.603 1.147-1.162 2.622-1.743 4.424-1.743 1.818 0 3.308.566 4.47 1.698 1.162 1.117 1.743 2.615 1.743 4.492 0 .432-.03.834-.09 1.206h-9.028c.075.805.373 1.453.894 1.944.522.492 1.184.738 1.989.738 1.088 0 1.892-.447 2.413-1.34h3.397c-.358 1.176-1.05 2.137-2.078 2.882-1.028.745-2.272 1.117-3.732 1.117zm2.972-7.374c-.045-.82-.35-1.475-.916-1.967-.551-.491-1.222-.737-2.011-.737-.79 0-1.453.246-1.99.737-.52.492-.833 1.147-.938 1.967h5.855zM59.495 3.441v2.19c.835-1.579 2.041-2.368 3.62-2.368V6.48h-.782c-.938 0-1.646.238-2.122.715-.477.461-.715 1.266-.715 2.413v6.212h-3.151V3.441h3.15z"
        fill={props.color ? props.color : '#EB4B4B'}
      />
    </Svg>
  );
}

const SvgCarer = React.memo(SvgComponent);
export default SvgCarer;
