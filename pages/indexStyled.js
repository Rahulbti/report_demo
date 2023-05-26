import styled from "styled-components";

export const Container = styled.div`
  max-width: 1920px;
  margin: 0 auto;
  padding: 40px;
`;

export const HeroBanner = styled.section`
  background: #f8f5f1;
  display: flex;
  gap: 36px;
  padding: 8px;
  margin-bottom: 24px;
  .banner-text {
    padding: 8px;
    h2 {
      font-family: "sansationbold";
      font-size: 56px;
      color: #262626;
      margin-bottom: 12px;
    }
    p {
      background-color: #f8d6a6;
      border-radius: 12px;
      padding: 8px;
      color: #4d4d4d;
      font-size: 24px;
      display: inline-block;
    }
  }
`;

export const SummarySection = styled.section`
  background: #f8f5f1;
  padding: 20px;
  margin-bottom: 24px;
  h4 {
    font-size: 34px;
    font-family: "open_sanssemibold";
    margin-bottom: 8px;
  }
  p {
    font-size: 18px;
    margin-top: 15px;
    line-height: 24px;
    :first-child {
      margin: 0;
    }
    span,
    a {
      color: #5f96ac;
      &.red-text {
        color: #ffca84;
      }
    }
  }
`;

export const LearnMore = styled.section`
  padding: 8px 0 20px;
  margin-bottom: 24px;
  > p {
    font-size: 18px;
    line-height: 25px;
    a {
      color: #5f96ac;
    }
  }
  .chart-section {
    display: flex;
    align-items: center;
    padding: 12px 0;
    justify-content: space-around;
  }
`;

export const MetabolitesSection = styled.section`
  h3 {
    font-size: 34px;
    line-height: 46px;
    padding: 16px 32px;
    font-family: "open_sanssemibold";
  }
`;
