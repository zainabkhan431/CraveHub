import { useState } from 'react';
import './OrderTable.css';
import { Eye } from 'lucide-react';

const orderData = [
  { id: 'ORD001', customer: 'John Doe', total: '$235.40', status: 'Delivered', date: '2023-07-01' },
  { id: 'ORD002', customer: 'Jane Smith', total: '$412.00', status: 'Processing', date: '2023-07-02' },
  { id: 'ORD003', customer: 'Bob Johnson', total: '$162.50', status: 'Shipped', date: '2023-07-03' },
  { id: 'ORD004', customer: 'Alice Brown', total: '$750.20', status: 'Pending', date: '2023-07-04' },
  { id: 'ORD005', customer: 'Charlie Wilson', total: '$95.80', status: 'Delivered', date: '2023-07-05' },
  { id: 'ORD006', customer: 'Eva Martinez', total: '$310.75', status: 'Processing', date: '2023-07-06' },
  { id: 'ORD007', customer: 'David Lee', total: '$528.90', status: 'Shipped', date: '2023-07-07' },
  { id: 'ORD008', customer: 'Grace Taylor', total: '$189.60', status: 'Delivered', date: '2023-07-08' }
];

const getStatusClass = (status) => {
  switch (status) {
    case 'Delivered': return 'status delivered';
    case 'Processing': return 'status processing';
    case 'Shipped': return 'status shipped';
    case 'Pending': return 'status pending';
    default: return 'status';
  }
};

const OrderTable = () => {
    const [searchTerm, setSearchTerm] = useState("");
	const [filteredOrders, setFilteredOrders] = useState(orderData);

	const handleSearch = (e) => {
		const term = e.target.value.toLowerCase();
		setSearchTerm(term);
		const filtered = orderData.filter(
			(order) => order.id.toLowerCase().includes(term) || order.customer.toLowerCase().includes(term)
		);
		setFilteredOrders(filtered);
	};
  return (
    <div className="order-table-container">
      <div className="order-table-header">
        <h2>Order List</h2>
        <input
						type='text'
						placeholder='Search orders...'
						className='order-search'
						value={searchTerm}
						onChange={handleSearch}
					/>
      </div>
      <table className="order-table">
        <thead>
          <tr>
            <th>Order ID</th>
            <th>Customer</th>
            <th>Total</th>
            <th>Status</th>
            <th>Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredOrders.map((order) => (
            <tr key={order.id}>
              <td>{order.id}</td>
              <td>{order.customer}</td>
              <td>{order.total}</td>
              <td><span className={getStatusClass(order.status)}>{order.status}</span></td>
              <td>{order.date}</td>
              <td><Eye size={18} /></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OrderTable;
