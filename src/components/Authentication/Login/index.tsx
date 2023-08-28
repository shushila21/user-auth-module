import { useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
// import Image from '@Components/RadixComponents/Image';
import Label from '@Components/common/FormUI/Label';
import { Button } from '@Components/RadixComponents/Button';
import InfoDialog from '@Components/common/InfoDialog';
import Janakpur from '@Assets/images/janakpur.svg';
// import FullLogo from '@Assets/images/damis-logo-full.svg';
import { signInUser } from '@Services/authentication';
import Icon from '@Components/common/Icon';
import FormControl from '@Components/common/FormUI/FormControl';
import Input from '@Components/common/FormUI/Input';

const initialState = {
  username: '',
  password: '',
};

export default function Login() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const handleShow = () => {
    return setShowPassword(prev => !prev);
  };

  const { mutate, isError, error } = useMutation({
    mutationFn: signInUser,
    onSuccess: (res: any) => {
      localStorage.setItem('token', res.data.token);
      navigate('/dashboard');
    },
  });

  const { register, handleSubmit } = useForm({
    defaultValues: initialState,
  });

  const onSubmit = (data: any) => mutate(data);

  return (
    <div className="naxatw-flex naxatw-h-screen naxatw-w-full  naxatw-bg-blue-700">
      <div className="naxatw-hidden naxatw-h-screen naxatw-w-full naxatw-overflow-hidden md:naxatw-block md:naxatw-w-[40%] ">
        <img
          src={Janakpur}
          className="naxatw-h-full naxatw-w-full "
          alt=""
          style={{ objectFit: 'cover' }}
        />
      </div>
      <div
        className="naxatw-flex naxatw-h-screen naxatw-w-full naxatw-flex-col naxatw-items-center naxatw-justify-center
          naxatw-bg-primary-50 md:naxatw-flex-1"
      >
        {/* <Image src={FullLogo} /> */}
        <h1>Insert Logo Here...</h1>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="naxatw-flex naxatw-w-[60%] naxatw-flex-col naxatw-gap-5 naxatw-pt-7"
        >
          {isError ? (
            <InfoDialog status="error">
              {(error as Error).message || 'Something is not right.'}
            </InfoDialog>
          ) : null}

          <FormControl>
            <Label htmlFor="username">Username or Email</Label>
            <Input
              id="username"
              type="type"
              placeholder="Username or Email"
              {...register('username', { required: true })}
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

          <div className="naxatw-flex naxatw-items-center naxatw-justify-between">
            <div className="naxatw-flex naxatw-items-center naxatw-gap-2 naxatw-pl-3  ">
              <Input type="checkbox" id="check" className="" />
              <Label htmlFor="check">Keep me signed in</Label>
            </div>
            <Button variant="ghost" className="naxatw-text-primary-500">
              Forgot Your Password?
            </Button>
          </div>

          <Button type="submit">Sign In</Button>
        </form>
      </div>
    </div>
  );
}
