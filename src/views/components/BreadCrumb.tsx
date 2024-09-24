import * as React from "react";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "next/link";

// function handleClick(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
//   event.preventDefault();
//   console.info("You clicked a breadcrumb.");
// }

export default function Breadcrumb() {
  return (
    <div role="presentation">
      <Breadcrumbs aria-label="breadcrumb">
        <Link
          // underline="hover"
          // color="inherit"
          href="/"
          className="font-sora text-f14 font-normal leading-7 text-ik_bluegreydarken3"
        >
          Home
        </Link>
        <Link
          // underline="hover"
          // color="inherit"
          href="/material-ui/getting-started/installation/"
          className="font-sora text-f14 font-normal leading-7 text-ik_bluegreydarken3"
        >
          Music Repairs
        </Link>
        <Link
          // underline="hover"
          // color="text.primary"
          href="/material-ui/react-breadcrumbs/"
          aria-current="page"
          className="font-sora text-f14 font-normal leading-7"
        >
          All Listings
        </Link>
      </Breadcrumbs>
    </div>
  );
}
