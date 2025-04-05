import { motion } from "framer-motion";
import { BarChart2, ShoppingBag, Users, Zap } from "lucide-react";
import { Box, Grid, Container } from "@mui/material";
import AdminSidebar from "../Components/AdminSidebar";  // ✅ Ensure this exists
import StatCard from "../Components/StatCard";
import SalesOverview from "../Components/SalesOverview";
import SalesChannelChart from "../Components/SalesChannelChart";
import AdminHeader from "../Components/AdminHeader";

const Dashboard = () => {
  return (
    <div style={{ display: "flex", minHeight: "100vh", backgroundColor:" rgb(10 4 4)"}}>  {/* ✅ Sidebar + Content Layout */}
      
      {/* Sidebar */}
      <AdminSidebar />
      {/* Main Content */}

      <Box flex={1} overflow="auto" position="relative" zIndex={10} sx={{ paddingLeft: "16px" }}>
      <AdminHeader heading="Overview"/>

        <Container maxWidth="xl" sx={{ py: 6, px: { xs: 2, lg: 4 } }}>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
            
            {/* Stats Cards */}
            <Grid container spacing={3} mb={4}>
              <Grid item xs={12} sm={6} lg={3}>
                <StatCard name="Total Sales" icon={Zap} value="$12,345" color="#6366F1" />
              </Grid>
              <Grid item xs={12} sm={6} lg={3}>
                <StatCard name="New Users" icon={Users} value="1,234" color="#8B5CF6" />
              </Grid>
              <Grid item xs={12} sm={6} lg={3}>
                <StatCard name="Total Restaurants" icon={ShoppingBag} value="567" color="#EC4899" />
              </Grid>
              <Grid item xs={12} sm={6} lg={3}>
                <StatCard name="Conversion Rate" icon={BarChart2} value="12.5%" color="#10B981" />
              </Grid>
            </Grid>

          </motion.div>

          {/* Additional Overview Sections */}
          <Grid container spacing={4}>
            <Grid item xs={12} lg={6}><SalesOverview/> </Grid>
            <Grid item xs={12} lg={6}>{/* <CategoryDistributionChart /> */}</Grid>
            <Grid item xs={12}><SalesChannelChart /></Grid>
          </Grid>
          
        </Container>
      </Box>
    </div>
  );
};

export default Dashboard;
