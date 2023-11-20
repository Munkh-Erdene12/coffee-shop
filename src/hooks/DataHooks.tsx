// DataHooks.tsx
"use client";
import React from "react";

interface DataHooksProps {
  data: {
    data?: DataHooks[]; // Make the data property optional
  };
}

interface DataHooks {
  id: string;
  name: string;
  price: string;
  discountedPrice: string;
  img: string;
  description: string;
  type: string;
  selectedStatus: string;
  barCode: string;
  createdAt: Date;
  url: string;
  category: object;
}

export default function DataHooks({ data }: DataHooksProps) {
  const [state, setState] = React.useState<DataHooks[]>([]);

  React.useEffect(() => {
    if (data && data.data) {
      setState(data.data);
    }
  }, [data]);

  return state;
}
