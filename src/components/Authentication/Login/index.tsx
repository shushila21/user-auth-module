import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useMutation } from '@tanstack/react-query';
import { signInUser } from '@Services/authentication';
import FullLogo from '@Assets/images/dmaps-logo-full.svg';
import Image from '@Components/RadixComponents/Image';
import Label from '@Components/common/FormUI/Label';
import { Button } from '@Components/RadixComponents/Button';
import Icon from '@Components/common/Icon';
import FormControl from '@Components/common/FormUI/FormControl';
import Input from '@Components/common/FormUI/Input';
import { FlexRow } from '@Components/common/Layouts';
import Flex from '@Components/common/Layouts/Flex';
import { useTypedDispatch } from '@Store/hooks';
import { setUserState } from '@Store/actions/user';

const initialState = {
  email: '',
  password: '',
  keepSignedIn: false,
};

export default function Login() {
  const navigate = useNavigate();
  const dispatch = useTypedDispatch();
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [error, setError] = useState<Record<string, any> | null>(null);
  // eslint-disable-next-line no-unused-vars
  const [showErrorToggle, setShowErrorToggle] = useState<boolean>(false);
  const handleShow = () => {
    return setShowPassword(prev => !prev);
  };

  const { mutate, isError } = useMutation<any, any, any, unknown>({
    mutationFn: signInUser,
    onSuccess: (res: any) => {
      dispatch(setUserState({ user: res.data }));
      localStorage.setItem('token', res.data.token);
      navigate('/dashboard');
    },
    onError: err => setError(err),
  });

  const { register, handleSubmit } = useForm({
    defaultValues: initialState,
  });

  const onSubmit = (data: {
    email: string;
    password: string;
    keepSignedIn: boolean;
  }) => mutate(data);

  useEffect(() => {
    if (isError) {
      setShowErrorToggle(true);
    }
  }, [isError, error]);

  return (
    <>
      <Flex
        gap={5}
        className="naxatw-h-screen naxatw-w-full naxatw-flex-col naxatw-items-center naxatw-justify-center
        naxatw-bg-primary-50"
      >
        <Image src={FullLogo} />

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="naxatw-flex naxatw-w-[60%] naxatw-flex-col naxatw-gap-5 naxatw-pt-7"
        >
          <FormControl>
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="Email"
              {...register('email', { required: true })}
            />
          </FormControl>

          <FormControl className="naxatw-relative">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              placeholder="*******"
              type={showPassword ? 'text' : 'password'}
              {...register('password', { required: true })}
            />
            <Icon
              name={showPassword ? 'visibility' : 'visibility_off'}
              className="naxatw-absolute naxatw-right-2 naxatw-top-9 naxatw-cursor-pointer
              naxatw-text-xl naxatw-text-grey-800"
              onClick={() => handleShow()}
            />
          </FormControl>

          <FlexRow className="naxatw-items-center naxatw-justify-between">
            <FlexRow className="naxatw-items-center naxatw-gap-2 naxatw-pl-3  ">
              <Input type="checkbox" id="check" {...register('keepSignedIn')} />
              <Label htmlFor="check">Keep me signed in</Label>
            </FlexRow>
            <Button
              variant="ghost"
              className="naxatw-text-primary-500"
              onClick={() => {
                navigate('/forgot-password');
              }}
              type="button"
            >
              Forgot Your Password?
            </Button>
          </FlexRow>

          <FlexRow className="naxatw-justify-center">
            <Button className="naxatw-px-8" type="submit">
              Sign In
            </Button>
          </FlexRow>
        </form>
      </Flex>
    </>
  );
}
