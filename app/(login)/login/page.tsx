import Image from "next/image";

export default function Home() {
	return (
		<div className="flex flex-wrap h-screen w-full">
			<div className="w-full md:w-1/2 lg:w-1/3 flex items-center justify-center  bg-gray-500">
				<div className="bg-blue-800 text-white w-full m-4 p-4 ">
					<h1 className="font-vazir text-white text-center text-2xl text-drop-shadow-2xl">
						ورود به سامانه
					</h1>
					<hr className="p-2 w-1/2 mx-auto" />

					<form action="" method="POST">
						<div className="natid-block  p-2">
							<label
								htmlFor="natid-input"
								className=" block mx-auto text-right w-1/2 font-vazir">
								کد ملی
							</label>
							<input
								type="text"
								name="natid"
								className="block mx-auto p-2 m-2 w-1/2 bg-blue-100 text-left text-blue-900 font-lato border-b-blue-500 border-b-4 rounded-sm"
								id="natid-input"
								placeholder="Your National ID"
							/>
						</div>

						<div className="password-block  p-2">
							<label
								htmlFor="password-input"
								className=" block mx-auto text-right w-1/2 font-vazir">
								رمز ورود
							</label>
							<input
								type="password"
								name="natid"
								className="block mx-auto p-2 m-2 w-1/2 bg-blue-100 text-left text-blue-900 font-lato border-b-blue-500 border-b-4 rounded-sm"
								id="password-input"
								placeholder="Your Password"
							/>
						</div>
						<div className="button-block p-2 mt-8">
							<button
								className="bg-blue-300 hover:bg-blue-500 hover:border-b-blue-300 hover:drop-shadow-lg box-border block mx-auto w-1/2 leading-loose text-white font-vazir font-bold py-2 px-4 rounded"
								type="button">
								ورود
							</button>
						</div>
					</form>
					<p
						dir="ltr"
						className="text-center text-gray-400 text-xs">
						&copy;2024 All rights reserved.
					</p>
				</div>
			</div>
			<div className="w-full md:w-1/2  lg:w-2/3 bg-gray-400">2</div>
		</div>
	);
}
