import Image from "next/image";

export default function Home() {
	return (
		<div className="flex flex-wrap h-screen w-full">
			<div className="w-full md:w-1/2 lg:w-1/3  bg-gray-500">
				{" "}
				1
			</div>
			<div className="w-full md:w-1/2  lg:w-2/3 bg-gray-400">2</div>
		</div>
	);
}
