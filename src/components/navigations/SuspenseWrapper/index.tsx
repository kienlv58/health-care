import { ReactNode, Suspense } from "react";
import Loading from "../../UI/Loading";
import ProtectedRoute from "../ProtectedRoute";
interface SuspenseWrapperProps {
  isProtected?: boolean;
  children: ReactNode;
}

const SuspenseWrapper = (props: SuspenseWrapperProps) => {
  if (props.isProtected) {
    return (
      <ProtectedRoute>
        <Suspense fallback={<Loading />}>{props.children}</Suspense>
      </ProtectedRoute>
    );
  }

  return <Suspense fallback={<Loading />}>{props.children}</Suspense>;
};

export default SuspenseWrapper;
