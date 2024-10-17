type ArtistEdit = {
    step?: number,
    email?: string,
    token?: string,
    password?: string;
    new_password?: string;
    phone_number?:string
}

type Artist = {
    id: number;
    profile_pic: string | null;
    artist_name: string;
    artist_type: string;
    artist_description: string;
    perform_languages: string; 
    perform_genere: string;    
    prefered_events: string;   
    overall_rating: number;
    created_at: string;
    updated_at: string;
    deleted_at: string | null;
    locations: string | null;
    customer_services: string | null;
    artist_post_documents: unknown[]; 
    artist_posts: { id: number; post_image: string | null; post_description: string; post_created_at: string; post_updated_at: string; post_deleted_at: string | null }[]; 
    artist_recognitions: { id: number; recognition_name: string; recognition_image: string | null }[];    
    reviews_count: number;
  }
