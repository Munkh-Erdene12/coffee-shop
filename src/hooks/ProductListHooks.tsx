import React, { useEffect } from "react";

interface CustomHooksProps {
  data: { data: any[] };
}
function shuffleArray(array: number[]) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}
const CustomHooks: React.FC<CustomHooksProps> = ({ data }) => {
  const [product, setProduct] = React.useState<any[]>([]);

  React.useEffect(() => {
    if (data && data.data) {
      const shuffledProducts = [...data.data];
      shuffleArray(shuffledProducts);
      setProduct(shuffledProducts);
    }
  }, [data]);

  return product;
};
export default CustomHooks;
