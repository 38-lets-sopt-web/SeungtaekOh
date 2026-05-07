import { useEffect, useState } from "react";

import { getUser, getUsers } from "../../../shared/api/user";
import Button from "../../../shared/components/button/button";
import Card from "../../../shared/components/card/card";
import Header from "../../../shared/components/header/header";
import InfoCard from "../../../shared/components/infoCard/infoCard";
import Input from "../../../shared/components/input/input";
import { isEmpty } from "../../../shared/utils/validators";
import * as styles from "./userListPage.css";
import {
  getUserList,
  type UserDetail,
  type UserSummary,
} from "./userListPage.utils";

const UserListPage = () => {
  const [headerName, setHeaderName] = useState("");
  const [searchUserId, setSearchUserId] = useState("");
  const [searchResult, setSearchResult] = useState<UserDetail | null>(null);
  const [users, setUsers] = useState<UserSummary[]>([]);

  useEffect(() => {
    const fetchInitialData = async () => {
      const userId = localStorage.getItem("userId");

      if (userId) {
        const myInfoResponse = (await getUser(Number(userId))) as {
          data?: {
            name?: string;
          };
        };

        setHeaderName(myInfoResponse.data?.name ?? "");
      }

      const usersResponse = (await getUsers()) as {
        data?: unknown;
      };

      setUsers(getUserList(usersResponse.data));
    };

    fetchInitialData();
  }, []);

  const handleSearchUser = async () => {
    try {
      const response = (await getUser(Number(searchUserId))) as {
        data?: UserDetail;
      };

      setSearchResult(response.data ?? null);
    } catch {
      alert("회원 조회에 실패했습니다.");
      setSearchResult(null);
    }
  };

  const isSearchButtonDisabled = isEmpty(searchUserId);

  return (
    <div className={styles.page}>
      <Header name={headerName} />
      <main className={styles.content}>
        <section className={styles.searchSection}>
          <h1 className={styles.title}>회원 조회</h1>
          <Input
            label="회원 ID"
            value={searchUserId}
            inputMode="numeric"
            onChange={(e) => setSearchUserId(e.currentTarget.value)}
          />
          <Button
            text="검색"
            disabled={isSearchButtonDisabled}
            onClick={handleSearchUser}
          />

          {searchResult && (
            <section className={styles.resultSection}>
              <h2 className={styles.sectionTitle}>검색 결과</h2>
              <InfoCard
                loginId={searchResult.loginId}
                name={searchResult.name}
                email={searchResult.email}
                age={searchResult.age}
                part={searchResult.part}
              />
            </section>
          )}
        </section>

        <section className={styles.listSection}>
          <h2 className={styles.sectionTitle}>전체 멤버 리스트</h2>
          <div className={styles.cardGrid}>
            {users.map((user) => (
              <Card
                key={user.id}
                userId={user.id}
                name={user.name}
                part={user.part}
              />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default UserListPage;
