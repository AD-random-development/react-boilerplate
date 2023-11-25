import * as React from "react";
import { Skeleton } from "@mui/material";

export const TableSkeleton = ({ lines }) => {
  <React.Fragment>
    <Skeleton variant="rectangular" height={60} animation="wave">
      {Array.from({ length: lines || 12 }).map(() => (
        <Skeleton variant="text" sx={{ fontSize: "1rem" }}>
          {" "}
        </Skeleton>
      ))}
    </Skeleton>
  </React.Fragment>;
};

export const BoxSkeleton = ({ height, width }) => (
  <React.Fragment>
    <Skeleton
      variant="rectangular"
      animation="wave"
      height={height}
      width={width}
    ></Skeleton>
  </React.Fragment>
);
