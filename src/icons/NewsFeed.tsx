import { IconProps } from '@/types';

const NewsFeedIcon: React.FC<IconProps> = ({ width, height, className }) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 27 30"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M8.08921 29.0357C3.17321 29.0357 0.345215 26.2087 0.345215 21.2947V7.83572C0.345215 2.92273 3.17421 0.0947266 8.08921 0.0947266H18.8652C23.7822 0.0947266 26.6092 2.92273 26.6092 7.83572V21.2977C26.6092 26.2117 23.7812 29.0387 18.8652 29.0387L8.08921 29.0357ZM2.36522 7.83572V21.2977C2.36522 25.1477 4.23722 27.0197 8.08921 27.0197H18.8652C22.7172 27.0197 24.5902 25.1477 24.5902 21.2978V7.83572C24.5902 4.09973 22.8262 2.22672 19.2022 2.11972V11.6867C19.2085 12.356 18.8093 12.9626 18.1922 13.2217C17.578 13.4896 16.8635 13.3674 16.3732 12.9107L13.4732 10.2597L10.5732 12.9247C10.0838 13.3798 9.37163 13.5021 8.75843 13.2366C8.14523 12.9711 7.74719 12.368 7.74421 11.6997V2.11972C4.12821 2.22772 2.36522 4.09973 2.36522 7.83572ZM14.6222 8.56271L17.1812 10.9187V2.11871H9.77321V10.9187L12.3332 8.56271C12.9821 7.97147 13.9744 7.97147 14.6232 8.56271H14.6222ZM9.43621 23.6537C9.07459 23.6549 8.73992 23.4626 8.55875 23.1497C8.37759 22.8367 8.37759 22.4507 8.55875 22.1378C8.73991 21.8248 9.07458 21.6325 9.43621 21.6337L20.8852 21.6337C21.2468 21.6325 21.5815 21.8248 21.7627 22.1378C21.9438 22.4507 21.9438 22.8367 21.7627 23.1497C21.5815 23.4626 21.2469 23.6549 20.8852 23.6537H9.43621ZM15.1602 18.2687C14.7986 18.2699 14.4639 18.0776 14.2828 17.7646C14.1016 17.4517 14.1016 17.0657 14.2828 16.7527C14.4639 16.4398 14.7986 16.2475 15.1602 16.2487L20.8852 16.2487C21.2468 16.2475 21.5815 16.4398 21.7627 16.7527C21.9438 17.0657 21.9438 17.4517 21.7627 17.7646C21.5815 18.0776 21.2469 18.2699 20.8852 18.2687H15.1602Z"
      fill="#809FB8"
    />
  </svg>
);

export default NewsFeedIcon;