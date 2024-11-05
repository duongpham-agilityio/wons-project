import { colors } from '@/themes';
import { IconProps } from '@/types';

const ClockIcon: React.FC<IconProps> = ({ width, height, className }) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 18 17"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M0.0996094 8.5C0.0996094 3.8056 3.90515 0 8.59961 0C13.2941 0 17.0996 3.80554 17.0996 8.49994C17.0996 13.1944 13.2941 17 8.59961 17C3.90515 17 0.0996094 13.1944 0.0996094 8.5ZM1.64465 8.5C1.64368 11.3102 3.33704 13.8465 5.93518 14.9238C8.53345 16.001 11.5247 15.407 13.5142 13.4189C15.5037 11.4308 16.0996 8.43994 15.0242 5.841C13.9487 3.24213 11.4137 1.547 8.60107 1.54602C6.75635 1.54565 4.98718 2.27814 3.6825 3.58228C2.37793 4.88635 1.6449 6.6554 1.64465 8.5ZM10.3706 11.365L8.05261 9.047C7.90771 8.90228 7.82642 8.70575 7.82666 8.50098V3.86499C7.81665 3.58252 7.96167 3.31714 8.20483 3.17297C8.44788 3.02881 8.75037 3.02881 8.99341 3.17297C9.23657 3.31714 9.38159 3.58252 9.3717 3.86499V8.18097L11.4637 10.2729C11.6648 10.467 11.7455 10.7545 11.6747 11.0248C11.604 11.2951 11.3928 11.5062 11.1226 11.5769C10.8523 11.6476 10.5648 11.567 10.3707 11.366L10.3706 11.365Z"
      fill={colors.grayBlue[400]}
    />
  </svg>
);

export default ClockIcon;
