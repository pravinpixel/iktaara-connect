import { Grid, } from '@mui/material';
import React from 'react'

const ListingAboutComponents = () => {
    const pivkup_data = [
      {
        id: 1,
        title: " FREE PICKUP",
        text: "Instrument pickup across Chennai city",
      },
      {
        id: 2,
        title: "SELL & UPGRADE",
        text: "We offer great deals on the used equipment to buy new.",
      },
      {
        id: 3,
        title: "BRAND DEALS",
        text: "Top branded equipments @ best price.",
      },
    ];
  return (
    <section>
      <Grid container spacing={2}>
        {pivkup_data?.map((row) => (
          <>
            <Grid item xs={4} key={row.id}>
              <div className="bg-ik_bluegreylighten6 py-7 px-5 rounded-[12px] h-full">
                <div className="text-center">
                  <h6 className="text-f20 font-bold font-linear bg-clip-text mb-2 capitalize">
                    {row.title}
                  </h6>
                  <span className="text-f16 font-normal text-ik_bluegreydarken3">
                    {" "}
                    {row.text}
                  </span>
                </div>
              </div>
            </Grid>
          </>
        ))}
      </Grid>
      <div className="py-5 relative inline-block after:content-[''] after:absolute after:left-0 after:bottom-[0px] after:w-[104px] after:h-[1px] after:bg-ik_bluegreylighten4">
        <div className="text-f26 font-bold mb-2">
          <h6 className="text-ik_bluegreydarken3">
            About <span className="text-ik_pink">Studio</span>
          </h6>
        </div>
        <div className="text-f18 font-normal text-ik_bluegreydarken2">
          <p>
            Musee Musicals is an initiative by the founders of the oldest
            Musical organization in India to connect Music enthusiasts with the
            world of Music on a single platform. The platform caters to
            aspirants who want to study music by helping them find the best and
            the closest teaching facility with the highest quality standards
            (Learn).
          </p>
        </div>
      </div>
      <div className="py-5 relative inline-block after:content-[''] after:absolute after:left-0 after:bottom-[0px] after:w-[104px] after:h-[1px] after:bg-ik_bluegreylighten4">
        <div className="text-f26 font-bold mb-2">
          <h6 className="text-ik_bluegreydarken3">
            Services <span className="text-ik_pink">Offered</span>
          </h6>
        </div>
        <div className="text-f18 font-normal text-ik_bluegreydarken2 ">
          <div className="paragraph-Ctr">
            <ul className="text-f18 font-normal text-ik_bluegreydarken3">
              <li>Brand new instrument sales</li>
              <li>
                Servicing/polishing/upgrade your existing musical instruments
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="py-5 relative inline-block after:content-[''] after:absolute after:left-0 after:bottom-[0px] after:w-[104px] after:h-[1px] after:bg-ik_bluegreylighten4">
        <div className="text-f26 font-bold mb-2">
          <h6 className="text-ik_bluegreydarken3">
            Available <span className="text-ik_pink"> Facilities</span>
          </h6>
        </div>
        <Grid container>
          <Grid item xs={6}>
            <div className="text-f18 font-normal text-ik_bluegreydarken2 ">
              <div className="paragraph-Ctr">
                <ul className="text-f18 font-normal text-ik_bluegreydarken3">
                  <li>200 seater capacity</li>
                  <li>Sound proof roomsts</li>
                  <li>Separate room for practise sessions</li>
                  <li>Yamaha audio equipments</li>
                  <li>Studio keyboards, Mics available</li>
                </ul>
              </div>
            </div>
          </Grid>
          <Grid item xs={6}>
            <div className="text-f18 font-normal text-ik_bluegreydarken2 ">
              <div className="paragraph-Ctr">
                <ul className="text-f18 font-normal text-ik_bluegreydarken3">
                  <li>On-demand parking facility</li>
                  <li>Own equipments allowed to use</li>
                  <li>Separate room for practise sessions</li>
                  <li>Expert audio engineers available on-demand</li>
                  <li>Pay per use equipments available</li>
                </ul>
              </div>
            </div>
          </Grid>
        </Grid>
      </div>
      <div className="py-5">
        <div className="text-f26 font-bold mb-2">
          <h6 className="text-ik_bluegreydarken3">
            Store <span className="text-ik_pink"> Hours</span>
          </h6>
        </div>
        <div className="text-f18 font-normal text-ik_bluegreydarken2">
          <span>Open 24/7</span>
        </div>
      </div>
    </section>
  );
};

export default ListingAboutComponents;