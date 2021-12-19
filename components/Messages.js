import { useRef } from "react";
import { ByMoralis, useMoralis, useMoralisQuery } from "react-moralis";
import SendMessage from "./SendMessage";
const MIN_DURATION = 15;
function Messages() {
  const { user } = useMoralis();
  const endOfMessagesRef = useRef(null);

  const { data, loading, error } = useMoralisQuery(
    "Messages",
    (query) =>
      query
        .ascending("createdAt")
        .greaterThan(
          "createdAt",
          new Date(Date.now() - MIN_DURATION * 60 * 1000)
        ),
    [],
    {
      live: true,
    }
  );

  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="pb-56">
      <div className="my-5">
        <ByMoralis
          variant="dark"
          style={{ marginLeft: "auto", marginRight: "auto" }}
        />
      </div>
      <div>{/* each Message */}</div>
      <div className="flex justify-center">
        <SendMessage endOfMessagesRef={endOfMessagesRef} />
      </div>
      <div ref={endOfMessagesRef} className="text-center text-gray-400 mt-5">
        <p>You're up to date {user.get("username")}</p>
      </div>
    </div>
  );
}

export default Messages;
