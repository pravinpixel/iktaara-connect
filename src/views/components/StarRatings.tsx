import { StarSelectIcon, StarTypeIcon } from "@/utils/theme/svg";
import React from "react";

interface StarRatingsProps {
  count: number; 
}

export const StarRatings: React.FC<StarRatingsProps> = ({ count }) => {
  return (
    <div className="flex gap-1">
      {count >= 1 ? <StarSelectIcon /> : <StarTypeIcon />}
      {count >= 2 ? <StarSelectIcon /> : <StarTypeIcon />}
      {count >= 3 ? <StarSelectIcon /> : <StarTypeIcon />}
      {count >= 4 ? <StarSelectIcon /> : <StarTypeIcon />}
      {count >= 5 ? <StarSelectIcon /> : <StarTypeIcon />}
    </div>
  );
};
