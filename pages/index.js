import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";
import TableComponent from "../src/components/TableComponent";
import MetabolitesTable from "../src/components/MetabolitesTable";
import BannerImage from "../src/assets/Images/hero-banner.png";
import Dummy1 from "../src/assets/Images/gauge1.png";
import Dummy2 from "../src/assets/Images/gauge2.png";
import Dummy3 from "../src/assets/Images/gauge3.png";

export default function Home() {
  return (
    <Container>
      <HeroBanner>
        <Image
          src={BannerImage}
          width={353}
          height={212}
          alt="Picture of the author"
        />
        <div className="banner-text">
          <h2>Lomi’s Report</h2>
          <p>Beta report disclaimer</p>
        </div>
      </HeroBanner>
      <SummarySection>
        <h4>Summary</h4>
        <p>
          We have evaluated Lomi’s vitamin, mineral, and metabolite (compounds)
          profile and found that he is within the normal range for of the
          compounds.
        </p>
        <p>
          Lomi’s has the lowest values in <Link href="/">Adenosine</Link>,{" "}
          <Link href="/">Cytidine</Link> and <Link href="/">Orotic</Link> acid.
          He has the highest values in{" "}
          <Link className="red-text" href="/">
            Citric acid
          </Link>{" "}
          <Link className="red-text" href="/">
            Purine
          </Link>
          , and{" "}
          <Link className="red-text" href="/">
            Uridine
          </Link>
          . Together these compounds has been associated with{" "}
          <Link href="/">kidney disease</Link>,{" "}
          <Link href="/">immune system</Link>, and{" "}
          <Link href="/">joint disease</Link>. Lomi’ nutritional profile
          resembles that of a <Link href="/">young</Link> dog that has an{" "}
          <Link href="/"> active</Link> lifestyle being fed with{" "}
          <Link href="/">premium</Link> diet.
        </p>
      </SummarySection>
      <LearnMore>
        <p>
          Learn more about our methods <Link href="/">here</Link>.{" "}
        </p>
        <div className="chart-section">
          <Image
            src={Dummy1}
            width={247}
            height={219}
            alt="Picture of the author"
          />
          <Image
            src={Dummy2}
            width={247}
            height={219}
            alt="Picture of the author"
          />
          <Image
            src={Dummy3}
            width={247}
            height={219}
            alt="Picture of the author"
          />
        </div>
      </LearnMore>
      <MetabolitesSection>
        <h3>Metabolites</h3>
        <MetabolitesTable />
      </MetabolitesSection>
      <MetabolitesSection>
        <h3>Wellness</h3>
        <TableComponent />
      </MetabolitesSection>
      <SummarySection>
        <h4>Recommendations </h4>

        <p>
          Lomi’s has the lowest values in <Link href="/">Adenosine</Link>,{" "}
          <Link href="/">Cytidine</Link> and <Link href="/">Orotic</Link> acid.
          He has the highest values in{" "}
          <Link className="red-text" href="/">
            Citric acid
          </Link>{" "}
          <Link className="red-text" href="/">
            Purine
          </Link>
          , and{" "}
          <Link className="red-text" href="/">
            Uridine
          </Link>
          .
        </p>
      </SummarySection>
      <SummarySection className="m-0">
        <h4>Disclaimer </h4>
        <p>
          Please consult our disclaimer <Link href="/">here</Link>. and always
          speak to a veterinary professional prior to instituting any change.
          This recommendation is based on what would influence Lomi’s wellness,
          which is determined based on a weighted combination of his longevity,
          energy level, and cancer associations.
        </p>
        <p>
          Currently our database of <Link href="/">poodles</Link> are still
          limited, so this report will improve as we get more samples. In the
          mean that we are comparing Lomi to all other dogs. Please bear with us
          as we grow the value of the report and{" "}
          <Link href="/">let us know</Link> if there is any wish list of things
          you would like us to be able to predict for Lomi’s wellness.
        </p>
        <p>
          {" "}
          It is important to remember that no specific amount of a compound is
          good or bad but reflect the state of their body function and should
          always be interpreted in consultation with an experienced veterinary
          professional.
        </p>
        <p>
          Learn more about our considerations when interpreting the report{" "}
          <Link href="/">here</Link>.
        </p>
      </SummarySection>
    </Container>
  );
}

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
