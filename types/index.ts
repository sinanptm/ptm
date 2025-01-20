export interface BannerImageType {
  name: string;
  alt: string;
}


export interface Service {
  name: string
  description: string
  image: string
  color: string
  title:string
  details:string[]
}

export interface Center {
  name: string
  location: string
  description: string
  image: string
  mapUrl: string
  embedUrl:string
  instructor:string
}