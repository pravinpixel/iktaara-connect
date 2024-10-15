import Link from "next/link";
import React from "react";

export default function ViewAllComponent({ slug = "" }: { slug: string }) {
  return (
    <Link href={`/business/${slug}`} className="pt-[10px]">
      <span className="text-f18 text-ik_pink font-normal">View All</span>
    </Link>
  );
}
