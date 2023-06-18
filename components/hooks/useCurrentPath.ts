import { usePathname } from "next/navigation";

const useCurrentPath = () => {
  const router = usePathname();
  const currentPath = router.split("/");
  return currentPath;
};

export default useCurrentPath;
