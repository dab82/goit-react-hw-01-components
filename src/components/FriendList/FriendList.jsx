import PropTypes from "prop-types";
import { FriendListItem } from "../FriendList/FriendListItem";
import { Friends } from "../FriendList/FriendsStyled";
export const FriendList = ({ friends }) => {
	return (
		<Friends>
			<FriendListItem friends={friends} />
		</Friends>
	);
};

FriendListItem.propTypes = {
	friends: PropTypes.array.isRequired,
};
