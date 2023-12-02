export interface ExperiencesPage {
  header: string;
  experiencesIcon: {
    url: string;
    title: string;
    width: number;
    height: number;
  };
  experiencesTitle: any;
  regularExperiencesColumnOneCollection: ServiceDetails;
  regularExperiencesColumnTwoCollection: ServiceDetails;
  regularExperiencesColumnThreeCollection: ServiceDetails;
  braidedExperiencesColumnOneCollection: ServiceDetails;
  braidedExperiencesColumnTwoCollection: ServiceDetails;
  braidedExperiencesColumnThreeCollection: ServiceDetails;
  heroImage: {
    title: string;
    url: string;
  };
  mission: string;
  missionImage: {
    title: string;
    url: string;
  };
  upperImageGalleryCollection: {
    items: {
      title: string;
      url: string;
    }[];
  };
  lowerImageGalleryCollection: {
    items: {
      title: string;
      url: string;
    }[];
  };
}

interface ServiceDetails {
  items: {
    serviceCategory: string;
    servicesCollection: {
      items: {
        service: string;
        priceOfTheService: string;
      }[];
    };
  }[];
}
