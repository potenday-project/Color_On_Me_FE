import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import client from "../api/client";

const useAuth = (requireAuth = true) => {
  const [verified, setVerified] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    if (!requireAuth) {
      setIsLoading(false);
      setVerified(true);
      return;
    }

    const fetchUser = async () => {
      try {
        const responseAttributes = await client.get("users");

        const { personalColorId } = responseAttributes;

        if (!personalColorId) {
          router.replace("/qrcode");
          return;
        }

        setVerified(true);
      } catch (error) {
        router.replace("/login");
      } finally {
        setIsLoading(false);
      }
    };

    fetchUser();
  }, [router, requireAuth]);

  return { isLoading, verified };
};

export default useAuth;
