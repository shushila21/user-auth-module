import Janakpur from '@Assets/images/janakpur.svg';
import Flex from '@Components/common/Layouts/Flex';

export default function SignInBanner() {
  return (
    <Flex className="naxatw-hidden naxatw-h-screen naxatw-w-full naxatw-overflow-hidden md:naxatw-block">
      <img
        src={Janakpur}
        className="naxatw-h-full naxatw-w-full naxatw-object-cover"
        alt="sidebar-banner"
      />
    </Flex>
  );
}
