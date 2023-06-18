export interface ExperiencesPage {
  header: string;
  experiencesIcon: {
    url: string;
    title: string;
    width: number;
    height: number;
  };
  experiencesTitle: string;
  columnOneCollection: ServiceDetails;
  columnTwoCollection: ServiceDetails;
  columnThreeCollection: ServiceDetails;
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
        priceOfTheService: number;
      }[];
    };
  }[];
}