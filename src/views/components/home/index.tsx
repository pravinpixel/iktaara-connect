import React from "react";
import BannerSection from "./BannerSection";
import EventsSellers from "./EventsSellers";

import CategorySection from "./CategorySection";
import GroSection from "./GroSection";
import MusicalSection from "./MusicalSection";
import MusicTechnicians from "./MusicTechnicians";
import RecordingSection from "./RecordingSection";
import FrequentlyAskedSection from "./FrequentlyAsked";


const HomePageComponent = () => {
  const music = [
    {
      id: 1,
      image: "/assets/image/music1.webp",
      music_title: "Artists",
    },
    {
      id: 2,
      image: "/assets/image/music2.webp",
      music_title: "Recording /JAM Studios",
      music_text: "Find venues for every musical occasions",
    },
    {
      id: 3,
      image: "/assets/image/music3.webp",
      music_title: "Music Instrument Sales & Service",
    },
    {
      id: 4,
      image: "/assets/image/music4.webp",
      music_title: "Events",
    },
  ];

  const Events = [
    {
      id: 1,
      image: "//assets/image/events-img.webp",
    },
    {
      id: 2,
      image: "//assets/image/events-img.webp",
    },
    {
      id: 3,
      image: "//assets/image/events-img.webp",
    },
  ];

  const Category = {
    pianist: [
      {
        id: 1,
        category_image: "//assets/image/ramaniya.webp",
        category_name: "Ramaniya",
        category_reviews: "4.5 (22 Reviews)",
        category_text: "Classical, Western, Hindustani",
      },
      {
        id: 2,
        category_image: "//assets/image/kirankumar.webp",
        category_name: "Kirankumar",
        category_reviews: "4.5 (22 Reviews)",
        category_text: "Classical, Western, Hindustani",
      },
      {
        id: 3,
        category_image: "//assets/image/jones.webp",
        category_name: "Chitra Jones",
        category_reviews: "4.5 (22 Reviews)",
        category_text: "Classical, Western, Hindustani",
      },
      {
        id: 4,
        category_image: "//assets/image/john.webp",
        category_name: "Abraham John",
        category_reviews: "4.5 (22 Reviews)",
        category_text: "Classical, Western, Hindustani",
      },
      {
        id: 5,
        category_image: "//assets/image/prakash.webp",
        category_name: "Prakash Thirupuzhal",
        category_reviews: "4.5 (22 Reviews)",
        category_text: "Classical, Western, Hindustani",
      },

      {
        id: 6,
        category_image: "//assets/image/prabhakar.webp",
        category_name: "Ram Prabhakar",
        category_reviews: "4.5 (22 Reviews)",
        category_text: "Classical, Western, Hindustani",
      },
      {
        id: 7,
        category_image: "//assets/image/madhavi.webp",
        category_name: "Madhavi Nair",
        category_reviews: "4.5 (22 Reviews)",
        category_text: "Classical, Western, Hindustani",
      },

      {
        id: 8,
        category_image: "//assets/image/vamshika.webp",
        category_name: "Vamshika",
        category_reviews: "4.5 (22 Reviews)",
        category_text: "Classical, Western, Hindustani",
      },
      {
        id: 9,
        category_image: "//assets/image/madhavi.webp",
        category_name: "Madhavi Nair",
        category_reviews: "4.5 (22 Reviews)",
        category_text: "Classical, Western, Hindustani",
      },

      {
        id: 10,
        category_image: "//assets/image/vamshika.webp",
        category_name: "Vamshika",
        category_reviews: "4.5 (22 Reviews)",
        category_text: "Classical, Western, Hindustani",
      },
    ],
    dancer: [
      {
        id: 1,
        category_image: "//assets/image/john.webp",
        category_name: "Abraham John",
        category_reviews: "4.5 (22 Reviews)",
        category_text: "Classical, Western, Hindustani",
      },
      {
        id: 2,
        category_image: "//assets/image/prakash.webp",
        category_name: "Prakash Thirupuzhal",
        category_reviews: "4.5 (22 Reviews)",
        category_text: "Classical, Western, Hindustani",
      },
      {
        id: 3,
        category_image: "//assets/image/ramaniya.webp",
        category_name: "Ramaniya",
        category_reviews: "4.5 (22 Reviews)",
        category_text: "Classical, Western, Hindustani",
      },
      {
        id: 4,
        category_image: "//assets/image/kirankumar.webp",
        category_name: "Kirankumar",
        category_reviews: "4.5 (22 Reviews)",
        category_text: "Classical, Western, Hindustani",
      },
      {
        id: 5,
        category_image: "//assets/image/madhavi.webp",
        category_name: "Madhavi Nair",
        category_reviews: "4.5 (22 Reviews)",
        category_text: "Classical, Western, Hindustani",
      },

      {
        id: 6,
        category_image: "//assets/image/vamshika.webp",
        category_name: "Vamshika",
        category_reviews: "4.5 (22 Reviews)",
        category_text: "Classical, Western, Hindustani",
      },
      {
        id: 7,
        category_image: "//assets/image/prabhakar.webp",
        category_name: "Ram Prabhakar",
        category_reviews: "4.5 (22 Reviews)",
        category_text: "Classical, Western, Hindustani",
      },
      {
        id: 8,
        category_image: "//assets/image/madhavi.webp",
        category_name: "Madhavi Nair",
        category_reviews: "4.5 (22 Reviews)",
        category_text: "Classical, Western, Hindustani",
      },
    ],
    sound_engineer: [
      {
        id: 1,
        category_image: "//assets/image/ramaniya.webp",
        category_name: "Ramaniya",
        category_reviews: "4.5 (22 Reviews)",
        category_text: "Classical, Western, Hindustani",
      },
      {
        id: 2,
        category_image: "//assets/image/kirankumar.webp",
        category_name: "Kirankumar",
        category_reviews: "4.5 (22 Reviews)",
        category_text: "Classical, Western, Hindustani",
      },
      {
        id: 3,
        category_image: "//assets/image/jones.webp",
        category_name: "Chitra Jones",
        category_reviews: "4.5 (22 Reviews)",
        category_text: "Classical, Western, Hindustani",
      },
      {
        id: 4,
        category_image: "//assets/image/john.webp",
        category_name: "Abraham John",
        category_reviews: "4.5 (22 Reviews)",
        category_text: "Classical, Western, Hindustani",
      },
      {
        id: 5,
        category_image: "//assets/image/prakash.webp",
        category_name: "Prakash Thirupuzhal",
        category_reviews: "4.5 (22 Reviews)",
        category_text: "Classical, Western, Hindustani",
      },

      {
        id: 6,
        category_image: "//assets/image/prabhakar.webp",
        category_name: "Ram Prabhakar",
        category_reviews: "4.5 (22 Reviews)",
        category_text: "Classical, Western, Hindustani",
      },
    ],
    theatre_artists: [
      {
        id: 1,
        category_image: "//assets/image/john.webp",
        category_name: "Abraham John",
        category_reviews: "4.5 (22 Reviews)",
        category_text: "Classical, Western, Hindustani",
      },
      {
        id: 2,
        category_image: "//assets/image/prakash.webp",
        category_name: "Prakash Thirupuzhal",
        category_reviews: "4.5 (22 Reviews)",
        category_text: "Classical, Western, Hindustani",
      },
      {
        id: 3,
        category_image: "//assets/image/ramaniya.webp",
        category_name: "Ramaniya",
        category_reviews: "4.5 (22 Reviews)",
        category_text: "Classical, Western, Hindustani",
      },
      {
        id: 4,
        category_image: "//assets/image/kirankumar.webp",
        category_name: "Kirankumar",
        category_reviews: "4.5 (22 Reviews)",
        category_text: "Classical, Western, Hindustani",
      },
      {
        id: 5,
        category_image: "//assets/image/madhavi.webp",
        category_name: "Madhavi Nair",
        category_reviews: "4.5 (22 Reviews)",
        category_text: "Classical, Western, Hindustani",
      },

      {
        id: 6,
        category_image: "//assets/image/vamshika.webp",
        category_name: "Vamshika",
        category_reviews: "4.5 (22 Reviews)",
        category_text: "Classical, Western, Hindustani",
      },
      {
        id: 7,
        category_image: "//assets/image/prabhakar.webp",
        category_name: "Ram Prabhakar",
        category_reviews: "4.5 (22 Reviews)",
        category_text: "Classical, Western, Hindustani",
      },
      {
        id: 8,
        category_image: "//assets/image/madhavi.webp",
        category_name: "Madhavi Nair",
        category_reviews: "4.5 (22 Reviews)",
        category_text: "Classical, Western, Hindustani",
      },
    ],
    party_dJ: [
      {
        id: 1,
        category_image: "//assets/image/ramaniya.webp",
        category_name: "Ramaniya",
        category_reviews: "4.5 (22 Reviews)",
        category_text: "Classical, Western, Hindustani",
      },
      {
        id: 2,
        category_image: "//assets/image/kirankumar.webp",
        category_name: "Kirankumar",
        category_reviews: "4.5 (22 Reviews)",
        category_text: "Classical, Western, Hindustani",
      },
      {
        id: 3,
        category_image: "//assets/image/jones.webp",
        category_name: "Chitra Jones",
        category_reviews: "4.5 (22 Reviews)",
        category_text: "Classical, Western, Hindustani",
      },
      {
        id: 4,
        category_image: "//assets/image/john.webp",
        category_name: "Abraham John",
        category_reviews: "4.5 (22 Reviews)",
        category_text: "Classical, Western, Hindustani",
      },
      {
        id: 5,
        category_image: "//assets/image/prakash.webp",
        category_name: "Prakash Thirupuzhal",
        category_reviews: "4.5 (22 Reviews)",
        category_text: "Classical, Western, Hindustani",
      },

      {
        id: 6,
        category_image: "//assets/image/prabhakar.webp",
        category_name: "Ram Prabhakar",
        category_reviews: "4.5 (22 Reviews)",
        category_text: "Classical, Western, Hindustani",
      },
      {
        id: 7,
        category_image: "//assets/image/madhavi.webp",
        category_name: "Madhavi Nair",
        category_reviews: "4.5 (22 Reviews)",
        category_text: "Classical, Western, Hindustani",
      },

      {
        id: 8,
        category_image: "//assets/image/vamshika.webp",
        category_name: "Vamshika",
        category_reviews: "4.5 (22 Reviews)",
        category_text: "Classical, Western, Hindustani",
      },
      {
        id: 9,
        category_image: "//assets/image/madhavi.webp",
        category_name: "Madhavi Nair",
        category_reviews: "4.5 (22 Reviews)",
        category_text: "Classical, Western, Hindustani",
      },

      {
        id: 10,
        category_image: "//assets/image/vamshika.webp",
        category_name: "Vamshika",
        category_reviews: "4.5 (22 Reviews)",
        category_text: "Classical, Western, Hindustani",
      },
    ],
    standup_comedian: [
      {
        id: 1,
        category_image: "//assets/image/ramaniya.webp",
        category_name: "Ramaniya",
        category_reviews: "4.5 (22 Reviews)",
        category_text: "Classical, Western, Hindustani",
      },
      {
        id: 2,
        category_image: "//assets/image/kirankumar.webp",
        category_name: "Kirankumar",
        category_reviews: "4.5 (22 Reviews)",
        category_text: "Classical, Western, Hindustani",
      },
      {
        id: 3,
        category_image: "//assets/image/jones.webp",
        category_name: "Chitra Jones",
        category_reviews: "4.5 (22 Reviews)",
        category_text: "Classical, Western, Hindustani",
      },
      {
        id: 4,
        category_image: "//assets/image/john.webp",
        category_name: "Abraham John",
        category_reviews: "4.5 (22 Reviews)",
        category_text: "Classical, Western, Hindustani",
      },
      {
        id: 5,
        category_image: "//assets/image/prakash.webp",
        category_name: "Prakash Thirupuzhal",
        category_reviews: "4.5 (22 Reviews)",
        category_text: "Classical, Western, Hindustani",
      },

      {
        id: 6,
        category_image: "//assets/image/prabhakar.webp",
        category_name: "Ram Prabhakar",
        category_reviews: "4.5 (22 Reviews)",
        category_text: "Classical, Western, Hindustani",
      },
    ],
  };

  const musictechnician_data = [
    {
      id: 1,
      music_image: "//assets/image/music-arts.webp",
      music_logo: "//assets/image/music-logo1.png",
      music_reviews: "4.5 (22 Reviews)",
      music_title: "MUSIC & ARTS",
      music_location: "Adyar",
      music_text: "Specialist in Piano, Violin",
    },
    {
      id: 2,
      music_image: "//assets/image/schmitt.webp",
      music_logo: "//assets/image/music-logo2.png",
      music_reviews: "4.5 (22 Reviews)",
      music_title: "MUSIC & ARTS",
      music_location: "Adyar",
      music_text: "Specialist in Piano, Violin",
    },
    {
      id: 3,
      music_image: "//assets/image/kzone.webp",
      music_logo: "//assets/image/music-logo3.png",
      music_reviews: "4.5 (22 Reviews)",
      music_title: "MUSIC & ARTS",
      music_location: "Adyar",
      music_text: "Specialist in Piano, Violin",
    },
    {
      id: 4,
      music_image: "//assets/image/music-doctor.webp",
      music_logo: "//assets/image/music-logo4.png",
      music_reviews: "4.5 (22 Reviews)",
      music_title: "MUSIC & ARTS",
      music_location: "Adyar",
      music_text: "Specialist in Piano, Violin",
    },
    {
      id: 5,
      music_image: "//assets/image/music-arts.webp",
      music_logo: "//assets/image/music-logo1.png",
      music_reviews: "4.5 (22 Reviews)",
      music_title: "MUSIC & ARTS",
      music_location: "Adyar",
      music_text: "Specialist in Piano, Violin",
    },
  ];

  const jam_studios_data = [
    {
      id: 1,
      music_image: "//assets/image/prasad.webp",
      music_logo: "//assets/image/music-logo1.png",
      music_reviews: "4.5 (22 Reviews)",
      music_title: "Prasad Studios Corp",
      music_location: "Virugambakkam",
      music_text: "Influencer Interviews / Interviews",
    },
    {
      id: 2,
      music_image: "//assets/image/epic.webp",
      music_logo: "//assets/image/music-logo2.png",
      music_reviews: "4.5 (22 Reviews)",
      music_title: "Epic Recording",
      music_location: "Saligramam",
      music_text: "Music Recording / Interviews / Product Photos",
    },
    {
      id: 3,
      music_image: "//assets/image/sabari.webp",
      music_logo: "//assets/image/music-logo3.png",
      music_reviews: "4.5 (22 Reviews)",
      music_title: "Sabari Music Station",
      music_location: "Kodambakkam",
      music_text: "Influencer Interviews / Music Recording / Interviews",
    },
    {
      id: 4,
      music_image: "//assets/image/bharath.webp",
      music_logo: "//assets/image/music-logo4.png",
      music_reviews: "4.5 (22 Reviews)",
      music_title: "Bharath Studios",
      music_location: "Nungambakkam",
      music_text: "Sound Engineering / Sound Mixing / Recording",
    },
    {
      id: 5,
      music_image: "//assets/image/music-arts.webp",
      music_logo: "//assets/image/music-logo1.png",
      music_reviews: "4.5 (22 Reviews)",
      music_title: "MUSIC & ARTS",
      music_location: "Adyar",
      music_text: "Specialist in Piano, Violin",
    },
  ];

  const faq = [
    {
      id: 1,
      question: "How do I choose the right pianica online?",
      answer:
        "To select the perfect pianica online, consider your skill level, budget, and desired features. Look for reputable brands, read customer reviews, and choose a model that aligns with your musical preferences.",
    },
    {
      id: 2,
      question: 'What are the advantages of shopping for a "Pianica Online"?',
      answer:
        "To select the perfect pianica online, consider your skill level, budget, and desired features. Look for reputable brands, read customer reviews, and choose a model that aligns with your musical preferences.",
    },
    {
      id: 3,
      question: "What is the typical price of a Pianica in India?",
      answer:
        "To select the perfect pianica online, consider your skill level, budget, and desired features. Look for reputable brands, read customer reviews, and choose a model that aligns with your musical preferences.",
    },
  ];

  return (
    <section>
      <BannerSection />
      <MusicalSection musicsection={music} />
      <EventsSellers Eventssections={Events} bgChange={true} />
      <CategorySection categoryData={Category} />
      <MusicTechnicians
        musictechniciansection={musictechnician_data}
        className={"flex pt-5 pb-5 bg-ik_white"}
        title={"Music Instrument Technicians "}
      />
      <MusicTechnicians
        musictechniciansection={jam_studios_data}
        className={"flex pt-7 pb-7"}
        title={"Recording / JAM Studios Nearby "}
      />
      <GroSection />
      <RecordingSection />
      <FrequentlyAskedSection
        faqsection={faq}
        className={"flex pt-5 pb-5 bg-ik_redvariant1"}
      />
    </section>
  );
};

export default HomePageComponent;
