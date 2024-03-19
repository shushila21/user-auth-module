import { useNavigate } from 'react-router-dom';
import { useMutation } from '@tanstack/react-query';
import { useTypedDispatch } from '@Store/hooks';
import { logoutUser } from '@Services/authentication';
import { resetCommonState, togglePromptDialog } from '@Store/actions/common';
import { Button } from '@Components/RadixComponents/Button';
import { FlexColumn, FlexRow } from '@Components/common/Layouts';
import { resetUserState } from '@Store/slices/user';

export default function LogoutPrompt() {
  const dispatch = useTypedDispatch();
  const navigate = useNavigate();

  const { mutate, isLoading } = useMutation({
    mutationFn: logoutUser,
    onSuccess: () => {
      localStorage.clear();
      dispatch(togglePromptDialog());
      // reset user state
      dispatch(resetUserState());
      // reset ward filter
      dispatch(resetCommonState());
      navigate('/login');
    },
  });

  return (
    <FlexColumn className="naxatw-text-sm">
      <p className=" naxatw-text-grey-600">Are you sure you want to logout ?</p>
      <FlexRow gap={3} className="naxatw-w-full naxatw-justify-end naxatw-pt-5">
        <Button
          variant="outline"
          onClick={() => dispatch(togglePromptDialog())}
        >
          Cancel
        </Button>
        <Button
          rightIcon="logout"
          withLoader
          isLoading={isLoading}
          onClick={() => mutate()}
          variant="destructive"
        >
          Logout
        </Button>
      </FlexRow>
    </FlexColumn>
  );
}
