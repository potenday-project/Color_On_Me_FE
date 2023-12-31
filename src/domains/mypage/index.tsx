import { useEffect, useState } from "react";
import { css } from "@emotion/react";
import { useRouter } from "next/router";
import { queryClient } from "@/pages/_app";
import Header from "../shared/components/Header";
import DefaultLayout from "../shared/components/layout/DefaultLayout";
import TitleText from "../shared/components/TitleText";
import Tag from "../shared/components/Tag";
import Button from "../shared/components/Button";
import Profile from "./components/Profile";
import ColorBox from "./components/ColorBox";
import { useIsShown } from "../shared/hooks/useIsShown";
import BottomSheet from "../shared/components/BottomSheet";
import {
  useGetUser,
  usePatchPersonalColor,
  usePostUser,
} from "../shared/query/user/user.queries";
import { usePersonalColor } from "../shared/query/personal-color/color.queries";
import {
  PERSONAL_COLOR_MAPPING,
  PERSONAL_COLOR_MAPPING1,
} from "../shared/constants/constants";
import { useLogout } from "../shared/query/auth/auth.queries";
import Loading from "../shared/components/Loading";

const MypageView = () => {
  const router = useRouter();

  const { data: userData, isLoading: userDataLoading } = useGetUser();
  const { mutate: logoutMutate } = useLogout();

  const [currentColor, setCurrentColor] = useState({
    code: "",
    name: "",
  });

  const { data: colorData, isLoading: colorDataLoading } = usePersonalColor(
    currentColor.code || 1
  );
  const colors = colorData?.colors?.map(
    (color: any) => `rgb(${color.r}, ${color.g}, ${color.b})`
  );
  const { mutate: selectMutate } = usePatchPersonalColor();

  const [isShown, onOpen, onClose] = useIsShown();

  const [isEdit, setIsEdit] = useState(false);

  const headerText = isEdit ? "마이페이지 변경" : "마이페이지";

  useEffect(() => {
    if (userData && userData.personalColorId) {
      setCurrentColor({
        // code: PERSONAL_COLOR_MAPPING[userData.personalColor],
        code: userData.personalColorId,
        name: PERSONAL_COLOR_MAPPING1[userData.personalColorId].string,
      });
    }
  }, [userData]);

  const handleColorSelection = (colorCode: any, colorName: any, index: any) => {
    console.log(index);
    setCurrentColor({
      name: colorName,
      code: index + 1,
    });
    setIsEdit(true);
    onClose();
  };

  const handleCancel = () => {
    setIsEdit(false);
    setCurrentColor({
      code: PERSONAL_COLOR_MAPPING[userData.personalColor],
      name: userData.personalColor,
    });
  };

  const handleSubmit = () => {
    selectMutate(currentColor.code, {
      onSuccess: () => {
        queryClient.invalidateQueries(["getUser"]);
        setIsEdit(false);
      },
    });
  };

  const handleLogout = () => {
    logoutMutate(undefined, {
      onSuccess: () => {
        router.push("/login");
      },
    });
  };

  if (userDataLoading) {
    return <Loading />;
  }
  return (
    <DefaultLayout header={<Header>{headerText}</Header>}>
      <div css={mainContainer}>
        <div css={profileContainer}>
          <Profile data={userData} />
        </div>
        <div css={titleContainer}>
          <TitleText>{currentColor?.name}</TitleText>
        </div>
        <div css={colorBoxContainer}>
          {colors?.map((color: string) => (
            <ColorBox key={color} color={color} />
          ))}
        </div>

        {/* <div css={tagContainer}>
          {colorData?.moods?.map((mood: any) => (
            <Tag key={mood.name}>{mood.name}</Tag>
          ))}
        </div> */}
        <div css={tagContainer}>
          {(colorData?.moods || []).map((mood: any, index: number) => (
            <Tag key={index}>{mood ? mood.name : "#청순한"}</Tag>
          ))}
        </div>
        {isEdit ? (
          <div
            css={css`
              ${buttonContainer}
              display: flex;
              flex-direction: row;
              gap: 15px;
              margin-bottom: 20%;
            `}
          >
            <Button onClick={handleCancel}>취소</Button>
            <Button variant="colored" onClick={handleSubmit}>
              확인
            </Button>
          </div>
        ) : (
          <div css={buttonContainer}>
            <Button variant="colored" onClick={onOpen}>
              퍼스널컬러 변경하기
            </Button>
            <button css={logoutButton} onClick={handleLogout}>
              로그아웃
            </button>
          </div>
        )}
      </div>
      {isShown && (
        <BottomSheet
          isOpen={isShown}
          close={onClose}
          handleClick={handleColorSelection}
        />
      )}
    </DefaultLayout>
  );
};

const mainContainer = css`
  width: 100%;
  height: 100%;
  padding: 0 5%;
  position: relative;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const profileContainer = css`
  margin-top: 3%;
`;

const titleContainer = css`
  margin-top: 7%;
`;

const colorBoxContainer = css`
  display: flex;
  justify-content: space-between;
  margin-top: 4%;
  height: 40%;
`;

const tagContainer = css`
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-top: 10%;
  @media (max-height: 800px) {
    margin-top: 4%;
  }
`;

const buttonContainer = css`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 17px;

  width: 100%;
  margin-top: auto;
  margin-bottom: 10%;
  /* 아이폰 SE */
  @media (max-height: 800px) {
    gap: 8px;
    margin-bottom: 5%;
  }
`;

const logoutButton = css`
  width: 100%;
  color: #8e9294;
  font-size: 12px;
  font-family: "Pretendard";
  width: fit-content;
  border-bottom: 1px solid #8e9294;
`;

export default MypageView;
