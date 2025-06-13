import { Result } from "antd";
import { GetServerSideProps, NextPage } from "next";
import Link from "next/link";

const NotFoundPage: NextPage = () => {
  return (
    <div className="">
      <Result status={403} title="Page Not Found!" extra={<Link href="/">Go Home</Link>} />
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  return {
    props: {},
  };
};

export default NotFoundPage;
