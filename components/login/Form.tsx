import Captcha from "./Captcha";

export default function LoginForm(props: { FormAction: string }) {
	return (
		<form action={props.FormAction} method="POST">
			<div className="natid-block  p-2 w-full max-w-96 mx-auto">
				<label
					htmlFor="natid-input"
					className=" block mx-auto w-full text-right  font-vazir">
					کد ملی
				</label>
				<input
					type="text"
					name="natid-input"
					className="block mx-auto p-2  w-full  bg-blue-100 text-left text-blue-900 font-lato border-b-blue-500 border-b-4 rounded-sm"
					id="natid-input"
					placeholder="Your National ID"
				/>
			</div>

			<div className="password-block  p-2 w-full max-w-96 mx-auto ">
				<label
					htmlFor="password-input"
					className=" block mx-auto text-right w-full font-vazir">
					رمز ورود
				</label>
				<input
					type="password"
					name="password-input"
					className="block mx-auto p-2 w-full bg-blue-100 text-left text-blue-900 font-lato border-b-blue-500 border-b-4 rounded-sm"
					id="password-input"
					placeholder="Your Password"
				/>
			</div>

			<Captcha
				parentClass="  p-4 w-full max-w-96 mx-auto "
				inputClass=" w-1/3 h-12 text-blue-900 text-center bg-blue-100 border-b-blue-500 border-b-4 rounded-sm "
				inputName="captcha-input"
			/>

			<div className="button-block p-2 mt-2">
				<button
					className="bg-blue-300 hover:bg-blue-500 hover:border-b-blue-300 hover:drop-shadow-lg box-border block mx-auto w-1/2 leading-loose text-white font-vazir font-bold py-2 px-4 rounded"
					type="submit">
					ورود
				</button>
			</div>
		</form>
	);
}
