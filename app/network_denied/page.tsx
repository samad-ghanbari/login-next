import Image from "next/image";
import ad_gif from "/public/image/denied/forbidden.gif";
import ad from "/public/image/denied/denied.png";
import Layout from "./layout";

export default function accessDenied() {
	return (
		<div className=" h-screen w-full bg-red-200 text-red-500 font-bold border-red-700 border-y-8 flex justify-center items-center">
			<Image
				alt="access denied user"
				src={ad_gif}
				layout="fill"
				objectFit="cover"
				className="absolute blur-lg opacity-20 z-0"
			/>

			<div className="p-10 text-center font-irsans z-10 drop-shadow-2xl text-sm sm:text-lg md:text-xl lg:text-3xl">
				دسترسی به سامانه برای شما مقدور نمی‌باشد
				<Image
					alt="denied"
					src={ad}
					width={128}
					height={128}
					className="block mx-auto mt-10"
				/>
				<p
					className="leading-loose font-bold p-10 text-lg sm:text-xl md:text-2xl lg:text-3xl font-salsa drop-shadow-lg"
					dir="ltr">
					Network Access Denied!
				</p>
			</div>
		</div>
	);
}
