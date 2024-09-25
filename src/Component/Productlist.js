import React, { useEffect } from 'react'
import './Style.css'

import { Container, Row, Col, Card } from 'react-bootstrap'
import ProductModal from './ProductModal'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import { setProducts, setLoading, setError } from '../redux/ProductSlice'

const Productlist = () => {

    const dispatch = useDispatch();
    const { filteredItems, loading, error } = useSelector((state) => state.products);

    //Fetch data from API...............................................................

    useEffect(() => {
        const fetchProducts = async () => {
            dispatch(setLoading(true));
            try {
                const res = await axios.get('https://ecommerce-server-2yl7.onrender.com/api/products/getproducts')
                dispatch(setProducts(res.data.products))
            } catch (error) {
                dispatch(setError('Error Fetching Products'));
            }
            finally {
                dispatch(setLoading(false))
            }
        };
        fetchProducts()

    }, [dispatch]);


    return (
        <div className='container'>
            <div className='product-list'>
                <Container >

                    <Row>
                        {loading ? (
                            <p>Loading.........</p>
                        ) : error ? (
                            <p>Error</p>
                        ) : (
                            filteredItems.map((product) => (
                                <Col key={product._id} md={4} className="mb-3">
                                    <Card className="mb-3 product-card" >
                                        <Card.Img className='product-img' variant="top" src={product.image} alt={product.name} />
                                        <Card.Body>
                                            <Card.Title className='product-title'>{product.name}</Card.Title>
                                            <Card.Text className='product-price'>${product.price}</Card.Text>
                                            <ProductModal product={product} />
                                        </Card.Body>
                                    </Card>
                                </Col>
                            ))
                        )
                        }
                    </Row>
                </Container>
            </div>
        </div>

    )
}

export default Productlist