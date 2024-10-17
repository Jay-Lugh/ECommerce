import Table from 'react-bootstrap/Table';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Dashboard(props) {

    const recentPurchases =props.items;
    return (
        <>
        <div className='dashboard'>
        <Row className="mb-3">
                <Col xs={12} sm={6} md={4} className="mt-3 ml-3">
                    <Card body>
                        <h5>Total Sales: 
                            {/* {totalSales} */}
                            </h5>
                    </Card>
                </Col>
                <Col xs={12} sm={6} md={4} className="mt-3 ml-3">
                    <Card body>
                        <h5>Number of Orders: 
                            {/* {numberOfOrders} */}
                            </h5>
                    </Card>
                </Col>
            </Row>
            <h3>Recent Purchases:</h3>
            <Table striped bordered hover  >
                <thead>
                    <tr>
                        <th>Image</th>
                        <th>Name</th>
                        <th>Category</th>
                        <th>Description</th>
                        <th>Qty</th>
                        <th>Price</th>
                        <th>Barcode</th>    
                    </tr>
                </thead>
                <tbody>
                    {recentPurchases.map(purchase => (
                        <tr key={purchase.barcode}>
                            <td><img src={purchase.image} alt={purchase.name} style={{ width: '50px' }} /></td>
                            <td>{purchase.name}</td>
                            <td>{purchase.category}</td>
                            <td>{purchase.description}</td>
                            <td>{purchase.qty}</td>
                            <td>{purchase.price}</td>
                            <td>{purchase.barcode}</td>   
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>       
        </>
    );
}

export default Dashboard;
