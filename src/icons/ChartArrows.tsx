import { IconProps } from '@/types';

const ChartArrows: React.FC<IconProps> = ({ width, height, className }) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 13 8"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M0.25 7.22977C0.0880127 7.07217 -0.00341797 6.85577 -0.00341797 6.62976C-0.00341797 6.40375 0.0880127 6.18735 0.25 6.02975L4 2.38776C4.18665 2.20544 4.44373 2.11426 4.70349 2.13834C4.96313 2.16238 5.19922 2.29929 5.34912 2.51276L6.62805 4.37576L9.29199 1.79675H7.90698C7.58948 1.81851 7.28626 1.66144 7.12085 1.38947C6.95544 1.11749 6.95544 0.776001 7.12085 0.504028C7.28626 0.232056 7.58948 0.0749817 7.90698 0.0967407H11.426C11.9023 0.0927429 12.2939 0.471466 12.3059 0.947754L12.306 4.35376C12.306 4.66815 12.1383 4.95868 11.866 5.11587C11.5938 5.27307 11.2583 5.27307 10.986 5.11587C10.7137 4.95868 10.546 4.66815 10.546 4.35376V2.99176L7.10803 6.31976C6.92151 6.50208 6.66443 6.59326 6.40466 6.56918C6.14502 6.54514 5.90894 6.40823 5.75903 6.19476L4.48108 4.33276L1.48914 7.23276C1.14136 7.56485 0.593994 7.56485 0.246094 7.23276L0.25 7.22977Z"
      className="fill-black-900 dark:fill-white"
    />
  </svg>
);

export default ChartArrows;
