import MypageView from "@/domains/mypage";
import withAuth from "@/domains/shared/hoc/withAuth";
import { NextPage } from "next";

const Mypage: NextPage = () => {
  return <MypageView />;
};

export default Mypage;
