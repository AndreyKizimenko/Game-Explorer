import { Skeleton } from "@chakra-ui/react";

function generateSkeleton(count: number, height: string, width?: string) {
  const skeleton = Array.from({ length: count }, (_, index) => (
    <Skeleton key={index} h={height} w={width} />
  ));
  return skeleton;
}

export default generateSkeleton;
