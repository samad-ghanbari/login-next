import Image from "next/image";
import ac_image from "./../../public/image/forbidden.gif";

export default function Home() {
	return (
		<div className=" h-screen w-full bg-red-200 text-red-500 text-2xl font-bold border-red-700 border-2 flex justify-center items-center">
			<Image
				alt="access denied user"
				src={ac_image}
				layout="fill"
				objectFit="cover"
				className="absolute blur-lg opacity-20 z-0"
			/>

			<div className="p-10 text-center font-irsans z-10 drop-shadow-2xl">
				دسترسی به سامانه برای شما مقدور نمی‌باشد
				<p
					className="leading-loose font-bold p-10 text-2xl font-salsa drop-shadow-lg"
					dir="ltr">
					Network Access Denied!
				</p>
			</div>
		</div>
	);
}
