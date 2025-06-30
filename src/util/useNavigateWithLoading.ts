import { useState } from "react";
import { useRouter } from "next/navigation"; 

export const useNavigateWithLoading = () => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const navigateWithLoading = (path: string) => {
    setLoading(true);
    router.push(path); 
  };

  return { loading, navigateWithLoading };
};
