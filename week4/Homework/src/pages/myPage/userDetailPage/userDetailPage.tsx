import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";

import { getUser } from "../../../shared/api/user";
import Header from "../../../shared/components/header/header";
import InfoCard from "../../../shared/components/infoCard/infoCard";
import type { UserDetail } from "../userListPage/userListPage.utils";
import * as styles from "./userDetailPage.css";

const UserDetailPage = () => {
  const navigate = useNavigate();
  const { userId } = useParams();
  const [headerName, setHeaderName] = useState("");
  const [userDetail, setUserDetail] = useState<UserDetail | null>(null);

  useEffect(() => {
    const fetchUserDetail = async () => {
      if (!userId) {
        return;
      }

      try {
        const myUserId = localStorage.getItem("userId");

        if (myUserId) {
          const myInfoResponse = (await getUser(Number(myUserId))) as {
            data?: {
              name?: string;
            };
          };

          setHeaderName(myInfoResponse.data?.name ?? "");
        }

        const response = (await getUser(Number(userId))) as {
          data?: UserDetail;
        };

        setUserDetail(response.data ?? null);
      } catch {
        alert("상세 정보 조회에 실패했습니다.");
        navigate("/mypage/users");
      }
    };

    fetchUserDetail();
  }, [navigate, userId]);

  return (
    <div className={styles.page}>
      <Header name={headerName} />
      <main className={styles.content}>
        <h1 className={styles.title}>상세 정보</h1>

        <div className={styles.detailSection}>
          <button
            className={styles.backButton}
            type="button"
            onClick={() => navigate("/mypage/users")}
          >
            ← 뒤로가기
          </button>

          {userDetail && (
            <div className={styles.cardWrapper}>
              <InfoCard
                loginId={userDetail.loginId}
                name={userDetail.name}
                email={userDetail.email}
                age={userDetail.age}
                part={userDetail.part}
                nameFirst
              />
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default UserDetailPage;
