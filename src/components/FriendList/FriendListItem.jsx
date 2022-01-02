import PropTypes from "prop-types";
import {
	FriendItem,
	Offline,
	Online,
	Avatar,
	UserName,
} from "../FriendList/FriendsStyled";

export const FriendListItem = ({ friends }) => {
	return friends.map((friend) => (
		<FriendItem key={friend.id}>
			{friend.isOnline ? <Online /> : <Offline />}
			<Avatar src={friend.avatar} alt="User avatar" width="48" />
			<UserName>{friend.name}</UserName>
		</FriendItem>
	));
};

FriendListItem.propTypes = {
	friends: PropTypes.arrayOf(
		PropTypes.shape({
			avatar: PropTypes.string.isRequired,
			name: PropTypes.string.isRequired,
			isOnline: PropTypes.bool.isRequired,
			id: PropTypes.number.isRequired,
		})
	),
};
