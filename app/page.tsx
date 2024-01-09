import { HeroSection } from "./components/pages/home/hero-section";
import { HigliightedProjects } from "./components/pages/home/higlighted-projects";
import { Knowtechs } from "./components/pages/home/know-techs";
import { WorkExperience } from "./components/pages/home/work-experience";
import { HomePageData } from "./types/page-info";
import { fetchHygraphQuery } from "./utils/fetch-hygraph-query";

const getPageData = async (): Promise<HomePageData> => {
  const query = `
  query MyQuery {
    page(where: {slug: "home"}) {
      introduction {
        raw
      }
      technologies {
        name
      }
      profilePicture {
        url
      }
      socials {
        url
        iconSvg
      }
      knowTechs {
        name
        startDate
        iconSvg
      }
    }
  }
  
  `;

  return fetchHygraphQuery(query);
};

export default async function Home() {
  const { page: pageData } = await getPageData();

  

  return (
    <>
      <HeroSection homeInfo={pageData}/>
      <Knowtechs />
      <HigliightedProjects />
      <WorkExperience />
    </>
  );
}
