import type { Metadata } from "next";
import "./../public/css/globals.css";
import Footer from "./../components/layout/footer";

export const metadata: Metadata = {
	title: "Login page",
	description: "Application Login page",
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
				<Footer />
			</body>
		</html>
	);
}
