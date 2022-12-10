import React, { Suspense } from "react";
import Loading from "../../UI/Loading";
import ProtectedRoute from "../ProtectedRoute";
interface SuspenseWrapperProps {
  path: string;
  isProtected?: boolean;
}

const SuspenseWrapper = (props: SuspenseWrapperProps) => {
  const LazyComponent = React.lazy(() => import(`../../../${props.path}`));

  if (props.isProtected) {
    return (
      <ProtectedRoute>
        <Suspense fallback={<Loading />}>
          <LazyComponent />
        </Suspense>
      </ProtectedRoute>
    );
  }

  return (
    <Suspense fallback={<Loading />}>
      <LazyComponent />
    </Suspense>
  );
};

export default SuspenseWrapper;
