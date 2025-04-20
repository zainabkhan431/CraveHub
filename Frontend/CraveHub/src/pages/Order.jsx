/* eslint-disable no-unused-vars */
import { Box, Grid } from "@mui/material";
import { CheckCircle, Clock, DollarSign, ShoppingBag } from "lucide-react";
import { motion } from "framer-motion";

import AdminHeader from "../Components/AdminHeader";
import AdminSidebar from "../Components/AdminSidebar";
import StatCard from "../Components/StatCard";
import DailyOrders from "../Components/DailyOrders";
import OrderTable from "../Components/OrderTable";

// Sample order data (replace this with real data or API call later)
const orders = [
  { status: 'delivered', total: 320.50 },
  { status: 'Pending', total: 150.00 },
  { status: 'delivered', total: 400.00 },
  { status: 'Pending', total: 90.75 },
  { status: 'delivered', total: 180.00 },
  { status: 'delivered', total: 225.25 },
  { status: 'delivered', total: 180.00 },
  { status: 'Pending', total: 225.25 },
];

// Dynamic values
const totalOrders = orders.length;
const completedOrders = orders.filter(o => o.status === 'delivered').length;
const pendingOrders = orders.filter(o => o.status === 'Pending').length;
const totalRevenue = orders.reduce((sum, order) => sum + order.total, 0);

const Order = () => {
  return (
    <div
      style={{
        display: "flex",
        minHeight: "100vh",
        backgroundColor: "rgb(10 4 4)",
      }}
    >
      {/* Sidebar */}
      <AdminSidebar />

      {/* Main content */}
      <Box
        flex={1}
        overflow="auto"
        position="relative"
        zIndex={10}
        sx={{ paddingLeft: "16px", paddingRight: "16px", color: "#fff" }}
      >
        <AdminHeader heading="Orders" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <Grid container spacing={3} mb={4} mt={5}>
            <Grid item xs={12} sm={6} lg={3}>
              <StatCard
                name="Total Orders"
                icon={ShoppingBag}
                value={totalOrders}
                color="#6366F1"
              />
            </Grid>
            <Grid item xs={12} sm={6} lg={3}>
              <StatCard
                name="Completed Orders"
                icon={CheckCircle}
                value={completedOrders}
                color="#10B981"
              />
            </Grid>
            <Grid item xs={12} sm={6} lg={3}>
              <StatCard
                name="Pending Orders"
                icon={Clock}
                value={pendingOrders}
                color="#F59E0B"
              />
            </Grid>
            <Grid item xs={12} sm={6} lg={3}>
              <StatCard
                name="Total Revenue"
                icon={DollarSign}
                value={`$${totalRevenue.toFixed(2)}`}
                color="#EF4444"
              />
            </Grid>
          </Grid>
        </motion.div>

        {/* Charts / Tables */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {<DailyOrders />}
        </div>

        <OrderTable />
      </Box>
    </div>
  );
};

export default Order;
