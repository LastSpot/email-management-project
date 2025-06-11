import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Name | Dashboard",
  description: "Dashboard",
};

export default function DashboardPage() {
  return (
    <div className="flex flex-col gap-12 text-center items-center justify-center">
      <div>Dashboard</div>
    </div>
  );
}
