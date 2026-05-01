import { useTranslation } from "react-i18next";
import { MainLayout } from "./ui/MainLayout";

export const UsagePolicy = () => {
  const { t } = useTranslation();

  return (
    <MainLayout>
      <h1 className="pt-20 text-center text-5xl">Coming soon</h1>
    </MainLayout>
  );
};
