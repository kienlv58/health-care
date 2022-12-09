import React, { Suspense } from "react";
import Loading from "../Loading";
interface SuspenseWrapperProps {
  path: string;
}

const SuspenseWrapper = (props: SuspenseWrapperProps) => {
  const LazyComponent = React.lazy(() => import(`../../../${props.path}`));

  return (
    <Suspense fallback={<Loading />}>
      <LazyComponent />
    </Suspense>
  );
};

export default SuspenseWrapper;
