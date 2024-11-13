'use client';
import { Card } from '@nextui-org/react';
import Link from 'next/link';
import { useState, useTransition } from 'react';
import clsx from 'clsx';
import { useRouter } from 'next/navigation';
import { Controller, useForm } from 'react-hook-form';
import { MESSAGE, REGEX, ROUTERS } from '@/constants';
import { Account } from '@/types';
import { ButtonCustom, CheckboxCustom, InputField } from '@/components';
import {
  AppleIcon,
  BackIcon,
  EyeFilledIcon,
  EyeSlashFilledIcon,
  GoogleIcon,
  LockIcon,
} from '@/icons';
import { handleLogin } from '@/utils';

const FormLogin = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [error, setError] = useState('');
  const toggleVisibility = () => setIsVisible(!isVisible);
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      username: '',
      password: '',
    },
  });
  const [isPending, startTransition] = useTransition();
  const router = useRouter();

  const onSubmit = ({ username, password }: Account) => {
    startTransition(async () => {
      const result = await handleLogin({ username, password });

      if (result.success) {
        router.push(ROUTERS.HOME);
      } else {
        setError(result.error || 'Unknown error occurred');
      }
    });
  };

  return (
    <Card className="flex-row justify-end min-w-3xl pt-6 pr-3xl pl-[52px] pb-10 gap-9 w-4xl">
      <form className="w-[528px]" onSubmit={handleSubmit(onSubmit)}>
        <h3 className="font-bold text-4xl">Sign In</h3>
        {!Object.keys(errors).length && error && (
          <p className="text-red-600 text-sm font-normal">{error}</p>
        )}
        <Controller
          name="username"
          control={control}
          rules={{
            required: MESSAGE.USERNAME_REQUIRED,
            pattern: {
              value: REGEX.USERNAME,
              message: MESSAGE.INVALID_USERNAME,
            },
          }}
          render={({ field, fieldState }) => (
            <InputField
              {...field}
              type="text"
              placeholder="user0123456"
              label="Username"
              className="mt-2"
              size="xl"
              color="secondary"
              classWrapper="mt-11"
              errorMsg={fieldState.error ? fieldState.error.message : undefined}
            />
          )}
        />
        <Controller
          name="password"
          control={control}
          rules={{
            required: MESSAGE.PASSWORD_REQUIRED,
            pattern: {
              value: REGEX.PASSWORD,
              message: MESSAGE.INVALID_PASSWORD,
            },
          }}
          render={({ field, fieldState }) => (
            <InputField
              {...field}
              label="Password"
              className="w-full"
              color="secondary"
              size="xl"
              classWrapper="mt-10"
              startContent={<LockIcon width="22px" height="22px" />}
              endContent={
                <button
                  className="focus:outline-none"
                  type="button"
                  onClick={toggleVisibility}
                  aria-label="toggle password visibility"
                >
                  {isVisible ? (
                    <EyeSlashFilledIcon
                      width="1em"
                      height="1em"
                      className="text-2xl text-default-400 pointer-events-none"
                    />
                  ) : (
                    <EyeFilledIcon
                      width="1em"
                      height="1em"
                      className="text-2xl text-default-400 pointer-events-none"
                    />
                  )}
                </button>
              }
              type={isVisible ? 'text' : 'password'}
              errorMsg={fieldState.error ? fieldState.error.message : undefined}
            />
          )}
        />
        <CheckboxCustom size="default" className="mt-3xl">
          remember me
        </CheckboxCustom>
        <ButtonCustom
          color="dark"
          radius="sm"
          className={clsx(
            'py-4 w-full text-base font-semibold h-[52px] mt-5xl',
            { 'opacity-50 cursor-not-allowed': isPending },
          )}
          type="submit"
          disabled={isPending}
        >
          {isPending ? 'Logging in...' : 'Log In to your account'}
        </ButtonCustom>
        <div className="flex justify-between items-center gap-3 mt-l">
          <div className="w-full h-0 border border-gray-50 dark:border-gray-700 inline-block"></div>
          <p className="font-normal text-xsm text-grayBlue-400">or</p>
          <div className="w-full h-0 border border-gray-50 dark:border-gray-700 inline-block"></div>
        </div>
        <ButtonCustom
          color="bright"
          radius="sm"
          className="py-4 w-full text-base font-semibold h-[52px] mt-l"
          startContent={<GoogleIcon width="26px" height="26px" />}
        >
          Continue with Google
        </ButtonCustom>
        <ButtonCustom
          color="bright"
          radius="sm"
          className="py-4 w-full text-base font-semibold h-[52px] mt-3xl"
          startContent={<AppleIcon width="26px" height="26px" />}
        >
          Login with AppleID
        </ButtonCustom>
        <p className="font-normal text-xsm text-grayBlue-400 text-center mt-3xl">
          Forgot password?{' '}
          <Link
            href={ROUTERS.EMPTY}
            className="font-semibold text-black-900 dark:text-white"
          >
            Recover my password
          </Link>
        </p>
      </form>
      <Link href={ROUTERS.HOME} className="h-10">
        <ButtonCustom
          startContent={<BackIcon width="7px" height="18px" />}
          color="default"
          radius="sm"
          size="xs"
          className="gap-5"
        >
          Back
        </ButtonCustom>
      </Link>
    </Card>
  );
};

export default FormLogin;