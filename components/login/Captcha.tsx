var svgCaptcha = require("svg-captcha");
const md5 = require("md5");

export default function Captcha(props: {
	parentClass: string;
	inputClass: string;
	inputName: string;
}) {
	const captchaObject: { text: string; data: SVGAElement } =
		svgCaptcha.create({
			size: 4,
			noise: 4,
			color: true,
			background: "#fff",
			width: 120,
			height: 48,
			fontSize: 36,
		});

	const hashValue: string = md5(captchaObject.text + "MyS@lt");
	const classes =
		props.parentClass +
		" captcha-block flex items-center justify-center";
	const inputClass = props.inputClass;
	const inputName = props.inputName;

	return (
		<div className={classes}>
			<div
				className="w-1/2 h-12"
				dangerouslySetInnerHTML={{
					__html: captchaObject.data,
				}}></div>

			<input
				type="text"
				//@ts-ignore
				hash={hashValue}
				name={inputName}
				className={inputClass}
				placeholder="Captcha"
			/>
		</div>
	);
}
