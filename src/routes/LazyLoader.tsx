import { FC, Suspense } from "react";

type Props = {
  children: React.ReactNode;
};

const Fallback: FC = () => <h1>Loading...</h1>;

const LazyLoaded: FC<Props> = ({ children }) => {
  return <Suspense fallback={<Fallback />}>{children}</Suspense>;
};

export default LazyLoaded;
