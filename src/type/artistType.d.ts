type ArtistEdit = {
    step?: number,
    email?: string,
    token?: string,
    password?: string;
    new_password?: string;
    phone_number?:string
}

type ArtistRecognition = {
  artist_id: number;
  date: string;  // You can also use Date type if you prefer to handle dates as Date objects
  description: string;
  id: number;
  title: string;
};

type ArtistLanguages = {
  id: number;
  name: string;  // You can also use Date type if you prefer to handle dates as Date objects
  description: string;
  status: string;
};

type ArtistGenre = {
  id: number;
  name: string;  // You can also use Date type if you prefer to handle dates as Date objects
  description: string;
  status: string;
};

type ArtistEvents = {
  id: number;
  name: string;  // You can also use Date type if you prefer to handle dates as Date objects
  description: string;
  status: string;
};
type ArtistType = {
    id?: number;
    profile_pic?: string | null;
    artist_name?: string;
    email?: string;
    mobile?: string;
    address_line_1?: string | null;
    address_line_2?: string | null;
    artist_description?: string;
    artist_post_documents?: Array<object>;
    artist_posts?: Array<object>;
   artist_recogitions?: Array<ArtistRecognition>; 
    artist_type?: string;
    created_at?: string;
    customer_services?: {
        id: number;
        artist_id: number;
        live_online: number;
        live_online_description: string;
        home_pickup: number;
    };
    deleted_at?: string | null;
    is_top_business?: number;
    locations?: string | null;
    overall_rating?: number;
    parent_slug?: string;
    perform_genere?: string[];
    perform_languages?: string[];
    performed_events?: Array<ArtistEvents>;
    performed_genere?: Array<ArtistGenre>;
    performed_languages?: Array<ArtistLanguages>;
    prefered_events?: string[];
    profile_percentage_completion?: number | null;
    publish_status?: string;
    reject_reason?: string | null;
    reviews_count?: number;
    slug?: string;
    status?: string;
    updated_at?: string;
    view_count?: number;
};
