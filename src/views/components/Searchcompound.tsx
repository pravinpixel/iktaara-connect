import { Grid } from '@mui/material';
import React from 'react'
import ImageComponent from './ImageComponent';

const Searchcompound = () => {
    const search = [
      {
        id: 1,
        seaech_image: "/assets/image/music1.webp",
        search_text: " Artists/Instrumentalist/Music Experts",
      },
      {
        id: 2,
        seaech_image: "/assets/image/music2.webp",
        search_text: " Recording Studios/JAM Rooms",
      },
      {
        id: 3,
        seaech_image: "/assets/image/music3.webp",
        search_text: "Music Instrument Repairs",
      },
      {
        id: 4,
        seaech_image: "/assets/image/music4.webp",
        search_text: " Music Shows",
      },
    ];
  return (
    <section>
      <Grid container spacing={1}>
        {search.map((row) => (
          <>
            <Grid item xs={6} xl={4} key={row?.id}>
              <div>
                <ImageComponent
                  src={row.seaech_image}
                  width={170}
                  height={100}
                  alt={"arrowdown"}
                  className="rounded-xl w-full"
                />
                <div className="text-f12 font-semibold text-ik_bluegreydarken3 leading-[15px]">
                  <p className="line-clamp-1">{row.search_text}</p>
                </div>
              </div>
            </Grid>
          </>
        ))}
      </Grid>
    </section>
  );
}

export default Searchcompound