import { useEffect, useState } from "react"
import { CopyToClipboard } from "react-copy-to-clipboard"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

import "./Messages.css"

const Messages = (props) => {
	const { inList, outList } = props

	const [messagesList, setMessagesList] = useState([])
	const [currentEditMode, setCurrentEditMode] = useState(-1)

	const sortMessages = (array) => {
		return array.sort(
			(a, b) =>
				new Date(a.timestamp).getTime() -
				new Date(b.timestamp).getTime()
		)
	}

	const RenderHTMLStr = ({ htmlString }) => {
		return <div dangerouslySetInnerHTML={{ __html: htmlString }} />
	}

	const handleCopy = () => {
		toast.info("Copied to clipboard!")
	}

	const toggleEdit = (index) => {
		if (currentEditMode === index) {
			setCurrentEditMode(-1)
		} else {
			setCurrentEditMode(index)
		}
	}

	useEffect(() => {
		const mergedList = [...inList, ...outList]
		const sortedList = sortMessages(mergedList)
		setMessagesList(sortedList)

		console.log(sortMessages(sortedList))
	}, [inList, outList])

	return (
		<>
			<div className="messages">
				{messagesList.map((message, index) => {
					return (
						<div
							key={index}
							className={message.type === "IN" ? "in" : "out"}
						>
							<span style={{ display: "block" }}>
								{message.timestamp}
							</span>

							{message.type === "IN" &&
							message.messageType === "MESSAGE" &&
							currentEditMode === index ? (
								<textarea
									style={{borderRadius: "10px",
									padding: "5ox 10px",
									outline : "none"
									}}
									rows="10"
									cols="80"
									onChange={(e) => {
										let tempCurrentMessage = [
											...messagesList,
										]
										tempCurrentMessage[index].body =
											e.target.value
										setMessagesList(tempCurrentMessage)
									}}
									style={{ minWidth: "500px" }}
									multiple
									value={messagesList[index].body}
								/>
							) : (
								<RenderHTMLStr
									htmlString={message.body}
								></RenderHTMLStr>
							)}

							{message.type === "IN" &&
							message.messageType === "MESSAGE" ? (
								<div
									style={{
										display: "flex",
										alignItems: "center",
									}}
								>
									<div
										style={{
											display: "flex",
											alignItems: "center",
										}}
									>
										<CopyToClipboard
											key={index}
											text={messagesList[index].body}
											onCopy={handleCopy}
										>
											<input
												className="msg-btn copy"
												type="button"
												value={"Copy"}
											/>
										</CopyToClipboard>
									</div>

									<input
										className="msg-btn edit"
										type="button"
										value={
											currentEditMode == index ? "Save Changes" : "Edit"}
										onClick={() => toggleEdit(index)}
									/>
								</div>
							) : null}
						</div>
					)
				})}
			</div>
		</>
	)
}

export default Messages
