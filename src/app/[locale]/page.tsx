"use client";

import { useTranslations } from "next-intl";
import PageLayout from "components/PageLayout";

export default function IndexPage() {
  const t = useTranslations("IndexPage");

  return (
    <>
      <p>quyquy</p>
      <PageLayout title={t("title")}></PageLayout>
    </>
  );
}
