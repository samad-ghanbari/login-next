import type { Metadata } from "next";
import "@/public/css/globals.css";

export const metadata: Metadata = {
	title: "Login Template Application",
	description: "Application",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" dir="rtl">
			<body className="bg-sky-100 w-auto h-auto text-blue-950">
				{children}
			</body>
		</html>
	);
}
