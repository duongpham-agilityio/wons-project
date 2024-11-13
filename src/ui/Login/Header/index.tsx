import { Logo } from '@/icons';
import Menu from '../Menu';
import { ButtonCustom } from '@/components';
import { ROUTERS } from '@/constants';
import Link from 'next/link';

const Header = () => {
  return (
    <header className="flex justify-between pt-3xl pb-6 pl-5 pr-5xl bg-white dark:bg-dark-900">
      <Link href={ROUTERS.HOME}>
        <Logo width="266px" height="42px" />
      </Link>
      <div className="flex gap-[135px]">
        <Menu />
        <div className="flex gap-[22px]">
          <Link href={ROUTERS.LOGIN}>
            <ButtonCustom color="default" radius="sm" size="s">
              Log In
            </ButtonCustom>
          </Link>
          <Link href={ROUTERS.SIGN_UP}>
            <ButtonCustom
              color="dark"
              radius="sm"
              size="s"
              className="text-white"
            >
              Sign Up
            </ButtonCustom>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;