import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "zapform | authentication",
  description:
    "zapform is a minimal drag and drop form builder, helps you to build form in minutes.",
};

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className="">{children}</div>;
}
