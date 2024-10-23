type BusinessTypeForm = {
  id: number;
  type: string;
  logo: string;
  business_id: number;
  business_description: string;
  business_name: string;
  business_specialist: string;
  business_type: string;
  established_year: string | number;
  highlights: string;
  services: string;
  facilities: string;
  deleted_at: string | null;
  day_of_week: string;
  open_time: string;
  close_time: string;
  locations: string | null;
  City: string;
  address_line1: string;
  address_line2: string;
  pincode: number | string;
  live_online: boolean;
  live_online_description: string;
  home_pickup: boolean;
  home_pickup_description: string;
  distance_service: boolean;
  distance_service_description: string;
  cover_image: {
    file: string | null;
  };
  documents: {
    map(arg0: (doc: any) => any): unknown;
    file: string | null;
  };
};
