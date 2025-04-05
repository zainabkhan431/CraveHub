/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
import "./StatCard.css"; // Import the CSS file

const StatCard = ({ name, icon: Icon, value, color }) => {
	return (
		<motion.div
			className="stat-card"
			whileHover={{ y: -5, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)" }}
		>
			<div className="stat-card-content">
				<span className="stat-card-title">
					<Icon size={20} className="stat-card-icon" style={{ color }} />
					{name}
				</span>
				<p className="stat-card-value">{value}</p>
			</div>
		</motion.div>
	);
};

export default StatCard;
