import Image from "next/image";
import bgImage from "@/public/image/login/bg.jpg";
import logo from "@/public/image/logo.png";
import LoginForm from "@/components/login/Form";
import Reserved from "@/components/login/Reserved";

export default function Home() {
	return (
		<div className="flex flex-wrap h-screen w-full bg-gray-400">
			<Image
				src={bgImage}
				className="bg-cover absolute blur-xl z-0 opacity-40"
				layout="fill"
				objectFit="cover"
				alt=""
			/>
			<div className="w-full md:w-1/2 lg:w-1/3 flex items-center justify-center  border-none z-10">
				<div className=" form-input text-white w-full m-4 p-4  sm:border-l-4 sm:border-l-sky-600 ">
					<h1 className="font-vazir text-white text-center text-2xl text-drop-shadow-2xl">
						ورود به سامانه
					</h1>
					<hr className="p-2 w-1/2 mx-auto" />
					<LoginForm FormAction="" />
					<Reserved classes="text-center text-gray-400 text-xs" />
				</div>
			</div>
			<div className="w-full md:w-1/2  lg:w-2/3 border-none flex flex-col items-center justify-center">
				<Image
					src={logo}
					alt="logo"
					width={192}
					height={192}
					className="block"
				/>
				<h1 className="block text-center font-bold font-vazir text-3xl">
					سامانه جامع ...
				</h1>
			</div>
		</div>
	);
}
