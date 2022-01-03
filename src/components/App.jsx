import { Profile } from "./Profile/Profile";
import user from "../data/user.json";
import { Statistics } from "./Statistics/Statistics";
import { data } from "../data/data";
import { FriendList } from "./FriendList/FriendList";
import friends from "../data/friends.json";
import { TransactionsHistory } from "./TransactionHistory/TransactionsHistory";
import transactions from "../data/transactions.json";
import { GlobalStyle } from "../constants/GlobalStyles";
import { Container } from "./AppStyled";
import PropTypes from "prop-types";

export const App = () => {
	return (
		<Container>
			<GlobalStyle />
			<Profile
				username={user.username}
				tag={user.tag}
				location={user.location}
				avatar={user.avatar}
				stats={user.stats}
			/>
			<Statistics title="Upload stats" stats={data} />
			{/* <Statistics stats={data} /> */}
			<FriendList friends={friends} />
			<TransactionsHistory transactions={transactions} />
		</Container>
	);
};

Profile.propTypes = {
	avatar: PropTypes.string.isRequired,
	username: PropTypes.string.isRequired,
	tag: PropTypes.string.isRequired,
	location: PropTypes.string.isRequired,
	stats: PropTypes.object.isRequired,
};
