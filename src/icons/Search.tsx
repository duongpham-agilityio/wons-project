import { IconProps } from '@/types';

const SearchIcon: React.FC<IconProps> = ({ width, height, className }) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 22 22"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10.25 20.9878C4.6 20.9878 0 16.3878 0 10.7378C0 5.08779 4.6 0.487793 10.25 0.487793C15.9 0.487793 20.5 5.08779 20.5 10.7378C20.5 16.3878 15.9 20.9878 10.25 20.9878ZM10.25 1.98779C5.42 1.98779 1.5 5.91779 1.5 10.7378C1.5 15.5578 5.42 19.4878 10.25 19.4878C15.08 19.4878 19 15.5578 19 10.7378C19 5.91779 15.08 1.98779 10.25 1.98779Z"
      fill="#809FB8"
    />
    <path
      d="M20.5502 21.9877C20.3602 21.9877 20.1702 21.9177 20.0202 21.7677L17.0202 18.7677C16.7302 18.4777 16.7302 17.9977 17.0202 17.7077C17.3102 17.4177 17.7902 17.4177 18.0802 17.7077L21.0802 20.7077C21.3702 20.9977 21.3702 21.4777 21.0802 21.7677C20.9302 21.9177 20.7402 21.9877 20.5502 21.9877Z"
      fill="#809FB8"
    />
  </svg>
);

export default SearchIcon;
