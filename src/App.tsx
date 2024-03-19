import AuthenticationPage from '@Components/Authentication';

export default function App() {
  return (
    <div className="Flex">
      <AuthenticationPage />
      {/* {process.env.NODE_ENV !== 'production'
          ? generateRoutes({ routes: [...testRoutes, ...appRoutes] })
          : generateRoutes({ routes: appRoutes })} */}
    </div>
  );
}
