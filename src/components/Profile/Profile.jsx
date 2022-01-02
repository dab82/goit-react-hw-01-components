import PropTypes from "prop-types";
import {
	Card,
	Avatar,
	UserInfoWrapper,
	UserName,
	Text,
	StatsList,
	StatsItem,
	Label,
	Value,
} from "../Profile/ProfileStyled";

export const Profile = ({ username, tag, location, avatar, stats }) => {
	return (
		<Card>
			<UserInfoWrapper>
				<Avatar src={avatar} alt="User avatar" />
				<UserName>{username}</UserName>
				<Text>@{tag}</Text>
				<Text>{location}</Text>
			</UserInfoWrapper>

			<StatsList>
				<StatsItem>
					<Label>Followers</Label>
					<Value>{stats.followers}</Value>
				</StatsItem>
				<StatsItem>
					<Label>Views</Label>
					<Value>{stats.views}</Value>
				</StatsItem>
				<StatsItem>
					<Label>Likes</Label>
					<Value>{stats.likes}</Value>
				</StatsItem>
			</StatsList>
		</Card>
	);
};

Profile.propTypes = {
	avatar: PropTypes.string.isRequired,
	username: PropTypes.string.isRequired,
	tag: PropTypes.string.isRequired,
	location: PropTypes.string.isRequired,
	stats: PropTypes.shape({
		followers: PropTypes.number.isRequired,
		views: PropTypes.number.isRequired,
		likes: PropTypes.number.isRequired,
	}),
};
