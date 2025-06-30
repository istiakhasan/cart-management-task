
const adminMenus = [
	{
		title: "Dashboard",
		key: "dashboard",
		icon: "ri-dashboard-horizontal-fill",
		hrefLink: "/dashboard",
	},
	{
		title: "Issues",
		key: "issues",
		icon: "ri-question-fill",
		hrefLink: "/issues",
	},
	{
		title: "Transaction",
		key: "transaction",
		icon: "ri-bar-chart-2-fill",
		hrefLink: "/transaction",
	},	
	{
		title: "Users",
		key: "users",
		icon: "ri-user-add-fill",
		hrefLink: "/users",
	},	
];

const accountsMenu = [
	{
		title: "Dashboard",
		key: "dashboard",
		icon: "ri-dashboard-horizontal-fill",
		hrefLink: "/dashboard",
	},
	{
		title: "Issues",
		key: "issues",
		icon: "ri-question-fill",
		hrefLink: "/issues",
	},
	{
		title: "Transaction",
		key: "transaction",
		icon: "ri-bar-chart-2-fill",
		hrefLink: "/transaction",
	}	
];
const withdrawPersonMenuItem = [
	{
		title: "Issues",
		key: "issues",
		icon: "ri-question-fill",
		hrefLink: "/issues",
	},
	{
		title: "Transaction",
		key: "transaction",
		icon: "ri-bar-chart-2-fill",
		hrefLink: "/transaction",
	},	
	{
		title: "Users",
		key: "users",
		icon: "ri-user-add-fill",
		hrefLink: "/users",
	},	
];
const csTeamleadMenu = [
	{
		title: "Issues",
		key: "issues",
		icon: "ri-question-fill",
		hrefLink: "/issues",
	},
	{
		title: "Transaction",
		key: "transaction",
		icon: "ri-bar-chart-2-fill",
		hrefLink: "/transaction",
	}
		
];
const csAgentMenu = [
	{
		title: "Transaction",
		key: "transaction",
		icon: "ri-bar-chart-2-fill",
		hrefLink: "/transaction",
	}	
];




const getMenuItems = (role: string): any[] => {
	if (role === "admin") {
		return adminMenus;
	}
	if (role === "accounts") {
		return accountsMenu;
	}
	if (role === "csAgent") {
		return csAgentMenu;
	}
	if (role === "csTeamlead") {
		return csTeamleadMenu;
	}
	if (role === "withdrawPerson" || role ==="bkashAgent") {
		return withdrawPersonMenuItem;
	}
	return [];
};

export default getMenuItems