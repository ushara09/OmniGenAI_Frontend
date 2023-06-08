import { useEffect, useState } from "react"
import logoLight from "../../resources/images/logo-light.svg"
import "./GenerateEmail.css"
import Messages from "./Messages/Messages"
import axios from "axios"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

const GenerateEmail = (props) => {
	// API URL
	const API = "http://172.16.1.158:1997/omnigen-ai/v1/user/generateResponseForZohoTicket"
	
	const [ticketNumber, setTicketNumber] = useState("")
	const [isLoading, setIsLoading] = useState(false)

	const [inList, setInList] = useState([])
	const [outList, setOutList] = useState([])

	const sanitizeMessage = (messageBody) => {
		const divider = '<div class="divider"></div>'
		const regex = /\n/g

		return messageBody.replace(regex, divider)
	}

	const getCurrentDateTime = () => {
		const timestamp = new Date()

		return timestamp.toLocaleString()
	}

	async function getTicketInfo(data) {
		setIsLoading(true)

		await axios
			.post(
				API,
				JSON.stringify(data),
				{
					headers: {
						"Content-Type": "application/json",
						Accept: "application/json",
					},
				}
			)
			.then((result) => {
				if (result.status === 200) {
					console.log(result.data.messages)

					let ticketResponse = result.data.messages

					if (ticketResponse.length > 0) {
						let tempInList = [...inList]

						ticketResponse.map((response) => {
							return tempInList.push({
								timestamp: getCurrentDateTime(),
								body: sanitizeMessage(response?.content),
								type: "IN",
								messageType: response?.type,
							})
						})

						setInList(tempInList)
					}
					else{
						toast.info("Ticket number not found!")
					}
				}

				setIsLoading(false)
			})
			.catch((err) => {
				console.log(err)
				toast.info(":/ Something went wrong.")

				setIsLoading(false)
			})
	}

	const generateEmail = (e) => {
		e.preventDefault()

		console.log(getCurrentDateTime())

		let tempOutList = [...outList]
		tempOutList.push({
			timestamp: getCurrentDateTime(),
			body: ticketNumber,
			type: "OUT",
		})
		setOutList(tempOutList)

		getTicketInfo({
			ticketId: ticketNumber,
			message: "test123",
		})

		setTicketNumber("")
	}

	return (
		<>
			<ToastContainer />
			<div style={{ width: "100%", display: "flex" }}>
				<div className="sidenav">
					<div className="logo-wrapper">
						<img src={logoLight} alt="main-logo" />
					</div>

					<ul className="navlinks">
						<li className="active">Generate Email</li>
						<li>Account Details</li>
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
						<div className="messages-wrapper">
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
											disabled={isLoading}
											onChange={(e) =>
												setTicketNumber(e.target.value)
											}
											value={ticketNumber}
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
												textTransform: "uppercase",
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
											disabled={isLoading}
											onClick={(e) => generateEmail(e)}
											className="btn-primary"
											type="submit"
										>
											{isLoading
												? "Loading..."
												: "Generate Email"}
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
