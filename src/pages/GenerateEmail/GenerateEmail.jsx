import { useState } from "react"
import logoLight from "../../resources/images/logo-light.svg"
import "./GenerateEmail.css"
import Messages from "./Messages/Messages"

const GenerateEmail = (props) => {
	const sanitizeMessage = (messageBody) => {
		const divider = '<div class="divider"></div>'
		const regex = /\n/g

		return messageBody.replace(regex, divider)
	}

	const getRandomDateTime = () => {
		const randomHour = Math.floor(Math.random() * 24)
		const randomMinute = Math.floor(Math.random() * 60)
		const randomSecond = Math.floor(Math.random() * 60)

		const timestamp = new Date("2023-06-04")
		timestamp.setHours(randomHour, randomMinute, randomSecond)

		return timestamp.toLocaleString()
	}

	const [inList] = useState([
		{
			timestamp: getRandomDateTime(),
			body: sanitizeMessage(
				"Dear [Customer Name],\nThank you for contacting us regarding your order #12345. We apologize for any inconvenience caused.\nOur team is currently investigating the issue with your order and working to resolve it promptly. We understand the importance of timely delivery and are actively monitoring the situation.\nWe will provide regular updates on the progress of your order. If you have any questions or concerns, please don't hesitate to contact us at [customer support contact number].\nWe appreciate your patience and apologize for any inconvenience caused. Best regards,\n[Your Name]\nCustomer Support Agent"
			),
			type: "IN",
		},
		{
			timestamp: getRandomDateTime(),
			body: sanitizeMessage(
				"Dear [Customer Name],\nThank you for contacting us regarding your order #12345. We apologize for any inconvenience caused.\nOur team is currently investigating the issue with your order and working to resolve it promptly. We understand the importance of timely delivery and are actively monitoring the situation.\nWe will provide regular updates on the progress of your order. If you have any questions or concerns, please don't hesitate to contact us at [customer support contact number].\nWe appreciate your patience and apologize for any inconvenience caused. Best regards,\n[Your Name]\nCustomer Support Agent"
			),
			type: "IN",
		},
		{
			timestamp: getRandomDateTime(),
			body: sanitizeMessage(
				"Dear [Customer Name],\nThank you for contacting us regarding your order #12345. We apologize for any inconvenience caused.\nOur team is currently investigating the issue with your order and working to resolve it promptly. We understand the importance of timely delivery and are actively monitoring the situation.\nWe will provide regular updates on the progress of your order. If you have any questions or concerns, please don't hesitate to contact us at [customer support contact number].\nWe appreciate your patience and apologize for any inconvenience caused. Best regards,\n[Your Name]\nCustomer Support Agent"
			),
			type: "IN",
		},
	])

	const [outList] = useState([
		{
			timestamp: getRandomDateTime(
				new Date("2023-06-01"),
				new Date("2023-06-30")
			),
			body: "ZHTN5369",
			type: "OUT",
		},
	])

	return (
		<>
			<div style={{ width: "100%", display: "flex" }}>
				<div className="sidenav">
					<div className="logo-wrapper">
						<img src={logoLight} alt="main-logo" />
					</div>

					<ul className="navlinks">
						<li className="active">Generate Email</li>
						<li>
                        <a href="#pageSubmenu2" data-bs-toggle="collapse" aria-expanded="false" class="dropdown-toggle submenu"><span className="p-left" >Account Details</span></a>
                        <ul class="collapse list-unstyled" id="pageSubmenu2">
                            <li>
                                <a href="#">Setting</a>
                            </li>
                            <li>
                                <a href="#">Log Out</a>
                            </li>
                        </ul>
                    </li>
					</ul>
				</div>

				<div style={{ flex: "4", padding: "40px", height: "100vh" }}>
					<div
						style={{
							display: "flex",
							flexDirection: "column",
							gap: "40px",
							height: "100%",
						}}
					>
						<div
							style={{
								flex: 8,
								boxShadow:
									"inset 0px 0px 18px 2px rgba(0, 0, 0, 0.25)",
								borderRadius: "10px",
								padding: "24px",
								overflowY: "scroll",
								maxHeight: "90%",
							}}
						>
							<Messages inList={inList} outList={outList} />
						</div>

						<div style={{ flex: 1, width: "100%" }}>
							<form style={{ height: "100%" }}>
								<div
									style={{
										display: "flex",
										gap: "20px",
										width: "100%",
										height: "100%",
									}}
								>
									<div
										style={{
											width: "100%",
											height: "100%",
											borderRadius: "10px",
										}}
									>
										<input
											style={{
												height: "100%",
												width: "100%",
												backgroundColor: "#D9D9D9",
												padding: "24px",
												fontWeight: 500,
												fontSize: "20px",
												outline: "none",
												border: "none",
												borderRadius: "10px",
											}}
											type="text"
											name="ticket-no"
											placeholder="Enter ticket no"
										/>
									</div>

									<div
										style={{
											width: "20%",
											height: "100%",
										}}
									>
										<button
											className="btn-primary"
											type="submit"
										>
											Generate Email
										</button>
									</div>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default GenerateEmail
