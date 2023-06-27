import { useRouter } from "next/router";

type RouteType = "push" | "replace";

function useRouting(type: RouteType) {
  const router = useRouter();

  if (type === "push") return router.push;
  if (type === "replace") return router.replace;
  return router.push;
}

export default useRouting;
