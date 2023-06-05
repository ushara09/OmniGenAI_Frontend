import { useEffect, useState } from "react"
import { CopyToClipboard } from "react-copy-to-clipboard"

import "./Messages.css"

const Messages = (props) => {
	const { inList, outList } = props

	const [messagesList, setMessagesList] = useState([])
	const [copied, setCopied] = useState(false)

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
		setCopied(true)

		setTimeout(() => {
			setCopied(false)
		}, 2000)
	}

	useEffect(() => {
		const mergedList = [...inList, ...outList]
		const sortedList = sortMessages(mergedList)
		setMessagesList(sortedList)

		console.log(sortMessages(sortedList))
	}, [inList, outList])

	return (
		<div className="messages">
			{messagesList.map((message, index) => {
				return (
					<div
						key={index}
						className={message.type === "IN" ? "in" : "out"}
					>
						<span>{message.timestamp}</span>
						<RenderHTMLStr
							htmlString={message.body}
						></RenderHTMLStr>

						{message.type === "IN" ? (
							<div>
								<CopyToClipboard
									text={message.body}
									onCopy={handleCopy}
								>
									<input type="button" value={"Copy"} />
								</CopyToClipboard>
								<input type="button" value={"Edit"} />
								{copied && <p>Copied to clipboard!</p>}
							</div>
						) : null}
					</div>
				)
			})}
		</div>
	)
}

export default Messages
