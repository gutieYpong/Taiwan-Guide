import styled from "styled-components";

import { fontLayout } from "../../../../constants/api";
import { NoResultSVG, WebFailureSVG } from "../../../../assets";

const Container = styled.div`
  width: 100%;
  height: auto;
  max-height: 70.3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 4rem;
  padding-top: 12.8rem;

  background-color: lightblue;

  .error-response--title {
    letter-spacing: 0.08em;
    ${ ({ theme }) => fontLayout('Noto Sans TC', 'normal', '500', '2.8rem', '4.1rem', theme.palette.neutral.main) }
  }
  .error-response--desc {
    letter-spacing: 0.1em;
    ${ ({ theme }) => fontLayout('Noto Sans TC', 'normal', 'normal', '1.6rem', '2.3rem', theme.palette.neutral.main) }
  }
`;

export const NoResultFound = () => {
  return (
    <Container>
      <NoResultSVG />
      <span className="error-response--title">找不到相關結果</span>
      <span className="error-response--desc">請檢查輸入字詞有無錯誤，或嘗試其它搜尋條件</span>
    </Container>
  )
}

export const WebsiteFailure = () => {
  return (
    <Container>
      <WebFailureSVG />
      <span className="error-response--title">資料庫無法正常運作</span>
      <span className="error-response--desc">請稍後再試，或嘗試聯繫網站維護人員</span>
    </Container>
  )
}